<!--
 * @Author: xie yanpeng
 * @Date: 2020-10-14 13:46:49
 * @LastEdit: enter your name
 * @LastEditTime: 2020-10-14 22:24:39
 * @Description: 
-->
<template>
  <div class="add">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <div>请选择服务对象</div>
    <div>
      <button
        v-for="(item, index) in girls"
        v-bind:key="index"
        @click="selectGirlFun(index)"
      >
        {{ index }}:{{ item }}
      </button>
    </div>
    <div>你选择了{{ selectGirl }}为你服务</div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, reactive, toRefs, onBeforeMount, onMounted, onBeforeUpdate, onBeforeUnmount } from "vue";

export default {
  name: "App",
  setup() {
    interface DataProps {
      girls: string[];
      selectGirl: string;
      selectGirlFun: Function;
    }
    const data = reactive({
      girls: ["大脚", "刘英", "小红"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        console.log(index);
        data.selectGirl = data.girls[index];
        console.log(data.selectGirl);
      },
    });

    onBeforeMount(() => {
      console.log("02-组建挂在到页面");
    });
    onMounted(() => {
      console.log("03-组建挂在到页面");
    });
    onBeforeUpdate(()=>{
      console.log("04-数据更新");
    });
    // 组建销毁之前
    onBeforeUnmount(()=>{
      console.log("object");
    })

    // const girls = ref(["大脚", "刘英", "小红"]);
    // const selectGirl = ref("");
    // const selectGirlFun = (index: number) => {
    //   selectGirl.value = girls.value[index];
    // };
    return {
      // girls,
      // selectGirl,
      // selectGirlFun,
      // 直接展开会没有响应式
      ...toRefs(data),
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
