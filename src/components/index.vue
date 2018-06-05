<template>
<div>
  <h2>TODO</h2>
  <input type="text" @keypress.enter="addTarea()" :placeholder="place" v-model="accion">
  <input type="button" @click="addTarea()" value="AAA">
  <input type="button" @click="callFirebase()" value="FIREBASE">
  <ul>
    <li :class="{'done--block': tarea.done}" @click="deleteTarea(tarea, index)" v-for="(tarea,index) in todos" :key="index">{{index+1}}-{{tarea.text}}<span v-if="tarea.done"> HECHO</span></li>
  </ul>
  {{todos}}
  {{tareas}}
</div>
</template>

<script>
import {db} from '../plugins/firebase'
export default {
  data() {
    return {
      accion: '',
      tareas: [
        {text: 'Aprender Vue', done: false},
        {text: 'Aprender ES6', done: true}
      ],
      place: 'AÑADE',
      todos: {}
    }
  },
  methods: {
    addTarea() {
      this.tareas.push({
        text: this.accion,
        done: false
      })
      this.accion = ''
    },
    deleteTarea(t,i) {
        this.tareas[i].done = true;
      setTimeout(() => {
        this.tareas.splice(i, 1)
      }, 1000)
    },
    /*
    callFirebase() {
      const newTarea = {
        text: this.accion,
        done: false,
        createdAt: new Date().toISOString()
      }
      if (this.accion != '') {
        db.collection('todo')
        .add(newTarea)
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {
          console.log(error)
        })
      }

    }
    */
  },
    /*
    firestore() {
      return {
        todos: db.collection('todo'),
      }
    }
    */
}
</script>

<style>
.done--block {
  color: green
}
.done--none {
  color: red
}

</style>
