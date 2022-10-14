<template>
    <div class="nav">
        <ul class="list">
            <li v-for="(nav, index) of navList" :key="index" @click="index !== active ? $emit('click', index) : false" class="list__item" :class="{'active': active === index}">{{nav}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        active: {
            type: Number,
            default: 0
        },
    },
    data() {
        return {
            navList: ['Авторизация', 'Регистрация', 'Восстановление пароля']
        }
    },
}
</script>

<style lang="scss" scoped>

ul, li {
    list-style: none;
}
.nav {
    display: flex;
    justify-content: center;

    ul.list {
        display: flex;
        cursor: pointer;

        .list__item {
            padding: 2.680965147453083vh 4.9vh;
            border-bottom: 0.2680965147453083vh solid #fff;
            font-weight: 700;
            font-size: 2.0107238605898123vh;
            text-align: center;
            text-transform: uppercase;
            color: #FFFFFF;
            opacity: 0.25;

            &.active {
                background: linear-gradient(269.91deg, #1E090C 0.79%, rgba(30, 9, 12, 0.148857) 63.03%, rgba(30, 9, 12, 0) 99.93%);
                border-bottom: 0.13404825737265416vh solid red;
                opacity: 1;
            }
        }
    }
}
</style>