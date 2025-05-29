# 大数相加

- 高精度
    js 只有Number 类型，不分整数、浮点数、高精度······
    js不太适合计算 python适合
    表现力强
- 大数字
    边界问题 
    Infinity 无穷大
    -Infinity 无穷小
    Number.MAX_VALUE 1.7976931348623157e+308 最大

- 字符串化

- es6 提供了BigInt 大数类型 解决大数问题

## BigInt
    安全 2^53-1 范围内 9007199254740991
    es6 新增的第六种简单数据类型
    后面加n 表示
    BigInt("123") ，不能new BigInt("123") 
    无限大，无溢出问题（位数溢出）
    不能混合Number 和 BigInt 运算
    JS 适合大型语言开发