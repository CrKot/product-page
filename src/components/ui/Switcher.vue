<script setup lang="ts">
  const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()

  defineProps<{ modelValue: boolean }>()

  const changeCheckHandler = (e: Event) => {
    const value = (e.target as HTMLInputElement).checked
    emit('update:modelValue', value)
  }
</script>

<template>
  <label class="switch">
    <input
      type="checkbox"
      :checked="!!modelValue"
      :value="modelValue"
      @change="changeCheckHandler"
    >
    <span class="switch__slider" />
  </label>
</template>

<style lang="scss" scoped>
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;

    & > input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    &__slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 32px;
      background-color: var(--black-secondary);
      -webkit-transition: $transitionDuration;
      transition: $transitionDuration;
    }

    &__slider:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 2px;
      bottom: 2px;
      border-radius: 50%;
      background-color: var(--white);
      -webkit-transition: $transitionDuration;
      transition: $transitionDuration;
    }

    :has(input:checked) &__slider {
      background-color: var(--brand-primary);
    }

    :has(input:focus) &__slider {
      box-shadow: 0 0 1px var(--brand-primary);
      }

    :has(input:checked) &__slider:before {
      -webkit-transform: translateX(16px);
      -ms-transform: translateX(16px);
      transform: translateX(16px);
    }
  }
</style>
