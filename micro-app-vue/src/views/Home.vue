<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>我是Vue微应用的首页 {{ name }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import SharedModule from "../shared";

export default {
  name: "Home",
  setup() {
    const name = ref("");
    const shared = SharedModule.getShared();
    name.value = shared.getName();
    return {
      name
    };
  }
};
</script>
