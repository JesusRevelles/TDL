<template>
    <div>   
        <h2>TODO</h2>
        <input v-model="prueba"  type="text"> {{prueba}}
    </div>
</template>

<script>
export default{
    data () {
        return {
            prueba: ""
        }
    }
}
</script>

<style>

</style>
