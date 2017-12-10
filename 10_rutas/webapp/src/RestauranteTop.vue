<template>
    <h2>Esto es: {{texto}}: {{idRestaurante}}</h2>
</template>

<script>
export default {
    name: "restauranteTop",
    mounted() {
        this.idRestaurante=this.$route.params.id;
    },
    data() {
        return {
             texto: 'Pagina restaurante destacado',
             idRestaurante: null
        }
    }
}    
</script>

<style>

</style>