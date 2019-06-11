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
            msg:'',
            list:[]
        }
    },
    methods:{
        AddData(){
            alert("数据添加");
        },
        getData(){
            var api='http://127.0.0.1:8001';
            // this.$http.get(api).then((response)=>{
            //     console.log(response.data);
            //     this.msg = response.data;
            // },function(err){
            //     console.log(err);
            // })
            axios.get(api)
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    },
    mounted(){
        this.getData();
    }
}
</script>
