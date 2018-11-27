<template>
    <div>
        <div class="header">
            <input type="text" placeholder="请输入你要添加的内容">
            <button>添加</button>
        </div>
        <ul class="list">
            <li v-for="(todo,index)  in list" :key="todo.id" class="todo-item"> 
                <span class="icon iconfont icon-kongxinduigou"></span>
                <span>吃饭</span>
                <span class="icon iconfont icon-guanbi"></span>
            </li>
           
        </ul>
        <div class="footer">
            <button>完成</button>
            <button>未完成</button>
            <button>全部</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>

