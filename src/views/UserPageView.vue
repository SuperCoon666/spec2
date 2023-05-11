<template>
    <div>
      <div class="user-header">
        <div class="ava">
          <img src="../assets/ava.webp" alt="avatar" />
        </div>
        <div class="user-info">
          <h1 class="h1">
            {{ UserName }}
          </h1>
          <a v-bind:href="Tg" class="links">Telegram</a>
        </div>
        <div>
            <el-button class="review-but">Write a post</el-button>
        </div>
      </div>
      <div></div>
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
  // * {
  //   outline: 1px solid red !important;
  // }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden; // Убрать горизонтальный скролл
  }

  .user-header {
    left: 320px;
    top: 40px;

    font-size: 18px;
    line-height: 28px;
    word-break: break-word;

    position: relative;
    display: flex;
    flex-direction: column;
    color: #eef2f1;
    border-radius: 18px;
    outline: 1px solid #252525;
    background-color: #181d1c;

    padding-right: 36px;
    padding-left: 36px;

    .ava {
      border-radius: 18px;
      display: flex;
      overflow: hidden;
    }
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 2;
  }

  .h1 {
    display: flex;
  }

  .links {
    display: flex;
    color: #42b983 !important;
    width: 100px;
    text-decoration: none !important;
  }

  .review-but {
    position: relative;
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #42b983 !important;
    background-color: #485656 !important;
    border-color: #485656 !important;
}

@media (max-width: 800px) {
  .user-header {
    width: 85%;
    left: 15px;
    top: 40px;
  }

  .h1 {
    top: 20px;
    left: 50px;
  }

  .links {
    top: 90px;
    left: 50px;
  }

  .review-but {
    right: 15px;
    top: auto;
    width: calc(100%);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  img {
    max-width: 80%;
  }
}
@media (max-width: 650px) {
    .user-header {
        width: 80%;
        left: 15px;
        top: 40px;
    }
}

@media (max-width: 550px) {
    .user-header {
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
