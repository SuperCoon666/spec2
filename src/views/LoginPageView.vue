<template>
    <div class="child-personal-account-login">
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm" @submit.native.prevent="handleLogin" >
            <h3 class="text-login-param">Login</h3>
            <el-form-item prop="phone">
                <el-input prefix-icon="el-icon-message" placeholder="Email" ref="login" v-model="loginForm.phone"
                ></el-input>
            </el-form-item>
            <el-form-item prop="pass">
                <el-input class="input-param" prefix-icon="el-icon-key" type="password" placeholder="Password" v-model="loginForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="text-but-parm" type="primary" @click.native.prevent="handleLogin" :loading="loading">Sign in</el-button>
            </el-form-item>
            <el-form-item>
                <el-button class="text-but-parm" type="primary" @click.native.prevent="handleLogin" :loading="loading">Sign up</el-button>
            </el-form-item>
        </el-form>
        <div class="asset">
            <img src="../assets/pleased_racoon.webp" />
        </div>
    </div>
</template>

<script>
import { validateEmail } from '@/utils/validate'
    export default {
    name: 'Login',
    data() {
        const validateEmailWrapper = (rule, value, callback) => {
            console.log('value', value)
            if (!validateEmail(value)) {
                callback(new Error('Incorrect email'))
            } else {
                callback()
            }
        }
        const validatePassWrapper = (rule, value, callback) => {
            console.log('value', value)
            if (value.length < 15) {
                callback(new Error('Password must be at least 15 characters'))
            } else {
                callback()
            }
        }

        return {
            loginForm: {
                phone: '',
                pass: ''
            },
            loginRules: {
                phone: [{ required: true, trigger: 'change', validator: validateEmailWrapper }],
                pass: [{required: true, trigger: 'change', validator: validatePassWrapper}]
            },
            passwordType: 'password',
            loading: false,
            showDialog: false,
            redirect: undefined,
            loginFormVisible: true,
            recoveryFormVisible: false,
            successRecoveryRequestVisible: false
        }
    },
    created() {
        this.$nextTick(() => {
            this.$refs.login.focus()
        })
    },
    methods: {
        handleLogin() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.loading = true
                //    TODO: переход на главную страницу
                } else {
                    return false
                }
            })
        }
    }
  }
</script>

<style lang="scss">
    .child-personal-account-login {
        .asset {
            margin-top: 150px;
            position: relative;
            display: inline-block;
            left: -130px;
        }
        position: relative;
        display: inline-block;
        align-items: center;
        justify-content: center;
        /*height: 100%;*/
        margin-top: 100px;
        .text-login-param{
            color: #42b983 !important;
        }
        .text-but-parm{
            color: #42b983 !important;
            background-color: #485656 !important;
            border-color: #485656 !important;
        }
        .input-param {
            background-color: #485656 !important;
            border-color: #485656 !important;
        }

        .el-form {
            width: 400px;
            padding: 10px;

            h3 {
                color: #303133;
            }

            .el-form-item {
                margin-bottom: 1rem;
            }

            .el-input__prefix {
                font-size: 20px;
                left: 10px;
            }

            .el-input__inner {
                padding-left: 40px !important;
            }

            input::placeholder {
                font-weight: normal;
            }

            .el-button {
                width: 100%;
            }

            .form-footer {
                display: flex;
                align-items: center;

                .forgot-password-label {
                    color: #C6C6C6;

                    &:hover {
                        border-bottom: 1px solid #C6C6C6;
                        cursor: pointer;
                    }
                }
            }
        }

    }

  @media (max-width: 1100px){
      .child-personal-account-login{
          left: 150px;
      }
      .asset{
          left: -130px;
      }
  }
  @media (max-width: 800px){
      .child-personal-account-login{
          left: 50px;
      }
    .asset{
          left: -180px;
      }
  }
  @media (max-width: 560px){
      .child-personal-account-login{
          left: 80px;
      }
  }
</style>

