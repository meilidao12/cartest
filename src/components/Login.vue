<template>
    <div>
        <div id="load">
            <el-input placeholder="username"  v-model="username" id="username"></el-input>
            <br>
            <br>
            <el-input placeholder='password'  v-model="password" id='ps'></el-input>
            <br>
            <br>
            <el-button @click="Load()" type="success">登录</el-button>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            username: '',
            password:''
        }
    },
    methods:{
        Load:function(){
            if(this.username == '1' && this.password == '1')
            {
                this.$router.push({name:'Main'})
            }
        }
    }        
}
</script>

<style scoped>
#load{
    width: 600px; 
    height: 400px;   
    position: absolute;  
    left: 0; top: 0; right: 0;bottom: 0;   
    margin: auto;    /* 有了这个就自动居中了 */  
}
</style>
