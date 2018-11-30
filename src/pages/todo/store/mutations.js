import {ADD,TOGGLE,DEL,FILTER} from './mutation-types'

const mutations = {
[ADD](state,inp){
    state.list.push({
        id : (new Date()).getTime(),
        text: inp,
        done : false
    })
},
[TOGGLE](state,val){
    state.list = state.list.map((todo,index) => {
    if(val === todo.id){
        todo.done =  !todo.done
    }
    return todo
    })
},
[DEL](state,val){
    state.list.forEach((todo,index) => {
        if(todo.id === val){
            state.list.splice(index,1)
        }
    });
},
[FILTER](state,val){
    state.complate = val.title;
    console.log(state.complate)
    // switch(state.complate){
    //     case 'done':
    //     return state.list.filter(done => state.list.done)

    // }
}
}

export default mutations