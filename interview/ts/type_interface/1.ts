// js 弱类型，容易出问题
// ts带来类型的约束
// ts 是微软 想让Java工程师 写前端
// react + ts 是开发的标配
// 自定义类型
// interface 关键字
interface UserDemo {
    name: string;
    age: number;
}
// 相同点，都可以用来声明自定义类型
type userType = {
    name: string;
    age: number;
}

const u1: UserDemo = { name: 'Alice', age: 18 }
const u2: userType = { name: 'Bob', age: 20 }