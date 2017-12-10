<template>
    <div>
        <input type="text" v-model="texto"></input>
        <button v-on:click="imprimir()">daleee</button>
        </br>
        {{$data}}
    </div>
</template>

<script>
export default {
    name: 'home',
    data(){
        return {
            texto: ''
        }
    },
    methods: {
        imprimir(){
            alert(this.texto);
        }
    }
}
</script>

<style lang="">
    
</style>