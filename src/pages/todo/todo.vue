<template>

    <div>
        <div class="header">
            <input type="text" placeholder="请输入你要添加的内容" v-model="inp">
            <button @click="handleAdd">添加</button>
        </div>
        <p>v{{inp}}v</p>
        <ul class="list">
            <li 
             v-for="todo in show()"
            :key="todo.id" 
            class="todo-item" 
            :class="{'done':todo.done}"
            >
                <span class="icon iconfont checked"
                 :class="todo.done ? 'icon-kongxinduigou' : 'icon-xingzhuang-tuoyuanxing'"
                 @click="toggle(todo.id)"
                 ></span>
                <span class="tex" @click="toggle(todo.id)" >{{todo.text}}</span>
                <span class="icon iconfont icon-guanbi del" @click="del(todo.id)"></span>
            </li>
        </ul>
        <div class="footer">
            <button  v-for="button in buttons"
             :key="button.title" 
             :class="complate === button.title ? 'active' : ''"
              @click="filter(button)"
             >
             {{button.ctitle}}
             </button>
           
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex' 
export default {
    name: 'todo',
    data () {
        return {
           list:[],
           inp:''

        }
    },
    computed: {
        ...mapState({
            todos: state => state.todo.list,
            buttons: state => state.todo.buttontypes,
            complate: state => state.todo.complate
        })
    },
    mounted () {
    this.list = this.todos
    },
    methods: {
       ...mapMutations([
           'ADD1',
           'TOGGLE1',
           'DEL1',
           'FILTER1'  
      ]),
      ...mapActions([
          'Del'
      ]),
        handleAdd () {
        if (this.inp !== '') {
            this.ADD1(this.inp)
            this.inp = ''
            }
        },
        toggle(id){
            this.TOGGLE1(id)
        },
        del(id){
            // this.DEL1(id)
            // this.$store.commit('DEL1',id)
            this.Del(id)
        },
        filter(buttontype){
            this.$store.commit('FILTER1',buttontype)
            console.log(this.list)
        },
        show () {
            switch(this.complate){
                case 'done':
                    return  this.list.filter(todo => todo.done)
                case 'undone':
                    return this.list.filter(todo => !todo.done)
                case 'all':
                    return this.list
                }
        }
    }
    
   
}
</script>
<style>
.list .done .checked{
    color: blueviolet;
}
.list .done .tex{
    text-decoration: line-through;
    opacity: 0.5;
}
.list .del{
    display: none;
}
.list .todo-item:hover .del{
    display: inline-block;
}
.footer .active{
    color: #fff;
    background: blue;
}
</style>

