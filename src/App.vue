<script setup>
import { ref } from 'vue'
import data from './data.json'

// 组件
import Editor from './packages/Editor/index'

const state = ref(data)
</script>

<template>
  <div class="app-page">
    <Editor :data="data"></Editor>
  </div>
</template>

<style lang="scss">
.app-page {
  padding: 20px;
  box-sizing: border-box;
  height: 100vh;
}
</style>
