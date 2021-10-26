<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">모두 지우기</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      //localStorage.clear();
      this.$emit("removeAll");
    }
  }
};
</script>

<style>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background: linear-gradient(to right, #6478fb, #8763fb);
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #fff;
  display: black;
}
</style>
