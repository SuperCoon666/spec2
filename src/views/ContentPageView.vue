<template>
    <div>
        <div class="content-page-header">
            <article class="Headline big-screen small-screen">
                {{Headline}}
            </article>
            <article class="MainContent big-screen small-screen">
                {{MainContent}}
            </article>
        </div>
    </div>
</template>

<script>
    import RealBDTekst from "../assets/RealBDTekst.json"
    export default {
        name: "ContentView",
        data(){
            return{
                Headline:"What is a relational database?",
                MainContent: RealBDTekst.IBM //"Neural style transfer is an optimization process that works on 3 images: a content image, a style image (such as an artwork), and an input image. If you \"mix\" them, you get the input picture, adjusted in composition to the content picture in the image of the copied style.",
            }
        },
        methods:{
        }
    }
</script>

<style scoped>
    .content-page-header{
        position: relative;
        width: 800px;
    }
    .Headline{
        left: 320px;
        top: 40px;
        height: auto;
        position: relative;


        font-size: 38px;
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
    .MainContent{
        left: 320px;
        top: 40px;
        height: auto;

        word-break: break-word;

        position: relative;
        color: #eef2f1;
        border-radius: 18px;
        outline: 1px solid #252525;
        background-color: #181d1c;
        transition: background-color .2s ease-in-out;
        fill: #eef2f1;

        /*text-align: center;*/

        font-family:  "Inter", Helvetica, Arial, sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.05em;

        margin-top: 20px;
        padding-top: 32px;
        padding-right: 36px;
        padding-bottom: 32px;
        padding-left: 36px;
    }
  /*@media (min-width: 800px){*/
  /*    .big-screen{*/
  /*          width: 65% !important;*/
  /*    }*/
  /*}*/
  @media (max-width: 1200px){
      .MainContent{
          font-size: 20px;
      }
  }
  @media (max-width: 800px){
      .small-screen{
          width: 100% !important;
          position: sticky !important;
      }
      .Headline{
          margin-right: 15px;
          margin-left: 15px;
      }
      .MainContent{
          margin-right: 15px;
          margin-left: 15px;
          font-size: 35px;
      }
      .content-page-header{
          width: 600px;
      }
  }
  @media (max-width: 450px){
      .MainContent{
          font-size: 34px;
      }
  }
  @media (max-width: 300px){
      .MainContent{
          font-size: 20px;
      }
  }
</style>
