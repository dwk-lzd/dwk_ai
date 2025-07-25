/**
 * chat 聊天
 * 
 */
const DEEPSEEK_CHAT_API_URL = 'https://api.deepseek.com/chat/completions'
const KIMI_CHAT_API_URL = 'https://api.moonshot.cn/v1/chat/completions'
export const chat = async (
    messages,
    api_url = 'https://api.deepseek.com/chat/completions',
    api_key = import.meta.env.VITE_DEEPSEEK_API_KEY,
    model = 'deepseek-chat',
) => {
    try {
        const response = await fetch(api_url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${api_key}`
            },
            body: JSON.stringify({
                model,
                messages,
                stream: false
            })
        })
        const data = await response.json()
        return {
            code: 0,
            data: {
                role: 'assistant',
                content: data.choices[0].message.content
            }
        }
    } catch (err) {
        return {
            code: 1,
            msg: '出错了...'
        }
    }
}

export const kimitChat = async (message) => {
    const res = await chat(
        message,
        KIMI_CHAT_API_URL,
        import.meta.env.VITE_KIMI_API_KEY,
        'moonshot-v1-auto'
    )
    return res
}