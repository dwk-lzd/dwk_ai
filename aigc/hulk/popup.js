// 监听 DOMContentLoaded 事件，确保页面完全加载后再执行代码
document.addEventListener('DOMContentLoaded', function () {
  // 获取 ID 为 changeColorButton 的按钮元素
  const changeColorButton = document.getElementById('changeColorButton');
  
  // 为按钮添加点击事件监听器
  changeColorButton.addEventListener('click', function () {
    // 查询当前活动的标签页
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // 在当前标签页中执行脚本
      chrome.scripting.executeScript({
        // 指定目标标签页的 ID
        target: { tabId: tabs[0].id },
        // 定义要执行的函数
        function: function () {
          // 将页面背景颜色设置为粉色
          document.body.style.backgroundColor = 'pink';
        }
      });
    });
  });
});
