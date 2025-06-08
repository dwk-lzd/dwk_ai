// DeepSeek API配置
const DEEPSEEK_API_KEY = 'sk-07f97ba6ca4c4babbfc1366f50df704a';
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

// 网络热梗数据库
const data = {
    melonEvents: [
        '🍉 山东泰安陪酒事件(2023-08)：女职员被曝多次陪领导饮酒至深夜，监控显示醉卧政府大楼前',
        '🐼 熊猫花花爆红(2023-09)：成都基地熊猫因独特"饭团坐姿"成顶流，单日参观限流2万人',
        '🍉 顶流男星被曝与女制片酒店研讨剧本7小时，房间找到写满批注的《演员的自我修养》',
        '🔥 电竞冠军直播时误接商务电话："王总，假赛的事下月再说"，百万观众当场见证',
        '💥 离婚夫妻被扒共用教练：前妻塑形私教课竟是前夫买的双人套餐，健身房监控画面曝光',
        '🤖 网文大神被实锤用AI续写：最新章节出现"感谢OpenAI提供创作支持"的水印文字',
        '🎭 双面影帝翻车：慈善晚会戴的百万名表，竟与上周网红晒的"高仿A货"同款编号',
        '📚 学术打假：教授论文致谢中惊现"特别感谢ChatGPT的学术指导"',
        '🎮 游戏主播代打实锤：直播画面反射出背后站着三个代打小哥轮流操作'
    ],
    internetMemes: [
        '👗 多巴胺穿搭(2023夏)：明亮色彩组合席卷全网，网友戏称"行走的调色盘"',
        '📦 快递盲盒(2024初)：电商平台惊现无人认领包裹拍卖，开出过期三年面膜成笑谈',
        '「绝绝子」文学：万物皆可绝，离谱他妈给离谱开门——绝到家了',
        '「听我说谢谢你」体：阴阳怪气新境界，适用于各种翻车现场',
        '「PUA大师」：从情感操控到职场CPU，万能的背锅侠',
        '「雪糕刺客」经济学：表面平平无奇，结账当场给你一记价格暴击',
        '「电子榨菜」哲学：外卖可以凉，但下饭视频必须滚烫',
        '「服刑系穿搭」：全员恶人条纹衫，看守所时尚单品',
        '🐉 奶龙文学："奶龙出击"表情包爆红，成为00后卖萌专用语',
        '👶 一二布布："布布这么可爱"成为夸人新句式，衍生各种表情包',
        '🍵 电子奶茶：指那些让人上瘾但没营养的短视频内容',
        '📱 手机壳文学：通过频繁更换手机壳表达心情变化的新社交语言'
    ],
    goldenWords: [
        '职场新暗号：领导说"周末把电脑带回家"=做好加班准备但别报加班费',
        '当代五大错觉：TA喜欢我、股价会涨、快递明天到、减肥明天开始、这局能赢',
        '成年人的破防三件套：快递丢失、WiFi断连、忘记保存',
        '当代五大哲学问题：早上吃什么？中午吃什么？晚上吃什么？宵夜吃什么？谁去拿外卖？',
        '熬夜时流的泪，就是早睡时脑子进的水',
        '打工人的至暗时刻：周一早上、周日晚上、以及介于两者之间的每一天',
        '相亲就像开盲盒，你永远不知道会开出个奇葩还是更奇葩',
        '健身卡的正确用途：支付时觉得自己马上要瘦，实际是钱包先瘦'
    ]
};

let shownItems = [];
let currentCategory = 'all';

function generateContent() {
    const category = document.getElementById('category').value;

    if (category !== currentCategory) {
        shownItems = [];
        currentCategory = category;
    }
    let pool = [];

    if (category === 'all') {
        pool = [...data.melonEvents, ...data.internetMemes, ...data.goldenWords];
    } else {
        pool = data[{
            melon: 'melonEvents',
            meme: 'internetMemes',
            golden: 'goldenWords'
        }[category]];
    }

    const availableItems = pool.filter(item => !shownItems.includes(item));

    if (availableItems.length === 0) {
        alert('该分类内容已全部展示，正在重置！');
        shownItems = [];
        availableItems = [...pool];
    }

    const result = availableItems[Math.floor(Math.random() * availableItems.length)];
    shownItems.push(result);
    // 1. 将格式化函数移到文件顶部（其他函数之前）
    const formatDate = (date) => {
        const pad = n => n.toString().padStart(2, '0');
        return `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())}`;
    };

    // 2. 修改generateContent函数中的模板字符串部分
    const titleMap = {
        melon: '吃瓜播报',
        meme: '名梗播报',
        golden: '金句播报',
        all: '热梗播报'
    };

    document.getElementById('output').innerHTML = `
    <div style="line-height:1.8;font-size:16px;">
        📅 ${formatDate(new Date())} ${titleMap[category]}：
        <div style="margin:12px 0;padding:12px;background:#f8f9fa;border-radius:8px;">
            ${result}
            <div style="margin-top:10px;">
                <a href="#" onclick="askDeepSeek('${result.replace(/[:：(].*/, '')}'); return false;" 
                   style="color:#4CAF50;text-decoration:none;font-weight:500;">
                    🔍 向DeepSeek询问详情 →
                </a>
            </div>
        </div>
    </div>`;
}

function copyToClipboard() {
    const text = document.getElementById('output').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('已复制到剪贴板，快去群里显摆吧！');
    });
}

let isQuerying = false;
let loadingModal = null;

async function askDeepSeek(query) {
    if (isQuerying) return;

    try {
        isQuerying = true;
        // 创建加载模态框
        loadingModal = document.createElement('div');
        loadingModal.style.position = 'fixed';
        loadingModal.style.top = '0';
        loadingModal.style.left = '0';
        loadingModal.style.width = '100%';
        loadingModal.style.height = '100%';
        loadingModal.style.backgroundColor = 'rgba(0,0,0,0.5)';
        loadingModal.style.display = 'flex';
        loadingModal.style.justifyContent = 'center';
        loadingModal.style.alignItems = 'center';
        loadingModal.style.zIndex = '9999';

        const loadingText = document.createElement('div');
        loadingText.textContent = '正在向DeepSeek查询，请稍候...';
        loadingText.style.color = 'white';
        loadingText.style.fontSize = '20px';
        loadingText.style.padding = '20px';
        loadingText.style.backgroundColor = '#4CAF50';
        loadingText.style.borderRadius = '5px';

        loadingModal.appendChild(loadingText);
        document.body.appendChild(loadingModal);

        const response = await fetch(DEEPSEEK_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [{
                    role: "user",
                    content: `请详细解释这个网络热梗/事件: ${query}`
                }],
                temperature: 0.7
            })
        });

        const data = await response.json();

        // 创建美观的结果展示区域
        const resultContainer = document.createElement('div');
        resultContainer.style.position = 'fixed';
        resultContainer.style.top = '50%';
        resultContainer.style.left = '50%';
        resultContainer.style.transform = 'translate(-50%, -50%)';
        resultContainer.style.width = '80%';
        resultContainer.style.maxWidth = '600px';
        resultContainer.style.padding = '20px';
        resultContainer.style.backgroundColor = 'white';
        resultContainer.style.borderRadius = '8px';
        resultContainer.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        resultContainer.style.zIndex = '10000';

        const title = document.createElement('h3');
        title.textContent = 'DeepSeek回复';
        title.style.marginTop = '0';
        title.style.color = '#4CAF50';

        const content = document.createElement('div');
        content.textContent = data.choices[0].message.content;
        content.style.margin = '15px 0';
        content.style.lineHeight = '1.6';

        const closeBtn = document.createElement('button');
        closeBtn.textContent = '关闭';
        closeBtn.style.padding = '8px 16px';
        closeBtn.style.backgroundColor = '#4CAF50';
        closeBtn.style.color = 'white';
        closeBtn.style.border = 'none';
        closeBtn.style.borderRadius = '4px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.onclick = function () {
            document.body.removeChild(resultContainer);
        };

        resultContainer.appendChild(title);
        resultContainer.appendChild(content);
        resultContainer.appendChild(closeBtn);
        document.body.appendChild(resultContainer);

    } catch (error) {
        alert('查询DeepSeek失败: ' + error.message);
    } finally {
        if (loadingModal) {
            document.body.removeChild(loadingModal);
            loadingModal = null;
        }
        isQuerying = false;
    }
}