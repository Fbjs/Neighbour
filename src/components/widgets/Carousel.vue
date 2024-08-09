<template>
    <div class="relative">
      <div class="flex justify-center items-center">
        <button @click="prevImage" class="absolute left-0 ml-2 bg-gray-800 text-white p-2 rounded-full">⬅️</button>
        
        <!-- Contenedor de la imagen y el mensaje centrado -->
        <div class="relative w-full">
          <img :src="images[currentIndex]" alt="Image" class="w-full rounded-lg shadow-lg" />
          <div class="absolute inset-0 flex justify-center items-center">
            <span class="text-white text-2xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
              {{ message }}
            </span>
          </div>
        </div>
        
        <button @click="nextImage" class="absolute right-0 mr-2 bg-gray-800 text-white p-2 rounded-full">➡️</button>
      </div>
      <div class="flex justify-center mt-4 space-x-2">
        <button
          v-for="(image, index) in images"
          :key="index"
          @click="setImage(index)"
          :class="{
            'w-4 h-4 rounded-full': true,
            'bg-gray-800': currentIndex === index,
            'bg-gray-400': currentIndex !== index
          }"
          aria-label="Go to slide"
        ></button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    images: {
      type: Array,
      required: true
    },
    message: {
      type: String,
      required: true,
      default:"hola"
    }
  });
  
  const currentIndex = ref(0);
  
  const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
  };
  
  const prevImage = () => {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
  };
  
  const setImage = (index) => {
    currentIndex.value = index;
  };
  </script>
  
  <style scoped>
  /* Opcional: Puedes agregar estilos adicionales aquí */
  </style>
  