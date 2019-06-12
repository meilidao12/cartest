<template>
    <div>
        <div>
            <input type="text" v-model="body.name">
            <input type="text" v-model="body.age">
        </div>
        <el-button style="primary" @click="AddDatas()">添加数据</el-button>
        <br>
        <br>
        <el-table :data="tableData" style="width:100%">
            <el-table-column label="Date" prop="date" width="180"></el-table-column>
            <el-table-column label="Name" prop="name" width="180"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
        body:{
            name:'',
            age:'',
        },
        tableData: [
          ]
        }
    },
    methods:{
        AddDatas:function(){
            // alert("tianjia");
            // this.tableData.push({date:'dd',name:'we'});
            console.log('name: ' + this.name);
            console.log('age: ' + this.age);
            var obj = this.body
            console.log(obj);
            var api='http://127.0.0.1:3004/admin/user';
            var self = this;
            axios.post(api,obj)
                .then(function(res) {
                console.log(res.data);
                self.tableData = res.data;
            })
                .catch(function(error) {
                console.log(error);
            });
        }
    }
}
</script>