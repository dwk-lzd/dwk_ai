# type 和 interface

- 相同点
    都可以用来声明类型，自定义类型

- 区别：
    当我们要编写继承类的时候，interface 只要extends就好
    type 使用的是 & 并集

    interface 支持多次声明， 合并
    type 不支持多次声明，合并

    - type 可以用于定义基础类型、联合类型、元组等
        interface 只能描述对象结构（函数，类）

    - type 支持简单类型的别名，
        interface 不可以

    - interface 和 type 在声明函数类型上有区别