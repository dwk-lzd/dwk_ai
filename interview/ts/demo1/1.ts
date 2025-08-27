// let a: any = 1  // 任何类型，ts新手，狂用any
// a = '1' // 不能滥用,学会用泛型
// function getFirsElement(arr: any[]): any {
//     return arr[0]
// }

// // // 复用性，函数参数，返回值 指定类型
// const nubmers = [1, 2, 3]
// const firstNum = getFirsElement(nubmers)
// firstNum.toFixed()

// const strs = ['a', 'b', 'c']
// const firstStr = getFirsElement(strs)

// 复用函数的同时，传个类型参数

function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}
const strings = ['hello', 'world', 'ts']
const firstStr = getFirstElement(strings)

// const nubmers = [1, 2, 3]
// const firstNum = getFirstElement<number>(nubmers)
// firstNum?.toFixed()

