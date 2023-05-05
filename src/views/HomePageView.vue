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
    .content-holder{
        position: relative;
        top: 50px;
    }
    .Headline{
        position: relative;
        width: 600px;
        height: 100px;
        margin-top: 20px;
        left: 400px;

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

    .but-header{
        position: relative;
        top: 40px;
        /*left: 0px;*/
    }
    .rec-but{
        position: relative;
        left: -130px;
        width: 180px;

        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        /*text-decoration: none;*/
        margin-left: 10px;

        color: #42b983 !important;
        background-color: #212828 !important;
        border-color: #212828 !important;
        font-size: large;
    }
    .filter-but{
        position: relative;
        left: -130px;
        width: 180px;

        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        /*text-decoration: none;*/
        margin-left: 10px;

        .el-input__inner {
            background-color: #212828 !important;
            border-color: #212828 !important;
        }
    }
    .place-but{
        position: relative;
        /*left: -130px;*/
        width: 180px;
        margin-left: 10px;


        color: #42b983 !important;
        background-color: #212828 !important;
        border-color: #212828 !important;

        .el-input__inner {
            background-color: #212828 !important;
            border-color: #212828 !important;
        }
    }
    .el-select-dropdown__item{
        color: #42b983 !important;
        background-color: #212828 !important;
        border-color: #212828 !important;
        font-size: medium;
    }
    .el-select-dropdown{
        background-color: #212828 !important;
        border-color: #212828 !important;
    }
  @media (max-width: 1250px){
      .Headline{
          left: 320px;
      }
  }
  @media (max-width: 1080px){
      .Headline{
          width: 400px;
          font-size: 38px;
      }
      .but-header{
          left: 100px;
      }
  }
  @media (max-width: 700px){
      .Headline{
          left: 120px;
      }
  }
  @media (max-width: 600px){
      .Headline{
          left: 80px;
          width: 300px;
          font-size: 30px;
      }
  }
  @media (max-width: 460px){
      .Headline{
          left: 25px;
          width: 200px;
          font-size: 20px;
      }
      .but-rec{
          visibility: hidden;
      }
      .but-filter{
          left: -100px;
      }
  }
  @media (max-width: 300px){
      .Headline{
          left: 10px;
          width: 170px;
          font-size: 16px;
      }
  }
  @media (min-width: 2300px){
      .Headline{
          left: 950px;
          width: 950px;
          font-size: 55px;
      }
  }
  @media (min-width: 3000px){
      .Headline{
          left: 1450px;
          width: 1250px;
          font-size: 60px;
      }
  }
</style>
