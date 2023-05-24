<template>
  <div class="p-input-default" :style="{width: size && size!=='' ? `${size}px` : '' }">
    <div :class="isClass" >
      <input 
        ref="input" 
        :type="type" 
        :value="modelValue" 
        :disabled="disabled" 
        :placeholder="placeholder" 
        :autofocus="autofocus" 
        @input="handleInput" 
        @focus="handleFocus" 
        @blur="handleBlur" 
        @change="handleChange">
      <i class="clearable-icon" v-if="clearable && modelValue!=''" @click="clear">x</i>
    </div>
    <slot name="btn"/>
  </div>
</template>

<script lang="ts" setup>
import { ref,computed } from 'vue';

defineOptions({
  name: 'PInput'
  // inheritAttrs: false,
})
const emit = defineEmits(['update:modelValue','clear','focus','blur','input','change'])
const props = defineProps({
  modelValue: { // 值
    type: [String, Number],
    default: '',
  },
  type: { // 类型
    type: String,
    default: 'text',
  },
  size:{ // 尺寸
    type:String,
    default:'default'
  },
  disabled:Boolean, // 是否禁用
  clearable:Boolean, // 是否清除
  placeholder: {
    type: String,
    default: '请输入内容'
  },
  autofocus:Boolean,  //当页面加载时 <input> 元素自动获得焦点
})
console.log(props)
type TargetElement = HTMLInputElement | HTMLTextAreaElement
const focused = ref(false)
const handleInput = (event: Event) => {
  let { value } = event.target as TargetElement
  console.log(value, 'valuevalue')
  emit('update:modelValue', value)
  emit('input',value)
}
const clear = () => {
  emit('update:modelValue', "")
  emit('change', '')
  emit('clear')
  emit('input', '')
}
const handleFocus = (event: FocusEvent) => {
  focused.value = true
  emit('focus', event)
}
const handleBlur = (event: FocusEvent) => {
  focused.value = false
  emit('blur', event)
}
const handleChange = (event: Event) => {
  emit('change', (event.target as TargetElement).value)
}
const isClass = computed(()=>{
  return [
    props.clearable?'p-input-clearable':props.size=='default'?'p-input-default':`p-input-${props.size}`,
    props.disabled?'p-input-disabled':''
  ]
})
</script>
<style scoped lang="sass">
.p-input-default
  width:100%
  height:35px
  border:1px solid #dcdfe6f6
  overflow: hidden
  border-radius:4px
  transition: all .2s ease
  position: relative
  box-sizing: border-box
  position: relative
  display: flex
  input
    flex: 1
    width:100%
    font-size:14px
    outline: none
    // outline:none
    border:0
    margin:0
    padding:10px 10px 10px 10px
    box-sizing: border-box
    color:#606266
    background-color: #fff
  input::placeholder
    color:    #c6c8cc
    font-size: 14px
  .clearable-icon
    position: absolute
    right: 10px
    top: 2px
    color:#94969b
    font-size: 20px
    transition: all .2s ease
    cursor: pointer
.p-input-default
  width:200px
</style>