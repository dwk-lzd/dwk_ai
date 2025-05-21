// 声明了一个对象常量
// 内存中开辟了一个空间，里面存放了一个对象
// hxt 取址 & 变量名是地址的标记
// js是一个弱类型语言 变量的类型由值决定
// = 赋值 Object
// 对象字面量(字面意义上) JSON
// JS 太灵活，不需要new，通过{}拿到对象 [] 拿到数组


// js 灵活
const zzx = {
  name: '猪猪侠', // key value  String
  age: 21, // Number  数值类型
  hometown: '童话世界',
  isSingle: true, // Boolean  布尔类型
  // 送花
  // 形参
  sendFlower: function (brother) {
    console.log(zzx.name + '给' + brother.name + '送了99朵玫瑰')
    brother.receiveFlower(zzx)
  }
}


const ff = {
  xq: 30,
  name: '菲菲',
  receiveFlower: function (sender) {
    console.log(`收到了${sender.name}送的99朵玫瑰`);
    if (ff.xq > 90) {
      console.log('我们在一起吧');

    } else {
      console.log('gun ~~~~~');

    }
  }

}

//帮猪猪侠  猪猪侠的兄弟
const xdd = {
  xq: 30,
  name: '小呆呆',

  hometown: '童话世界', //老乡
  //送小美，送小红，都具有receiveFlower的方法
  //对象互换
  //接口 interface  名字相同，效果不同
  receiveFlower: function (sender) {

    setTimeout(() => {//定时器
      ff.xq = 99
      ff.receiveFlower(sender)
    }, 3000);


  }
}

zzx.sendFlower(xdd)
