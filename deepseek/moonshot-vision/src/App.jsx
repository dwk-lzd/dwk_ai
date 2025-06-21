import { useState } from 'react'
import './App.css'

function App() {
  console.log(import.meta.env.VITE_API_KEY);
  // useState 是react 内置的hook（钩子）函数 快速地解决一些问题 响应式的数据状态
  // useRef DOM 等对象地绑定
  const [content, setContent] = useState('')
  const [imgBase64Data, setImgBase64Data] = useState('')
  const [isValid, setIsValid] = useState(false)
  // base64 google 推出的编码方式 
  const updateBase64Data = (e) => {
    // 拿到我们的图片 e html5 js 和 操作系统本地文件交互
    const file = e.target.files[0]
    // console.log(file);
    if (!file) return
    // html5 读的方式 读取文件
    const reader = new FileReader()
    reader.readAsDataURL(file)
    // 异步操作
    reader.onload = () => {
      // console.log(reader.result);
      setImgBase64Data(reader.result)
      setIsValid(true)
    }

  }
  const update = async () => {
    if (!imgBase64Data) return
    const endpoint = 'https://api.moonshot.cn/v1/chat/completions'
    const headers = {
      'Content-Type': 'application/json',
      // 授权码 Bearer 一般都会带，后面是token
      'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
    }
    // 实时反馈给用户 
    setContent('正在生成中...')
    const response = await fetch(
      endpoint,
      {
        // get 提交没有请求体
        method: 'POST',
        // 当key和value一一对应的时候 可以省略
        headers,
        body: JSON.stringify({
          model: 'moonshot-v1-8k-vision-preview',
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'image_url',
                  image_url: {
                    'url': imgBase64Data
                  }
                },
                {
                  'type': 'text',
                  'text': '请描述图片的内容',
                }
              ]
            }
          ]
        })
      }
    )
    // 从服务端发过来的数据 是二进制流 json() 同样是一个异步操作
    const data = await response.json()
    console.log(data);
    setContent(data.choices[0].message.content)
  }
  return (
    <div className='container'>
      <div>
        <label htmlFor='fileInput'>文件：</label>
        <input
          type="file"
          id='fileInput'
          className='input'
          accept='.jpeg,.jpg,.png,.gif'
          onChange={updateBase64Data}
        />
        <button onClick={update} disabled={!isValid}>提交</button>
      </div>
      <div className="output">
        <div className="preview">
          {
            imgBase64Data && <img src={imgBase64Data} alt="" />
          }
        </div>
        <div>
          {content}
        </div>
      </div>
    </div>
  )
}

export default App
