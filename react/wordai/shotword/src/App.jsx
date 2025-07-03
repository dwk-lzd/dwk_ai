import { useState } from 'react'
import PictureCard from './components/PictureCard'
// uploadImg 太长了 -> generateAudio 模块化 -> 复用 -> lib
import { generateAudio } from './lib/audio.js'
import './App.css'

function App() {
  // JSX react 优势  方便写html模板
  // es6 字符串模板支持多行
  const picPrompt = `
    分析图片内容，找出最能描述图片的应该英文单词，尽量选择更简单的A1~A2的词汇。
    返回JSON数据：
    {
      "image_discription":"图片描述",
      "representative_word":"图片代表的英文单词",
      "example_sentence":"结合英文单词和图片描述给出应该简单的例句",
      "explaination":"结合图片解释英文单词，段落以Look at...开头，将段落分句，每一句单独一行，解释的最后给一个日常生活有关的问句？",
      "explainnation_replys":["根据explaination给出的回复1,“根据explaination给出的回复2”"]
    }
  `
  // 持有数据状态
  const [word, setWord] = useState('上传图片')
  const [sentence, setSentence] = useState('')
  const [explainations, setExplainations] = useState([])

  const [audio, setAudio] = useState('')
  const uploadImage = async (imgData) => {
    // console.log(imgData, '来自父组件的打印');
    setWord('正在分析中...')
    const endpoint = 'https://api.moonshot.cn/v1/chat/completions'
    const headers = {
      Authorization: `Bearer ${import.meta.env.VITE_KIMI_API_KEY}`,
      'Content-Type': 'application/json',
    }
    const responwe = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model: 'moonshot-v1-8k-vision-preview',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image_url',  // base64图片
                image_url: { 'url': imgData }
              },
              {
                type: 'text',
                text: picPrompt,
              }
            ]
          }
        ]
      })
    })
    const data = await responwe.json()
    console.log(data);
    const replyData = JSON.parse(data.choices[0].message.content)
    setWord(replyData.representative_word)
    setSentence(replyData.example_sentence)

    const audioUrl = await generateAudio(replyData.explaination)
  }

  return (
    <div className='container'>
      {/* 自定义组件，App.jsx 的子组件 */}
      {/* 组件 html，css，js 像沙子一样， 组合起来，图片上传功能
      模块化了，可以实现复用，页面由dom树 -》 组件树 */}
      {/* props */}
      <PictureCard
        uploadImage={uploadImage}
        word={word}
        audio={audio}
      />
      <div className="output">
        <div>{sentence}</div>
      </div>
    </div>
  )
}

export default App
