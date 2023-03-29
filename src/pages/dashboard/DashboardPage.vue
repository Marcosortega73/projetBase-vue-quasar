<script setup>
console.log("hello script setup");
</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Rutinas</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn @click="() => $router.push('/rutinas')" flat
          ><q-icon name="arrow_right_alt" />Ir</q-btn
        >
      </q-card-actions>
    </q-card>
  </div>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
