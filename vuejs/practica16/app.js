
  const { createApp } = Vue

  createApp({
    data() {
      return {
        lenguajes: ['C', 'C++', 'C#', 'Java', 'Ruby', 'Kotlin']
      }
    }
  }).mount('#miApp');