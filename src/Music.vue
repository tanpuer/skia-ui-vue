<script>
import {pop} from './renderer/SkiaUIRenderer.js'

export default {
  data() {
    return {
      viewBg: "#ffff00ff"
    }
  },
  methods: {
    handleClick() {
      pop();
    }
  },
  mounted() {
    console.log("App mounted.");
  },
  unmounted() {
    console.log("App unmounted.");
  },
}
</script>

<template>
  <page style="width:1080px;height:1920px">
    <scroll style="width:1080px;height:1920px;justify-content: center;align-items: center">
      <button @click="handleClick" style="width: 260px; height: 100px; background-color: #00ff00; font-size: 50px"
              text="back"
      />
    </scroll>
  </page>
</template>

<style scoped>

</style>
