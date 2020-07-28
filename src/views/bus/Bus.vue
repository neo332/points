<template>
  <div class="bus">
    <Super></Super>
    <Child></Child>
    <Brother></Brother>
  </div>
</template>
<script>
export default {
  components: {
    Super: () => import("./components/Super"),
    Child: () => import("./components/Child"),
    Brother: () => import("./components/Brother"),
  },

  methods: {
    onBus(eventType, callback) {
      /**
       * eventType 事件类型
       * callback 回掉函数
       */
      this.$bus.$on(eventType, callback);
    },
  },
  mounted() {
    this.onBus("child", function() {
      console.log("child");
    });
  },
};
</script>
<style scoped lang="scss"></style>
