<template>
  <button class="t-button" :class="className" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'Button',
  //  类型
  props: {
    type: {
      type: String,
      default: 'default',
      validator: value =>
        ['success', 'primary', 'warning', 'text'].includes(value)
    },
    // 大小
    size: {
      type: String,
      default: 'medium',
      validator: value => ['medium', 'small', 'mini', 'large'].includes(value)
    },
    // 是否有圆角
    round: Boolean,
    // 是否可被点击
    disabled: Boolean,
    // 是否有loading
    loading: Boolean
  },

  setup(props) {
    const className = useClass(props)
    return {
      className
    }
  }
}

const useClass = props => {
  const { loading, round, size, type } = props
  const name = 't-button'
  return computed(() => {
    let btn = [`${name}-${size}`, `${name}-${type}`]
    if (round) {
      btn.push(`${name}-round`)
    }
    if (loading) {
      btn.push(`${name}-loading`)
    }
    return btn
  })
}
</script>

<style lang="scss" scoped></style>
