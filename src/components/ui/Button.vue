<script lang="ts" setup>
  import { computed } from 'vue'

  interface IButton {
    filled?: boolean,
    iconSize?: '32' | '24' | '16',
    type: 'submit' | 'reset' | 'button'
  }
  const props = withDefaults(defineProps<IButton>(), {
    iconSize: '24',
    type: 'button'
  })

  const emit = defineEmits<{ onClick: [] }>()

  const parseIconSize = computed(() => `${props.iconSize}px`)
</script>

<template>
  <button
    :class="[
      'button',
      filled ? '_filled' : '',
      filled ? 'font-bold _l1' : ''
    ]"
    :type="type"
    @click="emit('onClick')"
  >
    <slot name="icon" />
    <slot />
  </button>
</template>

<style lang="scss">
  .button {
    & > svg {
      width: v-bind(parseIconSize);
      height: v-bind(parseIconSize);
    }
  }
</style>

<style lang="scss" scoped>
  .button {
    display: flex;
    align-items: center;
    gap: 12px;

    &._filled {
      padding: 12px 24px;
      color: var(--white);
      background: var(--brand-primary);
      border-radius: 8px;
    }

    @media (hover: hover) {
      &._filled:hover {
        background: var(--brand-hover);
      }
    }
  }
</style>
