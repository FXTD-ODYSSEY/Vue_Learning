<template>
     <div class="todo-container">
    <div class="todo-wrap">
        <TodoHeader :addTodo="addTodo"/>
        <TodoList :todos="todos"  :deleteTodo="deleteTodo"/>
        <TodoFooter :todos="todos" :deleteCompletetodos="deleteCompletetodos" :selectAllTodos="selectAllTodos" />
    </div>
  </div>
</template>

<script>
    import TodoHeader from './components/TodoHeader.vue'
    import TodoList from './components/TodoList.vue'
    import TodoFooter from './components/TodoFooter.vue'
    export default {

        data(){
            return {
                todos:[
                    {title:'吃饭',complete:false},
                    {title:'睡觉',complete:true},
                    {title:'喝水',complete:false},
                ]
            }
        },

        methods:{
            addTodo(todo){
                this.todos.unshift(todo)
            },
            deleteTodo(index){
                this.todos.splice(index,1)
            },
            deleteCompletetodos(){
                this.todos = this.todos.filter(todo => !todo.complete)
            },
            selectAllTodos(check){
                this.todos.forEach(todo => todo.complete = check)
            },
        },

        components:{
            TodoHeader,
            TodoList,
            TodoFooter,
        }
        
    }
</script>

<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>