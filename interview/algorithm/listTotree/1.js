// 列表项在数据库中怎么存储的？比如 省、市、区等层级关系的数据
// 树状菜单 场景题
// id       title    parent
// 86       中国      null
// 360      江西      86   
// 0793     抚州      360
// 11201    临川     0793
// 2312345  体育路   11201




const sourceList = [
    {
        id: 1,
        name: '首页',
        parentId: 0,
    },
    {
        id: 2,
        name: '产品',
        parentId: 0,
    },
    {
        id: 3,
        name: '手机',
        parentId: 2,
    },
    {
        id: 4,
        name: '电脑',
        parentId: 2,
    },
    {
        id: 5,
        name: '折叠屏',
        parentId: 3,
    }
]

// 转换成

{
    id: 1;
    name: '首页';
    parentId: 0;
    children: [
        {
            id: 2,
            name: '产品',
            parentId: 0,
            children: [
                {
                    id: 3,
                    name: '手机',
                    parentId: 2,
                    children: [
                        {
                            id: 5,
                            name: '折叠屏',
                            parentId: 3,
                        }
                    ]
                },
                {
                    id: 4,
                    name: '电脑',
                    parentId: 2,
                }
            ]
        }
    ]
}


function listToTree() {

}

const tree = listToTree(sourceList)