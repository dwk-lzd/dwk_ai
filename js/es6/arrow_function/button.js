// 业务流水账代码
// 封装
function Button(id) {
    this.element = document.querySelector(`#${id}`)
    console.log(this.element);
    this.bindEvent()
}
Button.prototype.bindEvent = function () {
    // this 丢失 在外面this 指向 Button
    this.element.addEventListener('click', this.setBgColor.bind(this))
}

Button.prototype.setBgColor = function () {
    this.element.style.backgroundColor = '#1abc9c'
}
// Button.prototype.bindEvent = function () {
//     // this 丢失 在外面this 指向 Button
//     this.element.addEventListener('click', function () {
//         // this.element.style.backgroundColor = 'red' 错误写法，这里this本来就指向点击的元素，不用element去访问，或者用箭头函数
//         // this.style.backgroundColor = 'red'
//         // 可以用bind 解决 this 指向问题

//         this.element.style.backgroundColor = 'red'
//     }.bind(this))
// }