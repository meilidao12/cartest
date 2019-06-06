<template>
    <div>
        <el-container>
            <el-header height="60px">
                nihao
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
                        <el-menu-item index="Detail">详情页</el-menu-item>
                        <el-menu-item index="Set">设置页</el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    data(){

    },
    methods:{
        
    }
}
</script>

<style scoped>
.el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    font-size: 40px;
}
</style>
