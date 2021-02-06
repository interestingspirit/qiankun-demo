<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>我是Vue微应用的首页 {{ name }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'
import actions from '../shared'

export default {
  name: "Home",
  setup() {
    const name = ref('')
    actions.onGlobalStateChange(state => {
      console.log('micro app vue state', state)
      name.value = state.name
    }, true)
    return {
      name
    }
  }
};
</script>
