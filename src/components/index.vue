<template>
    <div>   
        <h2>TODO</h2>
        <input v-model="prueba"  type="text" @keyup.enter="addTarea()"> {{prueba}}
        <ul> 
          <li v-for="tarea in tareas">
              {{tarea.text}}
          </li>
        </ul>
    </div>
</template>

<script>
export default{
    data () {
        return {
            prueba: "",
            tareas: [
              { text: "a" }
            ]
        }
    },
    methods: {

      addTarea() {
        this.tareas.push(this.prueba)
        console.log(this.tareas.text)
      }

    }
}
</script>

<style>

</style>
