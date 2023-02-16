<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const username = ref('');
const password = ref('');

const images = ref([
  { id: 1, url: 'https://cdn.quasar.dev/img/mountains.jpg', name: "image 1" },
  { id: 2, url: 'https://cdn.quasar.dev/img/parallax1.jpg', name: "image 2" },
  { id: 3, url: 'https://cdn.quasar.dev/img/parallax2.jpg', name: "image 3" },
]);

const currentImage = ref(0);
const urlImage = ref(images.value[currentImage.value].url);

const stylePage = ref({
  backgroundImage: `url(${urlImage.value})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '100vw',
});


const changeImage = () => {
  if (currentImage.value < images.value.length - 1) {
    currentImage.value++;
  } else {
    currentImage.value = 0;
  }
  urlImage.value = images.value[currentImage.value].url;
  stylePage.value = {
    backgroundImage: `url(${urlImage.value})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
  };
};



onMounted(() => {
  setInterval(changeImage, 10000);
  console.log('mounted');
});

onBeforeUnmount(() => {
  clearInterval(changeImage);
  console.log('unmounted');
});



</script>
<template>
  <q-layout>
    <q-page-container>

      <q-page class="flex flex-center" :style="stylePage">

        <q-card class="cardContainer">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Sistema [nombre]</div>
            <div class="text-subtitle2">Inicio de sesión</div>
          </q-card-section>
          <q-card-section>
            <q-form>
              <q-input v-model="username" label="Username" filled type="email" hint="Ingrese su username"
                :rules="[val => val.length > 0 || 'El username es requerido']" />
              <q-input v-model="password" label="Contraseña" filled type="password" hint="Ingrese su contraseña"
                :rules="[val => val.length > 0 || 'La contraseña es requerida']" />
              <q-btn class="q-mt-md" color="primary" label="Iniciar sesión" />
            </q-form>
          </q-card-section>
        </q-card>

      </q-page>

    </q-page-container>
  </q-layout>
</template>
<style>
.containerPage {
  background-color: red;
  width: 100%;

}

.cardContainer {
  width: 30%;
  height: 50%;
}

@media (max-width: 600px) {
  .cardContainer {
    width: 70%;
  }
}

@media (max-width: 400px) {
  .cardContainer {
    width: 90%;
  }
}
</style>
