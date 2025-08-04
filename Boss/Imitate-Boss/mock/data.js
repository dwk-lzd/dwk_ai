import Mock from 'mockjs';
import jwt from 'jsonwebtoken'

const secret = '$^%&&^&*^&^*&'

const getJobs = (page, pageSize = 10) => {
    return Array.from({ length: pageSize }, (_, i) => ({
        id: `${page}-${i}`,
        graduation: `${Mock.Random.pick([
            '本科',
            '硕士',
            '大专',
        ])}`,
        jobTime: `${Mock.Random.pick([
            '4天/周',
            '5天/周',
            '6天/周',
        ])}`,
        jobTimes: `${Mock.Random.pick([
            '2个月',
            '3个月',
            '4个月',
            '5个月',
            '6个月',
        ])}`,
        title: `${Mock.Random.pick([
            '前端开发工程师',
            'JavaScript开发工程师',
            '前端开发',
            '前端架构师',
            'UI设计师',
            '后端开发工程师',
            'Java后端开发工程师',
            'Python开发工程师',
            '运维工程师',
            '测试工程师',
            '算法工程师',
            '移动端开发工程师',
            '全栈开发工程师',
            'Node.js开发工程师',
            'TypeScript开发工程师',
        ])}`,
        company: Mock.Random.pick([
            {
                name: '阿里巴巴',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzE4OTBGRiIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BPC90ZXh0Pgo8L3N2Zz4K',
                size: '10000人以上',
            },
            {
                name: '腾讯科技',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzAwQTg1NCIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UPC90ZXh0Pgo8L3N2Zz4K',
                size: '10000人以上',
            },
            {

                name: '字节跳动',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0ZGNkIzNSIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CPC90ZXh0Pgo8L3N2Zz4K',
                size: '10000人以上',
            },
            {

                name: '美团',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0ZGRDcwMCIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NPC90ZXh0Pgo8L3N2Zz4K',
                size: '10000人以上',
            },
            {

                name: '滴滴出行',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0ZGNDQ1MCIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EPC90ZXh0Pgo8L3N2Zz4K',
                size: '8000人以上',
            },
            {

                name: '京东',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0U2MDAwMCIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5KPC90ZXh0Pgo8L3N2Zz4K',
                size: '8000人以上',
            },
            {
                name: '小米',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0ZGNzUwMCIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NPC90ZXh0Pgo8L3N2Zz4K',
                size: '9000人以上',
            },
            {

                name: '百度',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzQyODVGQSIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CPC90ZXh0Pgo8L3N2Zz4K',
                size: '8000人以上',
            },
            {

                name: '哔哩哔哩',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0ZGN0Y5RCIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiNGRjQ0NTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkI8L3RleHQ+Cjwvc3ZnPgo=',
                size: '10000人以上',
            },
            {

                name: '华为',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0YwMDAwMCIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0Pgo8L3N2Zz4K',
                size: '10000人以上',
            },
            {

                name: '拼多多',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0ZGRDcwMCIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QPC90ZXh0Pgo8L3N2Zz4K',
                size: '10000人以上',
            }
        ]),

        salary: `${Mock.Random.pick([
            '8K-12K',
            '9K-13K',
            '10K-15K',
            '11K-16K',
            '面议',
            '12K-18K',
            '13K-19K',
            '15K-25K',
            '18K-30K',
            '19K-35K',
            '20K-35K',
            '25K-40K',
            '30K-50K'
        ])}`,
        contact: {
            name: Mock.Random.cname(),
            role: '招聘专员',
        },
        benefits: Mock.Random.pick([
            ['五险一金', '股票期权', '年终奖'],
            ['弹性工作时间', '股票期权', '带薪年假'],
            ['健身房', '晋升快', '团队氛围好'],
            ['零食下午茶', '节日福利', '员工旅游'],
            ['地铁周边', '免费班车', '健身房'],
            ['扁平管理', '成长空间大', '员工旅游'],
            ['节日福利'],
            ['成长空间大'],
            ['员工旅游'],
            ['带薪年假'],
            ['股票期权'],
            ['零食下午茶'],
            ['年终奖', '晋升快'],
            ['弹性工作时间', '健身房'],
            ['技能培訓', '大牛很多'],
            ['团队氛围好', '免费班车'],
            ['团队氛围好', '双休'],
        ]),
        location: `${Mock.Random.pick(['北京', '上海', '广州', '深圳', '杭州', '成都', '重庆', '南京', '武汉', '郑州'])}`
    }));
};

export default [
    {
        url: '/api/jobs',
        method: 'get',
        timeout: 500,
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