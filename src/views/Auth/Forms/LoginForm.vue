<template>
    <div class="login">
        <div class="login-header">
            <h2 class="login-header-title__item">Авторизация</h2>
            <p class="login-header-description__item">Вход в аккаунт</p>
        </div>

        <div class="login-forms">
            <label class="input__label" for="">
                <div class="status__bar"></div>
                <BaseInput v-model.trim="login" classes="login-input" />
                <span>Логин</span>
            </label>

            <label class="input__label" for="">
                <div class="status__bar"></div>
                <BaseInput v-model.trim="password" type="password" classes="login-input" />
                <span>Пароль</span>
            </label>

            <label for="">
                <input type="checkbox">
                <h4>Запомнить меня</h4>
            </label>

            <transition name="opacity">
                <TheMessageError v-if="errors.isShow" :msg="errors.msg" />
            </transition>

            <BaseButton classes="login-btn" @click="goLogin">Авторизоваться</BaseButton>
        </div>
    </div>
</template>

<script>
import BaseButton from '../UI/BaseButton';
import BaseInput from '../UI/BaseInput';

import TheMessageError from '../TheMessageError';

export default {
    components: {
        BaseButton, BaseInput, TheMessageError
    },
    data() {
        return {
            login: '',
            password: '',
            errors: {
                isShow: false,
                msg: null,
            }
        }
    },
    methods: {
        goLogin() {
            const { login, password } = this;

            if (login.length < 3) {
                this.errors = {
                    isShow: true,
                    msg: 'Слишком мало символов в логине!',
                }
            } else if (password.length < 3) {
                this.errors = {
                    isShow: true,
                    msg: 'Слишком мало символов в логине!',
                }
            } else {
                this.errors = {
                    isShow: false
                }

                window.mp.triggerServer("signin", login, password);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.login {
    position: relative;
    z-index: 222;
    height: 90%;
    max-width: 36.05898123324397vh;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .login-header {
        margin-bottom: 2.680965147453083vh;
    }


    .login-forms {
        display: flex;
        flex-direction: column;
        gap: 1.3404825737265416vh;

        label {
            display: flex;
            align-items: center;

            &.input__label {
                position: relative;
                height: 9.651474530831099vh;
            }

            input[type="checkbox"] {
                margin-right: 1.3404825737265416vh;
            }

            span {
                position: absolute;
                left: 3.351206434316354vh;
                color: white;
                top: 2.680965147453083vh;
                opacity: .25;
                font-weight: 700;
                font-size: 1.7vh;
            }

            .status__bar {
                position: absolute;
                left: 2.0107238605898123vh;
                width: 0.2vh;
                height: 3.485254691689008vh;
                background: white;
                box-shadow: 0px 0px 1.876675603217158vh rgba(255, 255, 255, 0.55);
                bottom: 0;
                top: 0;
                margin: auto;
            }
        }
    }

    &-header {
        &-title__item {
            font-weight: 800;
            font-size: 6.434316353887399vh;
            line-height: 7.774798927613941vh;

            background: linear-gradient(89.71deg, #DB121B 0.25%, #C6215C 99.8%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;

            text-shadow: 0px 0px 112.591px rgba(255, 255, 255, 0.25);
        }

        &-description__item {
            font-weight: 600;
            font-size: 2.0107238605898123vh;
            text-transform: uppercase;
            color: #FFFFFF;
        }
    }
}
</style>