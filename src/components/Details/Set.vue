<template>
    <div>
        <el-button @click="getData()">添加</el-button>
        <div>{{msg}}</div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    
    data(){
        return{
            msg:'132',
            list:[]
        }
    },
    methods:{
        AddData(){
            alert("数据添加");
        },
        getData(){
            var api='http://127.0.0.1:8001?aid=4&cid=5';
            var self = this;
            axios.get(api)
                .then(function (response) {
                    console.log(response);
                    self.msg = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    mounted(){
        this.getData();
    }
}
</script>
