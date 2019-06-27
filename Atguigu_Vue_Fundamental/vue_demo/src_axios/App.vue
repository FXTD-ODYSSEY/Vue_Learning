<template>
    <div>
        <div v-if="!repoUrl">Loading</div>
        <div v-else>most star repo is <a :href="repoUrl">{{repoName}} </a></div>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {

        data(){
            return {
                repoUrl:'',
                repoName:'',
            } 
        },
        mounted(){
            const url = "https://api.github.com/search/repositories?q=v&sort=stars"
            axios.get(url).then(response => {
                const result = response.data
                const mostRpeo = result.items[0]
                this.repoUrl = mostRpeo.html_url
                this.repoName = mostRpeo.name
            }).catch(error => {
                alert('请求失败')
            })
        },
        
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