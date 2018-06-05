<template>
<div>
  <h2>TODO</h2>
<<<<<<< HEAD
  <input type="text" @keypress.enter="addTarea()" :placeholder="place" v-model="accion">
=======
  <input type="text" @keyup.enter="addTarea()" :placeholder="place" v-model="accion">
>>>>>>> 02ddcee3da6e532f72669639078f72d04ce69533
  <input type="button" @click="addTarea()" value="AAA">
  <input type="button" @click="callFirebase()" value="FIREBASE">
  <ul>
    <li :class="{'done': tarea.done}" @click="deleteTarea(tarea, index)" v-for="(tarea,index) in todos" :key="index">{{index+1}}-{{tarea.text}}<span v-if="tarea.done"> HECHO</span></li>
  </ul>
  {{todos}}
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
      books: {},
      todos: {}
    }
  },
  methods: {
    addTarea() {
      this.tareas.push({
<<<<<<< HEAD
          text: this.accion,
          done: false
=======
        text: this.accion,
        done: false
>>>>>>> 02ddcee3da6e532f72669639078f72d04ce69533
      })
      this.accion = ''
    },
    deleteTarea(t,i) {
<<<<<<< HEAD
        this.tareas[i].done = true;
        setTimeout(() => {
            this.tareas.splice(i, 1);
        }, 4000)
=======
      setTimeout(() => {
        this.tareas.splice(i, 1)
      }, 1000)
    },
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
  },
    firestore() {
      return {
        todos: db.collection('todo'),
      }
>>>>>>> 02ddcee3da6e532f72669639078f72d04ce69533
    }
}
</script>

<style>
.done {
  color: green
}

</style>
