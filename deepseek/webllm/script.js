// // console.log('欢迎使用 WebLLM 项目！');
// // js 主动的去拉取http 接口
// // web 1.0 时代 html/css/js  服务器端java 返回的 js 只做简单的交互
// // web 2.0 时代 js 主动的请求后端服务器  做动态的页面
// fetch('https://api.github.com/users/shunwuyu/repos')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         document.querySelector('#reply').innerHTML += data.map(repo => `
//     <ul>
//       <li>${repo.name}</li>
//     </ul> 
//     `).join('')
//     })

// 当LLM API 服务
// chat 方式 AIGC 生成/完成返回的内容
// 由 openai 制定的
// 请求行
// 命名
// webLLM web 底层是 http 协议
// llm  api 服务
// api.deepseek.com 二级域名 LLM服务以api的方式提供
// https 加密的http 更安全
// /chat 聊天的方式 messages 
// completions 完成的方式  生成的内容
const endpoint = "https://api.deepseek.com/chat/completions"
// 请求头
const headers = {
    // 内容类型
    'Content-Type': 'application/json',
    // 授权
    Authorization: `Bearer sk-bee883d35df94f0193737d4ffb4963e6`
}
// 请求体
const payload = {
    model: 'deepseek-chat',
    messages: [
        // chat 三种方式
        // 1.系统角色 只会出现一次 设置系统的角色 开始会话时
        // 2.用户角色 user  提问
        // 3.助手角色
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: '你好 deepseek' }
    ]
}

fetch(endpoint, {
    method: 'POST',
    headers: headers,
    // http 请求传输只能是字符串，二进制流 
    // 将复杂数据类型转换成 JSON字符串
    body: JSON.stringify(payload)
    // then 请求 + LLM 生成需要花费时间
    // http 请求 是基于请求响应的简单协议
    // 返回的也是文本或二进制流
}).then(res => res.json())
    // then 解析返回的JSON数据 也要花时间
    .then(data => {
        console.log(data);
        document.querySelector('#reply').innerHTML
            = data.choices[0].message.content
    })