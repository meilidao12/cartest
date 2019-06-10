<template>
    <div>
        <el-button @click="getData()">添加</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    methods:{
        AddData(){
            alert("数据添加");
        },
        getData(){
            //请求数据
            var api='http://api.map.baidu.com/telematics/v3/weather?location=%E5%98%89%E5%85%B4&output=json&ak=5slgyqGDENN7Sy7pw29IUvrZ"';
            this.$http.get(api).then((response)=>{
                console.log(response);
                //注意this指向
            },function(err){
                console.log(err);
            })
        }
    },
    mounted(){
        this.getData();
    }
}
</script>
