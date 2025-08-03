import Mock from 'mockjs';
import jwt from 'jsonwebtoken'

const secret = '$^%&&^&*^&^*&'

const getJobs = (page, pageSize = 10) => {
    return Array.from({ length: pageSize }, (_, i) => ({
        id: `${page}-${i}`,
        title: `${Mock.Random.pick(['前端开发工程师', '网络安全专家', 'UI/UX设计师', '后端开发工程师', '软件测试工程师'])} - ${Mock.Random.integer(300, 400)}+元/日`,
        url: 'https://resouces.modelscope.cn/cover-images/88aa6906-bc1e-4392-9311-a76aebd0307e.png?x-oss-process=image/format,jpg/quality,Q_50',
        salary: `${Mock.Random.integer(8000, 12000)}-${Mock.Random.integer(9500, 15000)}元/月`,
        company: `${Mock.Random.cword(2, 5)}科技有限公司 ${Mock.Random.integer(50, 1000)}人以上`,
        requirements: [
            Mock.Random.pick(['本科及以上学历', '有实际项目经验', '熟悉JavaScript/HTML/CSS', '有团队合作精神', '良好的沟通能力']),
            Mock.Random.pick(['了解网络安全标准', '掌握至少一种编程语言', '能独立解决问题', '具有创新思维'])
        ],
        contact: {
            name: Mock.Random.cname(),
            role: '招聘专员',
            responseRate: `${Mock.Random.integer(60, 100)}%`
        },
        location: `${Mock.Random.pick(['北京', '上海', '广州', '深圳', '杭州', '成都'])}`
    }));
};

export default [
    {
        url: '/api/jobs',
        method: 'get',
        timeout: 1000,
        response: ({ query }) => {
            const page = Number(query.page) || 1;
            return {
                code: 0,
                data: getJobs(page)
            };
        },
    },
    {
        url: '/api/search',
        method: 'get',
        timeout: 400,
        response: (req, res) => {
            return {
                code: 0,
                data: [
                    {
                        id: 1,
                        name: '前端开发工程师',
                    },
                    {
                        id: 2,
                        name: '网络安全工程师',
                    },
                    {
                        id: 3,
                        name: 'UI/UX设计师',
                    },
                    {
                        id: 4,
                        name: '后端开发工程师',
                    },
                    {
                        id: 5,
                        name: '软件测试工程师',
                    },
                    {
                        id: 6,
                        name: '产品经理',
                    },
                    {
                        id: 7,
                        name: '数据分析师',
                    },
                    {
                        id: 8,
                        name: '运维工程师',
                    },
                ]
            }
        }
    },
    {
        url: '/api/suggestSearch',
        method: 'get',
        response: (req, res) => {
            const keyword = req.query.keyword;

            // 職位名稱庫
            const jobTitles = [
                '前端开发工程师',
                'React开发工程师',
                'Vue开发工程师',
                'JavaScript开发工程师',
                '前端开发',
                '前端牛马工程师',
                '前端架构师',
                '前端讲师',
                'UI设计师',
                'UI设计师讲师',
                '产品经理',
                '数据分析师',
                '后端开发工程师',
                'Java开发工程师',
                'Java后端开发工程师',
                'Java后端架构师',
                'Python开发工程师',
                'Python后端开发工程师',
                'Python讲师',
                '运维工程师',
                '测试工程师',
                '算法工程师',
                '算法讲师',
                '移动端开发工程师',
                '移动端开发讲师',
                '全栈开发工程师',
                '全栈开发讲师',
                'Node.js开发工程师',
                'Node.js讲师',
                'TypeScript开发工程师',
                'TypeScript讲师',
                '小程序开发工程师',
                '小程序开发讲师',
                'H5开发工程师',
                'H5开发讲师',
            ];

            let suggestions = [];

            if (keyword && keyword.trim()) {
                // 根據關鍵詞過濾匹配的職位
                const matchedJobs = jobTitles.filter(title =>
                    title.toLowerCase().includes(keyword.toLowerCase())
                );

                // 隨機選擇3-6個匹配的職位
                const count = Mock.Random.integer(3, 6);
                suggestions = Mock.Random.shuffle(matchedJobs).slice(0, count);
            } else {
                // 無關鍵詞時隨機返回3-5個職位
                const count = Mock.Random.integer(3, 5);
                suggestions = Mock.Random.shuffle(jobTitles).slice(0, count);
            }

            // 轉換為需要的格式
            const result = suggestions.map((name, index) => ({
                id: index + 1,
                name: name
            }));

            return {
                code: 0,
                data: result,
                message: 'success'
            }
        }
    },
    {
        url: '/api/login',
        method: 'post',
        timeout: 1000,
        response: (req, res) => {
            const { username, password } = req.body
            if ((username !== 'job_seeker1' || password !== '123456') && (username !== 'job_seeker2' || password !== '123456')) {
                return {
                    code: 1,
                    message: '用户名或密码错误'
                }
            }
            const token = jwt.sign({
                user: {
                    id: username === 'job_seeker1' ? '001' : '002',
                    username,
                }
            }, secret, {
                expiresIn: 86400,
            })
            return {
                code: 0,
                token,
                data: {
                    id: username === 'job_seeker1' ? '001' : '002',
                    username,
                }
            }
        }
    },
    {
        url: '/api/user',
        method: 'get',
        response: (req, res) => {
            const token = req.headers['authorization'].split(' ')[1]

            if (token) {
                const decode = jwt.verify(token, secret)
                return {
                    code: 0,
                    user: decode.username
                }
            } else {
                return {
                    code: 1,
                    message: 'Invalid Token'
                }
            }
        }
    }
]