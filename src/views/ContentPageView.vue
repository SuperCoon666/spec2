<template>
    <div>
        <div class="content-page-header">
            <article class="Headline">
                {{Headline}}
            </article>
            <article class="MainContent">
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
                MainContent: RealBDTekst.IBM
            }
        },
        methods:{
        }
    }
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.content-page-header {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    box-sizing: border-box;
    padding-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 40px;
}

.Headline {
    font-size: 38px;
    font-weight: 600;
    line-height: 52px;
    letter-spacing: -0.015em;
    word-break: break-word;
    color: #42b983;
    padding: 32px 36px;
    border-radius: 18px;
    outline: 1px solid #252525;
    background-color: #204969;
    margin-bottom: 20px;
    text-align: center;
    width: 100%;
    max-width: 800px;
}

.MainContent {
    position: relative;
    color: #eef2f1;
    border-radius: 18px;
    outline: 1px solid #252525;
    background-color: #181d1c;
    transition: background-color .2s ease-in-out;
    fill: #eef2f1;
    font-family: "Inter", Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.05em;
    padding: 32px 36px;
    text-align: left;
    width: 100%;
    max-width: 800px;
}
@media (max-width: 800px) {
    .content-page-header {
        max-width: 100%;
        padding: 50px 15px;
        box-sizing: border-box;
        padding-top: 30px;
    }
    .Headline {
        font-size: 35px;
        padding: 32px 16px;
        padding-left: 20px;
        padding-right: 20px;
    }
    .MainContent {
        font-size: 35px;
        padding: 32px 16px;
        padding-left: 20px;
        padding-right: 20px;
    }
}

@media (max-width: 450px) {
    .Headline {
        font-size: 30px;
        padding: 32px 8px;
    }
    .MainContent {
        font-size: 16px;
        padding: 32px 8px;
    }
}

@media (max-width: 300px) {
    .Headline {
        font-size: 24px;
        padding: 32px 4px;
    }
    .MainContent {
        font-size: 14px;
        padding: 32px 4px;
    }
}
</style>
