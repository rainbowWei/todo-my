const state = {
  buttontypes:[
    {
      title:'done',
      ctitle: '完成'
    },
    {
      title:'undone',
      ctitle: '未完成'
    },
    {
      title:'all',
      ctitle: '全部完成'
    }

],
complate:'all',
  list: [
    {
      id: 1,
      text: '吃饭',
      done: false
    },
    {
      id: 2,
      text: '睡觉',
      done: true
    },
    {
      id: 3,
      text: '打豆豆',
      done: false
    }
  ]
}

export default state