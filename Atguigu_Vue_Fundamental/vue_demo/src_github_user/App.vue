<template>
    <div class="container">
        <search/>
        <user-main/>
        
    </div>
</template>

<script>
    import axios from 'axios'
    import Search from './component/Search.vue'
    import Main from './component/Main.vue';
    export default {

        data(){
            return {
                repoUrl:'',
                repoName:'',
            } 
        },
        components:{
            UserMain:Main,
            Search,
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