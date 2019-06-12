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
import axios from 'axios';
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        Load:function(){
            var api='http://127.0.0.1:3004/';
            var self = this;
            axios.get(api)
                .then(function (response) {
                    console.log(response);
                    self.msg = response.data;
                    if(self.username == self.msg  && self.password == self.msg )
                    {
                        self.$router.push({name:'Main'})
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
            
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
