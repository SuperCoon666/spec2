<template>
    <div>
        <div class="user-header">
            <h1 class="h1">
                {{UserName}}
            </h1>
            <a v-bind:href=Tg class="links">Telegram</a>
            <el-button class="review-but">Write a post</el-button>
            <div class="ava">
                <img src="../assets/ava.webp" alt="avatar">
            </div>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "UserPageView",
        data(){
            return{
                UserName: "Super Coon",
                UserAvatar: "../assets/ava.webp",
                Tg: "https://t.me/Super_Coon"
            }
        }
    }
</script>

<style lang="scss">
    .h1 {
        position: absolute;
        display: flex;
        top: 20px;
        left: 250px;
    }
    .review-but {
        position: absolute;
        display: flex;
        right: 80px;
        top: 170px;
        color: #42b983 !important;
        background-color: #485656 !important;
        border-color: #485656 !important;
    }
    .links{
        position: absolute;
        display: flex;
        top: 90px;
        left: 250px;
        color: #42b983 !important;
        width:100px;
        text-decoration: none !important;
    }
    .user-header{
        left: 320px;
        top: 40px;

        height: 200px;

        font-size: 18px;
        line-height: 28px;
        word-break: break-word;

        position: relative;
        display: flex;
        color: #eef2f1;
        border-radius: 18px;
        outline: 1px solid #252525;
        background-color: #181d1c;

        padding-top: 32px;
        padding-right: 36px;
        padding-bottom: 32px;
        padding-left: 36px;

        .ava {
            position: absolute;
            width: 200px;
            height: 300px;
            border-radius: 18px;

            top: -50px;

            display: flex;
            overflow: hidden;
        }
    }
    @media (max-width: 1250px){
        .review-but{
            right: 120px;
        }
    }
    @media (max-width: 800px){
        .user-header{
            width: 85%;
            left: 15px;
            top: 40px;
        }
        .h1 {
            top: 20px;
            left: 10%;
        }
        .links {
            top: 90px;
            left: 10%;
        }
        .review-but {
            right: 15%;
            top: 80%;
        }
    }
    @media (max-width: 650px){
        .user-header{
            width: 80%;
            left: 15px;
            top: 40px;
        }
    }
    @media (max-width: 550px){
        .user-header{
            width: 80%;
            left: 15px;
            top: 40px;

            padding-top: 15px;
            padding-right: 36px;
            padding-bottom: 15px;
            padding-left: 36px;
        }
    }
</style>
