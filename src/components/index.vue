<template>
<div>
  <h2>TODO</h2>
  <input type="text" :placeholder="place" v-model="accion">
  <input type="button" @click="addTarea()" value="AAA">
  <ul>
    <li :class="{'done': tarea.done}" @click="deleteTarea(tarea, index)" v-for="(tarea,index) in tareas" :key="index">{{index+1}}-{{tarea.text}}<span v-if="tarea.done"> HECHO</span></li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      accion: '',
      tareas: [
        {text: 'Aprender Vue', done: false},
        {text: 'Aprender ES6', done: true}
      ],
      place: 'AÑADE'
    }
  },
  methods: {
    addTarea() {
      this.tareas.push(this.accion)
      this.accion = ''
    },
    deleteTarea(t,i) {
      setTimeout(() => {
        this.tareas.splice(i, 1)
      }, 1000)
    }
  }
}
</script>

<style>
.done {
  color: green
}

</style>
