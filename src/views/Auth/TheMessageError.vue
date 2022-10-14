<template>
    <div class="error">
        <div class="error-title__item">ОШИБКА!</div>
        <div class="error-description__item">
            {{msg}}
        </div>
    </div>
</template>

<script>
export default {
    props: ['msg']
}
</script>

<style lang="scss" scoped>
.error {
    width: 100%;
    height: 9.651474530831099vh;
    background: rgba(219, 18, 27, 0.1);
    padding: 0 4.021447721179625vh;
    border: 1px solid #DB121B;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-title__item {
        font-weight: 600;
        font-size: 1.876675603217158vh;
        text-transform: uppercase;
        color: #FFFFFF;
    }

    &-description__item {
        font-weight: 700;
        font-size: 1.6085790884718498vh;
        line-height: 1.876675603217158vh;
        text-transform: uppercase;

        color: #FFFFFF;

        opacity: 0.55;
    }
}
</style>