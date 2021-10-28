<template>
  <div class="inputBox shadow">
    <input
      type="text"
      v-model="newTodoItem"
      placeholder="할 일을 입력해 주세요!"
      v-on:keyup.enter="addTodo"
    />
    <!-- <button v-on:click="addTodo">추가</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-location-arrow" aria-hidden="true"></i>
    </span>
    <!-- modal -->
    <Modal v-if="showModal" v-on:close="showModal = false">
      <h3 slot="header">경고</h3>
      <span slot="footer" v-on:click="showModal = false"
        >닫기
        <!-- slot :  -->
        <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
      </span>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";
export default {
  // props: [propsdata],
  data: function() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  methods: {
    addTodo() {
      //console.log(this.newTodoItem);
      //예외처리
      if (this.newTodoItem !== "") {
        var value = this.newTodoItem && this.newTodoItem.trim();
        //localStorage.setItem(value, value);
        this.$emit("addTodo", value);
        this.clearInput();
      } else {
        // this.newTodoItem == ""
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  },
  components: {
    Modal: Modal
  }
};
</script>

<style scope>
/* scope: local하게 스타일 설정 */
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  /* top-right, bottom-right: 5px */
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
