<script setup>
import { ref } from "vue";

const columns = [
  {
    name: "nombre",
    required: true,
    label: "Nombre",
    align: "left",
    field: (row) => row.nombre,
    sortable: true,
    style: "width: auto",
  },
  {
    name: "turno",
    align: "right",
    label: "Turno",
    field: "turno",
    sortable: true,
    style: "width: auto",
  },
  {
    name: "tipodeRecorrida",
    label: "Tipo de Recorrida",
    field: "tipodeRecorrida",
    sortable: true,
    style: "width: auto",
  },
  {
    name: "frecuencia",
    label: "Frecuencia",
    field: "frecuencia",
    style: "width: auto",
    align: "right",
  },
  {
    name: "horaDesde",
    label: "Desde (hora)",
    field: "horaDesde",
    style: "width: auto",
  },
  {
    name: "horaHasta",
    label: "Hasta (hora)",
    field: "horaHasta",
    style: "width:auto",
  },
  {
    name: "estadoDePlanta",
    label: "Estado De Planta",
    field: "estadoDePlanta",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    style: "width:auto",
    align: "right",
  },
];
const rutinas = [
  {
    id: 1,
    nombre: "Exteriores-T. Mañana-Instancia 9:30",
    turno: "Mañana",
    tipodeRecorrida: "Exteriores",
    frecuencia: "Diaria/Todos los días",
    horaDesde: "09:30",
    horaHasta: "10:30",
    estadoDePlanta: "OP.NORMAL",
  },
  {
    id: 2,
    nombre: "Exteriores-T. Mañana-Instancia 10:30",
    turno: "Mañana",
    tipodeRecorrida: "Exteriores",
    frecuencia: "Diaria/Todos los días",
    horaDesde: "10:30",
    horaHasta: "11:30",
    estadoDePlanta: "OP.NORMAL",
  },
  {
    id: 3,
    nombre: "Exteriores-T. Mañana-Instancia 11:30",
    turno: "Mañana",
    tipodeRecorrida: "Exteriores",
    frecuencia: "Diaria/Todos los días",
    horaDesde: "11:30",
    horaHasta: "12:30",
    estadoDePlanta: "PP(Parada Programada)",
  },
];

const loading = ref(false);
const filter = ref("");
const rowCount = ref(10);
const rows = ref([...rutinas]);
/* const addRow = () => {
  loading.value = true;
  setTimeout(() => {
    const index = Math.floor(Math.random() * (rows.value.length + 1)),
      row = originalRows[Math.floor(Math.random() * originalRows.length)];

    if (rows.value.length === 0) {
      rowCount.value = 0;
    }

    row.id = ++rowCount.value;
    const newRow = { ...row }; // extend({}, row, { name: `${row.name} (${row.__count})` })
    rows.value = [
      ...rows.value.slice(0, index),
      newRow,
      ...rows.value.slice(index),
    ];
    loading.value = false;
  }, 500);
}; */
/* const removeRow = () => {
  loading.value = true;
  setTimeout(() => {
    const index = Math.floor(Math.random() * rows.value.length);
    rows.value = [
      ...rows.value.slice(0, index),
      ...rows.value.slice(index + 1),
    ];
    loading.value = false;
  }, 500);
}; */
</script>
<template>
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
    >
      <template v-slot:top>
        <q-btn color="primary" :disable="loading" label="Add row" />
        <q-btn
          class="q-ml-sm"
          color="primary"
          :disable="loading"
          label="Remove row"
        />
        <q-space />
        <q-input
          borderless
          dense
          debounce="300"
          color="primary"
          v-model="filter"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body-cell-estadoDePlanta="{ row }">
        <div class="flex justify-end">
          <q-chip
            :color="row.estadoDePlanta === 'OP.NORMAL' ? 'green' : 'indigo-4'"
            text-color="white"
            label
          >
            {{ row.estadoDePlanta }}
          </q-chip>
        </div>
      </template>
    </q-table>
  </div>
</template>
