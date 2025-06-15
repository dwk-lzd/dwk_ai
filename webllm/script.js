// DeepSeek API配置
const DEEPSEEK_API_KEY = 'sk-07f97ba6ca4c4babbfc1366f50df704a';
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

// 网络热梗数据库
const data = {
    melonEvents: [
        '🍉 2024年震惊日娱的10大事件：广末凉子与出轨对象鸟羽周作情感升温，计划再婚',
        '💥 2024年娱乐圈吃瓜盘点：刘晓庆疑似出轨小38岁男友',
        '🔥 2024-2025年大瓜合辑：娱乐圈、社会热点事件层出不穷',
        '🎮 游戏主播代打实锤：直播画面反射出背后站着三个代打小哥轮流操作',
        '🤖 网文大神被实锤用AI续写：最新章节出现"感谢OpenAI提供创作支持"的水印文字',
        '💥 山东泰安陪酒事件(2023-08)：女职员被曝多次陪领导饮酒至深夜，监控显示醉卧政府大楼前',
        '🐼 熊猫花花爆红(2023-09)：成都基地熊猫因独特"饭团坐姿"成顶流，单日参观限流2万人',
        '🍉 顶流男星被曝与女制片酒店研讨剧本7小时，房间找到写满批注的《演员的自我修养》',
        '💥 离婚夫妻被扒共用教练：前妻塑形私教课竟是前夫买的双人套餐，健身房监控画面曝光',
        '🎭 双面影帝翻车：慈善晚会戴的百万名表，竟与上周网红晒的"高仿A货"同款编号',
        '📚 学术打假：教授论文致谢中惊现"特别感谢ChatGPT的学术指导"',
        '🚨 2025年3月山东莱州沙河镇王木木烧烤店老板娘不雅视频事件',
        '🌐 2024年网络安全圈最大吃瓜事件：某科技公司数据泄露',
        '🎬 2025年10部重口味韩剧引热议：金秀贤池昌旭路云有苦吃'
    ],
    internetMemes: [
        '人脸痞老板：哈利波特伏地魔的脸P到海绵宝宝中痞老板的身上，配上魔性声音走红',
        '自己吓自己：动画影片《美人鱼的夏天》中的经典对白，表达既荒谬又幽默的恐慌',
        '咖啡不断加加加加到厌倦：出自歌曲《再见莫妮卡》的电音翻唱，让人电麻',
        'i人（内向型人）和e人（外向型人）：MBTI人格测试风靡，成为社交标签',
        '偷感：不喜欢或不擅长社交的人群共鸣，出于害羞、内向的安全感需求',
        '班味：打工人特有的疲惫气场，社畜的隐形工装',
        '硬控：MOBA游戏术语，形容某人或某事让你无法逃脱或完全掌控',
        '水灵灵：形容物体或生物像水一样清澈、明亮，充满生气，引申为可爱、灵动',
        'city不city：美国博主保保熊的梗，指代城市是否符合大城市标准，带调侃意味',
        '我发现了石油：苹果手机输入此句会自动打开定位，引发网友热议',
        '我有四不吃：抖音博主九日旭根据郭德纲模式，对生活中的大小事束缚以"四不"原则',
        '浇给：抖音博主"敦煌老马"的口头禅，方言含义因地区而异',
        '已老实求放过：调侃面对诱惑或刺激时无奈和顺从的态度，自嘲式表达',
        '南方小土豆：特指被东北雪景吸引去东北旅游的南方游客，怕冷把自己裹成"小土豆"',
        '晚安大小姐：源自韩国组合ASMRZ的同名歌曲',
        '三折叠，怎么折都有面：华为手机广告语，成为互联网热门素材',
        'passion：代表一种积极向上，对生活充满热情的心态'
    ],
    goldenWords: [
        '2025新年贺词纯金句版：梦虽遥，追则能达；愿虽艰，持则可圆。',
        '2024年会发言对偶金句及2025年新年祝福语：干货满满！',
        '罗振宇2024“时间的朋友”跨年演讲金句合集：乐观者不是相信永远阳光明媚，而是在听到预报后立即去找伞。',
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

// 全局变量
let shownItems = [];
let currentCategory = 'all';
let isQuerying = false;
let currentController = null;
let queryHistory = [];

// 格式化日期函数
const formatDate = (date) => {
    const pad = n => n.toString().padStart(2, '0');
    return `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())}`;
};

// 生成内容函数
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
        showToast('该分类内容已全部展示，正在重置！', 'info');
        shownItems = [];
        availableItems.push(...pool);
    }

    const result = availableItems[Math.floor(Math.random() * availableItems.length)];
    shownItems.push(result);

    const titleMap = {
        melon: '吃瓜播报',
        meme: '名梗播报',
        golden: '金句播报',
        all: '热梗播报'
    };

    const outputElement = document.getElementById('output');
    outputElement.innerHTML = `
        <div class="content-item">
            <div class="content-item-header">
                <div class="content-item-title">📅 ${formatDate(new Date())} ${titleMap[category]}</div>
                <div class="content-item-date">${new Date().toLocaleTimeString()}</div>
            </div>
            <div class="content-item-body">
                ${result}
            </div>
            <a href="#" onclick="askDeepSeek('${result.replace(/[:：(].*/, '').replace(/'/g, "\\'")}'); return false;" 
               class="ask-ai-link">
                <i class="fas fa-robot"></i> 向DeepSeek AI询问详情
            </a>
        </div>
    `;

    // 添加动画效果
    outputElement.style.opacity = '0';
    outputElement.style.transform = 'translateY(20px)';
    setTimeout(() => {
        outputElement.style.transition = 'all 0.5s ease';
        outputElement.style.opacity = '1';
        outputElement.style.transform = 'translateY(0)';
    }, 100);
}

// 复制到剪贴板
function copyToClipboard() {
    const outputElement = document.getElementById('output');
    const text = outputElement.textContent || outputElement.innerText;

    if (!text.trim()) {
        showToast('没有内容可复制！', 'warning');
        return;
    }

    navigator.clipboard.writeText(text).then(() => {
        showToast('已复制到剪贴板！', 'success');
    }).catch(() => {
        showToast('复制失败，请手动复制', 'error');
    });
}

// 分享内容
function shareContent() {
    const outputElement = document.getElementById('output');
    const text = outputElement.textContent || outputElement.innerText;

    if (!text.trim()) {
        showToast('没有内容可分享！', 'warning');
        return;
    }

    if (navigator.share) {
        navigator.share({
            title: '网络热梗分享',
            text: text,
            url: window.location.href
        }).catch(() => {
            fallbackShare(text);
        });
    } else {
        fallbackShare(text);
    }
}

// 备用分享方法
function fallbackShare(text) {
    const shareText = `${text}\n\n来自：智能网络热梗生成器`;
    navigator.clipboard.writeText(shareText).then(() => {
        showToast('分享内容已复制到剪贴板！', 'success');
    });
}

// 询问DeepSeek AI
async function askDeepSeek(query) {
    if (isQuerying) {
        showToast('正在查询中，请稍候...', 'info');
        return;
    }

    try {
        isQuerying = true;

        // 显示模态框
        const modal = document.getElementById('aiChatModal');
        const queryTextElement = document.getElementById('queryText');
        const aiResponseElement = document.getElementById('aiResponse');

        queryTextElement.innerHTML = `<i class="fas fa-question-circle"></i> 查询：${query}`;
        aiResponseElement.innerHTML = `
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
            <div style="margin-top: 10px; color: #888; font-size: 14px;">
                <i class="fas fa-robot"></i> DeepSeek AI 正在思考中...
            </div>
        `;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // 创建AbortController用于取消请求
        currentController = new AbortController();

        // 发送流式请求
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
                    content: `请详细解释这个网络热梗/事件，包括背景、影响和相关讨论: ${query}`
                }],
                temperature: 0.7,
                stream: true
            }),
            signal: currentController.signal
        });

        if (!response.ok) {
            throw new Error(`API请求失败: ${response.status}`);
        }

        // 处理流式响应
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullResponse = '';

        // 清空响应区域，准备显示实时内容
        aiResponseElement.innerHTML = '<div class="typewriter"></div>';
        const typewriterElement = aiResponseElement.querySelector('.typewriter');

        while (true) {
            const { done, value } = await reader.read();

            if (done) break;

            const chunk = decoder.decode(value);
            const lines = chunk.split('\n');

            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    const data = line.slice(6);

                    if (data === '[DONE]') {
                        break;
                    }

                    try {
                        const parsed = JSON.parse(data);
                        const content = parsed.choices?.[0]?.delta?.content;

                        if (content) {
                            fullResponse += content;

                            // 实时更新显示内容
                            typewriterElement.textContent = fullResponse;

                            // 滚动到底部
                            aiResponseElement.scrollTop = aiResponseElement.scrollHeight;
                        }
                    } catch (e) {
                        // 忽略解析错误
                    }
                }
            }
        }

        // 移除打字机效果
        typewriterElement.classList.remove('typewriter');

        // 保存到历史记录
        addToHistory(query, fullResponse);

        showToast('AI解读完成！', 'success');

    } catch (error) {
        if (error.name === 'AbortError') {
            aiResponseElement.innerHTML = `
                <div style="color: #ff6b6b; text-align: center; padding: 20px;">
                    <i class="fas fa-stop-circle"></i> 查询已停止
                </div>
            `;
        } else {
            console.error('DeepSeek API错误:', error);
            aiResponseElement.innerHTML = `
                <div style="color: #ff6b6b; text-align: center; padding: 20px;">
                    <i class="fas fa-exclamation-triangle"></i> 
                    查询失败：${error.message}
                    <br><br>
                    <small>请检查网络连接或稍后重试</small>
                </div>
            `;
        }
    } finally {
        isQuerying = false;
        currentController = null;
    }
}

// 停止查询
function stopQuery() {
    if (currentController) {
        currentController.abort();
        showToast('查询已停止', 'info');
    }
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('aiChatModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';

    // 如果正在查询，停止查询
    if (isQuerying) {
        stopQuery();
    }
}

// 复制AI回复
function copyAIResponse() {
    const aiResponseElement = document.getElementById('aiResponse');
    const text = aiResponseElement.textContent || aiResponseElement.innerText;

    if (!text.trim() || text.includes('正在思考')) {
        showToast('没有可复制的回复内容！', 'warning');
        return;
    }

    navigator.clipboard.writeText(text).then(() => {
        showToast('AI回复已复制到剪贴板！', 'success');
    }).catch(() => {
        showToast('复制失败，请手动复制', 'error');
    });
}

// 分享AI回复
function shareAIResponse() {
    const queryTextElement = document.getElementById('queryText');
    const aiResponseElement = document.getElementById('aiResponse');

    const query = queryTextElement.textContent || queryTextElement.innerText;
    const response = aiResponseElement.textContent || aiResponseElement.innerText;

    if (!response.trim() || response.includes('正在思考')) {
        showToast('没有可分享的回复内容！', 'warning');
        return;
    }

    const shareText = `${query}\n\n${response}\n\n来自：DeepSeek AI解读`;

    if (navigator.share) {
        navigator.share({
            title: 'DeepSeek AI解读分享',
            text: shareText,
            url: window.location.href
        }).catch(() => {
            navigator.clipboard.writeText(shareText).then(() => {
                showToast('分享内容已复制到剪贴板！', 'success');
            });
        });
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            showToast('分享内容已复制到剪贴板！', 'success');
        });
    }
}

// 添加到历史记录
function addToHistory(query, response) {
    const historyItem = {
        id: Date.now(),
        query: query,
        response: response,
        timestamp: new Date()
    };

    queryHistory.unshift(historyItem);

    // 限制历史记录数量
    if (queryHistory.length > 10) {
        queryHistory = queryHistory.slice(0, 10);
    }

    updateHistoryDisplay();
}

// 更新历史记录显示
function updateHistoryDisplay() {
    const historyListElement = document.getElementById('historyList');

    if (queryHistory.length === 0) {
        historyListElement.innerHTML = `
            <div class="history-placeholder">
                <i class="fas fa-clock"></i>
                <p>暂无查询历史</p>
            </div>
        `;
        return;
    }

    historyListElement.innerHTML = queryHistory.map(item => `
        <div class="history-item" onclick="showHistoryItem(${item.id})">
            <div class="history-item-title">
                <i class="fas fa-comment-dots"></i> ${item.query}
            </div>
            <div class="history-item-time">
                ${item.timestamp.toLocaleString()}
            </div>
        </div>
    `).join('');
}

// 显示历史记录项
function showHistoryItem(id) {
    const item = queryHistory.find(h => h.id === id);
    if (!item) return;

    const modal = document.getElementById('aiChatModal');
    const queryTextElement = document.getElementById('queryText');
    const aiResponseElement = document.getElementById('aiResponse');

    queryTextElement.innerHTML = `<i class="fas fa-history"></i> 历史查询：${item.query}`;
    aiResponseElement.innerHTML = item.response;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 显示提示消息
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'success-toast';

    const colors = {
        success: '#4CAF50',
        error: '#f44336',
        warning: '#ff9800',
        info: '#2196F3'
    };

    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };

    toast.style.background = colors[type];
    toast.innerHTML = `<i class="${icons[type]}"></i> ${message}`;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100px)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function () {
    // 点击模态框外部关闭
    const modal = document.getElementById('aiChatModal');
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // 初始化历史记录显示
    updateHistoryDisplay();

    console.log('智能网络热梗生成器已加载完成！');
});


// 高级视觉效果函数

// 创建粒子背景
function createParticleBackground() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-bg';
    document.body.appendChild(particleContainer);

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particleContainer.appendChild(particle);

        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 6000);
    }

    // 创建初始粒子
    for (let i = 0; i < 20; i++) {
        setTimeout(createParticle, i * 200);
    }

    // 持续创建粒子
    setInterval(createParticle, 300);
}

// 增强模态框动画
function showModalWithAnimation(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');

    modal.style.display = 'block';
    modal.classList.add('show');
    modalContent.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function hideModalWithAnimation(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');

    modal.classList.add('hide');
    modalContent.classList.remove('show');

    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('show', 'hide');
        document.body.style.overflow = 'auto';
    }, 300);
}

// 添加波纹效果
function addRippleEffect(element) {
    element.classList.add('ripple');

    element.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// 平滑滚动到元素
function smoothScrollTo(element, duration = 1000) {
    const targetPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// 添加打字机效果
function typeWriter(element, text, speed = 50) {
    element.innerHTML = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// 添加数字动画效果
function animateNumber(element, start, end, duration = 1000) {
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// 添加视差滚动效果
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');

        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// 添加元素进入视口动画
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// 增强的加载状态管理
class LoadingManager {
    constructor() {
        this.loadingStates = new Map();
    }

    show(key, message = '加载中...') {
        const loadingElement = document.createElement('div');
        loadingElement.className = 'loading-overlay';
        loadingElement.innerHTML = `
            <div class="loading-spinner">
                <div class="spinner"></div>
                <div class="loading-text">${message}</div>
            </div>
        `;

        document.body.appendChild(loadingElement);
        this.loadingStates.set(key, loadingElement);

        // 添加CSS样式
        if (!document.querySelector('#loading-styles')) {
            const style = document.createElement('style');
            style.id = 'loading-styles';
            style.textContent = `
                .loading-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                    backdrop-filter: blur(5px);
                }
                
                .loading-spinner {
                    text-align: center;
                    color: white;
                }
                
                .spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid rgba(255,255,255,0.3);
                    border-top: 4px solid white;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 20px;
                }
                
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                .loading-text {
                    font-size: 16px;
                    font-weight: 500;
                }
            `;
            document.head.appendChild(style);
        }
    }

    hide(key) {
        const loadingElement = this.loadingStates.get(key);
        if (loadingElement && loadingElement.parentNode) {
            loadingElement.style.opacity = '0';
            setTimeout(() => {
                if (loadingElement.parentNode) {
                    loadingElement.parentNode.removeChild(loadingElement);
                }
            }, 300);
            this.loadingStates.delete(key);
        }
    }
}

const loadingManager = new LoadingManager();

// 重写askDeepSeek函数以使用新的动画效果
const originalAskDeepSeek = askDeepSeek;
askDeepSeek = async function (query) {
    if (isQuerying) {
        showToast('正在查询中，请稍候...', 'info');
        return;
    }

    try {
        isQuerying = true;

        // 使用增强的模态框动画
        const modal = document.getElementById('aiChatModal');
        const queryTextElement = document.getElementById('queryText');
        const aiResponseElement = document.getElementById('aiResponse');

        queryTextElement.innerHTML = `<i class="fas fa-question-circle"></i> 查询：${query}`;
        aiResponseElement.innerHTML = `
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
            <div style="margin-top: 10px; color: #888; font-size: 14px;">
                <i class="fas fa-robot"></i> DeepSeek AI 正在思考中...
            </div>
        `;

        showModalWithAnimation('aiChatModal');

        // 创建AbortController用于取消请求
        currentController = new AbortController();

        // 发送流式请求
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
                    content: `请详细解释这个网络热梗/事件，包括背景、影响和相关讨论: ${query}`
                }],
                temperature: 0.7,
                stream: true
            }),
            signal: currentController.signal
        });

        if (!response.ok) {
            throw new Error(`API请求失败: ${response.status}`);
        }

        // 处理流式响应
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullResponse = '';

        // 清空响应区域，准备显示实时内容
        aiResponseElement.innerHTML = '<div class="typewriter"></div>';
        const typewriterElement = aiResponseElement.querySelector('.typewriter');

        while (true) {
            const { done, value } = await reader.read();

            if (done) break;

            const chunk = decoder.decode(value);
            const lines = chunk.split('\n');

            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    const data = line.slice(6);

                    if (data === '[DONE]') {
                        break;
                    }

                    try {
                        const parsed = JSON.parse(data);
                        const content = parsed.choices?.[0]?.delta?.content;

                        if (content) {
                            fullResponse += content;

                            // 实时更新显示内容
                            typewriterElement.textContent = fullResponse;

                            // 滚动到底部
                            aiResponseElement.scrollTop = aiResponseElement.scrollHeight;
                        }
                    } catch (e) {
                        // 忽略解析错误
                    }
                }
            }
        }

        // 移除打字机效果并添加完成动画
        typewriterElement.classList.remove('typewriter');
        typewriterElement.classList.add('bounce-in');

        // 保存到历史记录
        addToHistory(query, fullResponse);

        showToast('AI解读完成！', 'success');

    } catch (error) {
        if (error.name === 'AbortError') {
            aiResponseElement.innerHTML = `
                <div style="color: #ff6b6b; text-align: center; padding: 20px;" class="slide-up">
                    <i class="fas fa-stop-circle"></i> 查询已停止
                </div>
            `;
        } else {
            console.error('DeepSeek API错误:', error);
            aiResponseElement.innerHTML = `
                <div style="color: #ff6b6b; text-align: center; padding: 20px;" class="slide-up">
                    <i class="fas fa-exclamation-triangle"></i> 
                    查询失败：${error.message}
                    <br><br>
                    <small>请检查网络连接或稍后重试</small>
                </div>
            `;
        }
    } finally {
        isQuerying = false;
        currentController = null;
    }
};

// 重写closeModal函数
const originalCloseModal = closeModal;
closeModal = function () {
    hideModalWithAnimation('aiChatModal');

    // 如果正在查询，停止查询
    if (isQuerying) {
        stopQuery();
    }
};

// 页面加载完成后的增强初始化
document.addEventListener('DOMContentLoaded', function () {
    // 原有的初始化代码...
    const modal = document.getElementById('aiChatModal');
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    updateHistoryDisplay();

    // 新增的高级效果初始化
    createParticleBackground();
    addScrollAnimations();
    addParallaxEffect();

    // 为按钮添加波纹效果
    document.querySelectorAll('.generate-btn, .action-btn').forEach(btn => {
        addRippleEffect(btn);
    });

    // 添加页面加载动画
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    console.log('智能网络热梗生成器已加载完成！所有高级效果已启用。');
});

