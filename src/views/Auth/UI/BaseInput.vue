<template>
    <input :type="type" :disabled="disabled" @input="$emit('input', $event.target.value)" @keydown.enter="$emit('enter')"
        :placeholder="placeholder" :class="getWrappedClasses">
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
        },
        type: {
            type: String,
            default: 'text'
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
input {
    border: 0;
    outline: none;

    &.login-input {
        background: linear-gradient(270deg, rgba(90, 90, 90, 0.26) 0%, #191919 50.01%, rgba(116, 116, 116, 0.02) 100%);
        width: 100%;
        height: 100%;
        font-size: 2.0107238605898123vh;
        color: white;
        padding: 0 3.3298647242455774vh;
        padding-top: 2.0107238605898123vh;
        font-weight: 600;
    }
}
</style>