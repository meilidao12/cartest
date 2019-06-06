<template>
    <div id='home'>
        <div>
        <el-row class="tac">
        <el-col :span="3">
            <h3>自定义颜色</h3>
            <el-menu default-active="2" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" @select="selected"  background-color="#545c64"  text-color="#fff"  active-text-color="#ffd04b">
             
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index='1-2'>选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu> 

            </el-menu>
        </el-col>
        </el-row>
        </div>
        <div>
            dsa
        </div>
    </div>
</template>

<script>
export default {
    data(){

    },
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      selected(index){
          alert('被选中的选项为 '  + index)
      }
      
    }
}
</script>

<style scoped>
#home{
    margin: 0px;
    background-color: #545c64;
}

</style>
