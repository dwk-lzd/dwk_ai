import Mock from 'mockjs';

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
    }
]