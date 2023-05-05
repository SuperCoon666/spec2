<template>
  <div class="App">
      <div class="MainContent">
        <router-view></router-view>
      </div>
    <Layout></Layout>
    <SideBar></SideBar>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SideBar from "@/components/SideBar";

export default {
    name: "app",
    components: {
    Layout,
    SideBar
    },
    created(){
        document.body.style.margin = 0;
        document.body.style.backgroundColor = '#000000';
    }
};
</script>

<style lang="scss">
    .MainContent{
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .App{
        background-color: #000000;
        color: #eef2f1;
        margin: 0;
        border: 0;
        width: 100%;
        height: 100%;
    }
</style>
