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

// 生成隨機圖片的函數
const generateRandomImage = () => {
    // 隨機背景顏色（確保文字清晰可見）
    const bgColors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
        '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
        '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D7BDE2'
    ]
    const bgColor = Mock.Random.pick(bgColors)

    // 根據背景顏色選擇對比度高的文字顏色
    const textColor = bgColor.startsWith('#FF') || bgColor.startsWith('#F7') || bgColor.startsWith('#F8') ? '#333' : '#FFF'

    // 生成 SVG 圖片
    const svg = `
        <svg width="100" height="150" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="150" fill="${bgColor}"/>
            <text x="50" y="80" font-family="Arial, sans-serif" font-size="16" font-weight="bold" 
                  text-anchor="middle" fill="${textColor}">hello</text>
        </svg>
    `

    return `data:image/svg+xml;base64,${btoa(svg)}`
}

const getSquare = (page, pageSize = 10) => {
    return Array.from({ length: pageSize }, (_, i) => {
        // 隨機生成 1-3 張圖片
        const imageCount = Mock.Random.integer(1, 3)
        const images = Array.from({ length: imageCount }, () => generateRandomImage())

        return {
            id: `${page}+${i}`,
            avator: 'https://resouces.modelscope.cn/cover-images/88aa6906-bc1e-4392-9311-a76aebd0307e.png?x-oss-process=image/format,jpg/quality,Q_50',
            text: `${Mock.Random.pick([
                '已上岸，我来分享一下经验：面试前充分准备，了解公司背景，预习常见问题，自信展现自我...',
                '曾被拒十次，最终成功：失败不可怕，复盘每一次，找出短板并针对性提升...',
                '国企上岸分享：带上简历和作品集，即使对方已有副本，主动提供显示诚意...',
                '面经分享：清晰表达个人经历与成就，强调能为公司带来的价值，并从失败中学习...',
                '面试技巧分享：积极倾听面试官提问，思考后再答，避免急于求成...',
                '一线大厂面试分享：提问环节准备好问题，展示对职位及行业的深刻理解与兴趣...',
                '面试心得：不怕提及过往失败经验，重点在于如何从中学习成长...',
                '来分享一下面试经历：展现团队合作精神，讲述协作完成项目的成功案例，包括面对失败时的应对...',
                '拿到Offer之后我们应该：跟进感谢邮件，简述面试收获，并再次表达加入意愿...',
                '接受失败：保持乐观心态面对结果，无论成败，每次面试都是宝贵经验...',
                '多次尝试终获成功：不要害怕失败，它教会了我更多比成功更重要的东西...',
                '失败乃成功之母：总结失败中的教训，下一次就会做得更好...',
                '从挫折中学到的：每一次失败后重新站起来，让自己变得更加强大...'
            ])}`,
            person: `${Mock.Random.cfirst()}${Mock.Random.pick(['女士', '先生'])}`,
            images: images,
            type: `${Mock.Random.pick(['面经', '经验分享', '面试技巧', '面试心得', '面试经历', '面试分享'])}`,
            comments: Array.from({ length: Mock.Random.integer(1, 3) }, (_, commentIndex) => ({
                id: `${page}+${i}+${commentIndex}`,
                name: `${Mock.Random.cfirst()}${Mock.Random.pick(['女士', '先生'])}`,
                text: Mock.Random.pick([
                    '加油',
                    '这是什么公司',
                    '这是什么工作',
                    '写的不错啊',
                    '有没有内推啊',
                    '你真的太棒了,真的要向你学习,现在的社会找工作... ',
                    '求公司名字，我也想去！',
                    '看完泪目了，最近投了50份简历没回音...',
                    '太真实了，面试官问"你有什么缺点"我直接懵了...',
                    '收藏了，等我上岸也来写面经',
                    '感谢分享！已截图保存，准备明天面试用',
                    '楼主运气好，我面到一半被HR打断说"下一个..."',
                    '同是天涯打工人，抱抱你，也抱抱自己',
                    '建议出个视频版，想听你讲讲当时的场景',
                    '这才是干货！比那些营销号强一百倍',
                    '有没有交流群？想认识更多找工作的小伙伴',
                    '楼主太厉害了，我也要去试试',
                    '这个公司怎么样？工作环境好吗？',
                    '面试官问的问题好刁钻啊',
                    '我也想去试试，有联系方式吗？',
                    '楼主分享得很详细，学到了很多',
                    '这个薪资待遇怎么样？',
                    '面试流程大概多久？',
                    '需要准备什么材料？',
                    '有笔试吗？难度如何？',
                    '公司文化怎么样？',
                    '工作时间是双休吗？',
                    '有年终奖吗？',
                    '技术栈是什么？',
                    '团队氛围怎么样？',
                    '有培训机会吗？',
                    '晋升空间大吗？',
                    '工作压力大吗？',
                    '有期权吗？',
                    '公司发展前景如何？'
                ]),
            }))
        }
    })
}

// 首页招聘信息
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
    // 热门搜索建议
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
    // 搜索建议
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
    // 登录
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
    // 检测token
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
    },
    // 广场
    {
        url: '/api/square',
        method: 'get',
        timeout: 500,
        response: ({ query }) => {
            const page = Number(query.page) || 1;
            return {
                code: 0,
                data: getSquare(page)
            };
        }
    }
]