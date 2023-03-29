<script setup></script>

<template>
  <q-toolbar>
    <q-toolbar-title>
      <q-avatar> </q-avatar>
      <span class="q-ml-sm">NASA</span>
    </q-toolbar-title>
    <div>
      <q-btn
        flat
        round
        dense
        icon="dashboard"
        @click="() => $router.push('/dashboard')"
      />
      <q-btn
        flat
        round
        dense
        icon="logout"
        @click="() => $router.push('/login')"
      />
    </div>
  </q-toolbar>
</template>
