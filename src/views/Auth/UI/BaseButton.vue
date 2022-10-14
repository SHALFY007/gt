<template>
    <button type="text" :disabled="disabled" @click="$emit('click')" @keydown.enter="$emit('enter')"
        :placeholder="placeholder" :class="getWrappedClasses">
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        classes: {
            type: String,
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        getWrappedClasses() {
            return this.classes.split(',');
        }
    },
}
</script>

<style lang="scss" scoped>
button {
    cursor: pointer;
    &.login-btn {
        background: linear-gradient(180deg, rgba(219, 18, 27, 0.25) 0%, rgba(123, 9, 14, 0.25) 100%);
        box-shadow: inset 0px 0px 15px rgba(220, 32, 40, 0.86);
        height: 9.651474530831099vh;
        font-weight: 600;
        font-size: 1.876675603217158vh;
        text-transform: uppercase;
        transition: 1s all;
        color: #FFFFFF;

        &:hover {
            background: linear-gradient(180deg, #DB121B 0%, #7B090E 100%);
        }
    }
}
</style>