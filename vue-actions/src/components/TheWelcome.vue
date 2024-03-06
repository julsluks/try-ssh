<template>
  <h1>Welcome to Vue Actions</h1>
  <div class="button-container">
    <button v-for="n in 9" :key="n" @click="showBtn(n)">{{ n }}</button>
  </div>
  <p>{{ btnNum }}</p>
</template>

<script>
export default {
  data() {
    return {
      btnNum: ''
    }
  },
  methods: {
    showBtn(n) {
      this.btnNum = n;
      console.log('Button clicked:', n);
    }
  }
}
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
