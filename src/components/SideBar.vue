<template>
    <el-row class="SideBar less-than-tablet">
        <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#212828"
              text-color="#42b983"
              active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-cpu"></i>
                  <span>Recommendations</span>
                </template>
                <el-menu-item-group title="In trend: ">
                    <el-menu-item index="1-1">
                        <router-link
                            style="text-decoration: none; color: #42b983 !important;"
                            :to="{ path: InTrend[0].url}">
                            {{InTrend[0].template}}
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <router-link
                            style="text-decoration: none; color: #42b983 !important;"
                            :to="{ path: InTrend[1].url}">
                            {{InTrend[1].template}}
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="1-3">
                        <router-link
                            style="text-decoration: none; color: #42b983 !important;"
                            :to="{ path: InTrend[2].url}">
                            {{InTrend[2].template}}
                        </router-link>
                    </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="For you: ">
                    <el-menu-item index="1-3">
                        <router-link
                            style="text-decoration: none; color: #42b983 !important;"
                            :to="{ path: ForYou[0].url}">
                            {{ForYou[0].template}}
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="1-3">
                        <router-link
                            style="text-decoration: none; color: #42b983 !important;"
                            :to="{ path: ForYou[1].url}">
                            {{ForYou[1].template}}
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="1-3">
                        <router-link
                            style="text-decoration: none; color: #42b983 !important;"
                            :to="{ path: ForYou[2].url}">
                            {{ForYou[2].template}}
                        </router-link>
                    </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span>Subscriptions</span>
              </el-menu-item>
              <el-submenu  index="3">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>Themes</span>
                </template>
                <el-menu-item-group title="Popular Topics: ">
                    <el-menu-item index="1-1">
                        <router-link
                            style="text-decoration: none; color: #42b983 !important;"
                            :to="{ path: Themes[0].url}">
                            {{Themes[0].template}}
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <router-link
                            style="text-decoration: none; color: #42b983 !important;"
                            :to="{ path: Themes[1].url}">
                            {{Themes[1].template}}
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="1-3">
                        <router-link
                            style="text-decoration: none; color: #42b983 !important;"
                            :to="{ path: Themes[2].url}">
                            {{Themes[2].template}}
                        </router-link>
                    </el-menu-item>
                </el-menu-item-group>
              </el-submenu >
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span>Settings</span>
              </el-menu-item>
            </el-menu>
      </el-col>
    </el-row>
</template>

<script>
  export default {
    data(){
        return{
            InTrend: [
                {'template':"SQL", 'url':'/content'},
                {'template':"RelationalVsNonRelational", 'url':'/content'},
                {'template':"History of relational databases", 'url':'/content'}
            ],
            ForYou: [
                {'template':"Related Solutions", 'url':'/content'},
                {'template':"Graph database", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'}
            ],
            Themes: [
                {'template':"The relational model", 'url':'/content'},
                {'template':"ACID properties and RDBMS", 'url':'/content'},
                {'template':"Examples of relational databases", 'url':'/content'},
            ]
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss">
  .el-menu {
      border-right: none !important;
  }
  .SideBar{
      width: 600px;
      height: 100%;
      position: fixed !important;
      top: 79px;
      opacity: .85;
      .el-submenu__title{
          font-size: 17px;
      }
      .el-menu-item{
          font-size: 17px;
      }
      .el-menu-item-group__title{
          font-size: 17px;
          color: #84fac5;
          font-weight: bold;
      }
  }
  @media (max-width: 800px){
      .less-than-tablet{
          visibility: hidden;
      }
  }
  .ISideBar{
      background-color: #212828;
  }

</style>
