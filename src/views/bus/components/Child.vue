<template>
  <div class="bus-child">
    <van-button type="primary" @click="emitChild">主要按钮</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    emitChild() {
      this.$bus.$emit("child");
    },
  },
};
</script>
