import Mock from 'mockjs';

export default [{
    url: '/api/search',
    method: 'get',
    timeout: 1000,
    response: (req, res) => {
        // ?keyword=释小龙
        const keyword = req.query.keyword;
        let num = Math.floor(Math.random() * 10)
        let list = []
        for (let i = 0; i < num; i++) {
            // 随机内容
            const randomData = Mock.mock({
                title: '@ctitle(3,6)'
            })
            // console.log(randomData)
            list.push(`${randomData.title}${keyword}`)
        }
        return {
            code: 0,
            data: {
                data: list
            }
        }
    }
},
{
    url: '/api/hotlist',
    method: 'get',
    timeout: 1000,
    response: (req, res) => {
        return {
            code: 0,
            data: [
                {
                    id: '101',
                    city: '北京',
                },
                {
                    id: '102',
                    city: '上海'
                },
                {
                    id: '103',
                    city: '福州'
                }
            ]
        }
    }

},
{
    url: '/api/detail/:id',
    method: 'get',
    timeout: 1000,
    response: (req, res) => {
        const randomData = Mock.mock({
            title: '@ctitle(5, 10)',
            price: '@integer(60, 100)',
            desc: '@cparagraph(10,30)',
            images: [
                {
                    url: 'https://resouces.modelscope.cn/cover-images/88aa6906-bc1e-4392-9311-a76aebd0307e.png?x-oss-process=image/format,jpg/quality,Q_50',
                    alt: '@ctitle(5, 10)'
                },
                {
                    url: 'https://resouces.modelscope.cn/cover-images/00e67ea0-7d18-4f92-8aec-f84336e086e0.png?x-oss-process=image/format,jpg/quality,Q_50',
                    alt: '@ctitle(5, 10)'
                },
                {
                    url: 'https://img.36krcdn.com/hsossms/20250729/v2_17dc4793268c46558e68355c5b25a55d@000000@ai_oswg369871oswg1536oswg722_img_000~tplv-1marlgjv7f-ai-v3:600:400:600:400:q70.jpg?x-oss-process=image/format,webp',
                    alt: '@ctitle(5, 10)'
                },
                {
                    url: 'https://resouces.modelscope.cn/cover-images/53f542d5-4dc1-4e37-b0cd-5ef6dd2337b4.png?x-oss-process=image/format,jpg/quality,Q_50',
                    alt: '@ctitle(5, 10)'
                },
            ]
        })

        return {
            code: 0,
            data: randomData
        }
    }
}
]