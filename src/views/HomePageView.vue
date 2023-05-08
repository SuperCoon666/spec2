<template>
  <div>
      <div class="but-header">
          <el-button class="place-but but-rec">Recommendations</el-button>
            <el-select v-model="FilterValue" placeholder="Filter" class="place-but but-filter">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
            </el-select>
      </div>
      <div class="content-holder">
          <article v-for="post in posts" class="Headline">
              <router-link
                      style="text-decoration: none; color: #42b983 !important;"
                      :to="{ path: post.url}">{{post.template}}</router-link>
          </article>
      </div>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "HomeView",
    components: {
    // HelloWorld,
    },
    data(){
        return{
            posts: [
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
                {'template':"What is a relational database?", 'url':'/content'},
            ],
            ind: 0,
            options: [{
              value: 'Option1',
              label: 'Option1'
            }, {
              value: 'Option2',
              label: 'Option2'
            }, {
              value: 'Option3',
              label: 'Option3'
            }, {
              value: 'Option4',
              label: 'Option4'
            }, {
              value: 'Option5',
              label: 'Option5'
            }],
            FilterValue: ''
            }
    },
    methods:{
        IncreaseInd(){
            this.ind += 1
            return this.ind
        },
    }
};
</script>

<style lang="scss">
    .content-holder {
        position: relative;
        top: 50px;
    }
    .Headline {
        position: relative;
        max-width: 600px;
        width: 80%;
        margin: 20px auto;
        font-size: 48px;
        font-weight: 600;
        line-height: 52px;
        letter-spacing: -0.015em;
        word-break: break-word;
        color: #42b983;

        padding-top: 32px;
        padding-right: 36px;
        padding-bottom: 32px;
        padding-left: 36px;
        border-radius: 18px;
        outline: 1px solid #252525;
        background-color: #204969;
    }

    .but-header {
        position: relative;
        top: 40px;
        display: flex;
        justify-content: center;
    }
    .place-but {
        width: 180px;
        margin: 0 5px;

        color: #42b983 !important;
        background-color: #212828 !important;
        border-color: #212828 !important;

        .el-input__inner {
            background-color: #212828 !important;
            border-color: #212828 !important;
        }
    }
    .el-select-dropdown__item {
        color: #42b983 !important;
        background-color: #212828 !important;
        border-color: #212828 !important;
        font-size: medium;
    }
    .el-select-dropdown {
        background-color: #212828 !important;
        border-color: #212828 !important;
    }
    @media (max-width: 1080px) {
        .Headline {
            font-size: 38px;
        }
    }
    @media (max-width: 700px) {
        .Headline {
            font-size: 30px;
        }
    }
    @media (max-width: 600px) {
        .Headline {
            font-size: 25px;
        }
    }
    @media (max-width: 460px) {
        .Headline {
            font-size: 20px;
        }
        .but-header {
            flex-wrap: wrap;
        }
        .but-rec {
            display: none;
        }
    }
    @media (max-width: 300px) {
        .Headline {
            font-size: 16px;
        }
    }
    @media (min-width: 2300px) {
        .Headline {
            width: 50%;
            font-size: 55px;
        }
    }
    @media (min-width: 3000px) {
        .Headline {
            width: 40%;
            font-size: 60px;
        }
    }
</style>

