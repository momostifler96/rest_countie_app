import { createApp } from 'vue'

const app = createApp({
  data() {
    return {
      message: "hello world"
    }
  }
})

app.mount('#app')