interface Animal {
    name: string;
}
interface Animal {
    age: number;
}
const dragon: Animal = {
    name: '旺财',
    age: 1
}


//不可以重复声明，不支持通过重复声明合并类型

type AnimalType = {
    name: string
}
// type AnimalType = {
//     age: number
// }