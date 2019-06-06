<template>
    <div>
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
export default {
    data(){
        return{
        tableData: [
          ]
        }
    },
    methods:{
        AddDatas:function(){
            alert("tianjia");
            this.tableData.push({date:'dd',name:'we'});
        }
    }
}
</script>