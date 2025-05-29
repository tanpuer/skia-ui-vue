<script>
import {createApp} from './renderer/SkiaUIRenderer.js'
import Music from "@/Music.vue";

export default {
  data() {
    return {
      viewBg: "#ffff00ff"
    }
  },
  methods: {
    handleClick() {
      console.log("changeBg");
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      const redHex = (red < 16 ? '0' : '') + red.toString(16);
      const greenHex = (green < 16 ? '0' : '') + green.toString(16);
      const blueHex = (blue < 16 ? '0' : '') + blue.toString(16);
      this.viewBg = `#${redHex}${greenHex}${blueHex}`;
    },
    handlePush() {
      createApp(Music);
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
      <view :style="{ width: '150px',height: '150px',marginBottom:'50px','background-color': viewBg}"
            @click="handleClick"
      />
      <svg style="width: 226px;height: 227px; margin-bottom: 50px;" src="vue.svg"></svg>
      <video style="width: 1080px;height: 607px" url="yiluxiangbei.mp4"></video>
      <button @click="handlePush" style="background-color: #00ff00; margin-top: 50px; font-size: 50px"
              text="click to music"/>
    </scroll>
  </page>
</template>

<style scoped>

</style>
