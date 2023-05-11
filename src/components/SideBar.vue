<template>
    <div>
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
                <el-menu-item index="4" @click="dialogVisible = true">
                    <i class="el-icon-setting"></i>
                    <span>Settings</span>
                </el-menu-item>
                </el-menu>
        </el-col>
        </el-row>
        <el-dialog title="Settings" :visible.sync="dialogVisible" width="30%">
        <el-form label-position="top">
            <el-form-item label="Theme Color">
                <el-select v-model="selectedColor" placeholder="Select a color">
                    <el-option
                        v-for="(item, index) in themeColors"
                        :key="index"
                        :label="item"
                        :value="item">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Font Size">
                <el-slider v-model="fontSize" :min="12" :max="24"></el-slider>
            </el-form-item>
            <el-form-item label="Enable Dark Mode">
                <el-switch v-model="darkMode"></el-switch>
            </el-form-item>
        </el-form>
    </el-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
        dialogVisible: false,
        InTrend: [
        {'template':"SQL", 'url':'/sql'},
        {'template':"RelationalVsNonRelational", 'url':'/relational-vs-non-relational'},
        {'template':"History of relational databases", 'url':'/history-of-relational-databases'}
        ],
        ForYou: [
        {'template':"Related Solutions", 'url':'/related-solutions'},
        {'template':"Graph database", 'url':'/graph-database'},
        {'template':"What is a relational database?", 'url':'/what-is-a-relational-database'}
        ],
        Themes: [
        {'template':"The relational model", 'url':'/relational-model'},
        {'template':"ACID properties and RDBMS", 'url':'/acid-properties-and-rdbms'},
        {'template':"Examples of relational databases", 'url':'/examples-of-relational-databases'},
        ],
        dialogVisible: false,
        selectedColor: '',
        themeColors: ['Default', 'Blue', 'Green', 'Red'],
        fontSize: 16,
        darkMode: false
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
    .el-dialog__body{
        background-color: #485656;
        color: #84fac5 !important;
    }
  @media (max-width: 1285px){
      .less-than-tablet{
          visibility: hidden;
      }
  }
  .ISideBar{
      background-color: #212828;
  }
</style>
