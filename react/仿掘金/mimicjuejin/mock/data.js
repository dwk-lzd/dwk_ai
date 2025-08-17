import Mock from 'mockjs'

export default [
    {
        url: '/api/search',
        method: 'get',
        timeout: '1000',
        response: (req, res) => {
            const keyword = req.query.keyword
            const randomNum = Math.floor(Math.random() * 10) + 1
            const randomList = []
            for (let i = 0; i < randomNum; i++) {
                const randomSentence = Mock.mock('@csentence(5,10)')
                randomList.push(`${randomSentence}${keyword}`)
            }
            return {
                code: 0,
                data: randomList
            }
        }
    }
]