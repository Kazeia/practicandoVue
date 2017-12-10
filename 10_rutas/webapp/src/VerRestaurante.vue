<template>
    <div>   
        <h1>Detalle del Restaurante {{id}}</h1>
        <div id="verRestaurante" v-if="restaurante!=null">
            <h2 v-text="restaurante.title"></h2>
        </div>
        <span v-else>Cargando restaurante...</span>
    </div>
</template>

<script>
    export default {
    name: "verRestaurante",
    mounted() {
        this.id=this.$route.params.id;

        fetch("https://jsonplaceholder.typicode.com/posts/"+this.id,{
            method: "GET",
            headers: new Headers(),
        }).then((res) => res.json())
        .then((data) => this.restaurante=data)
        .catch((err) => console.log(err))       
    },
    data() {
        return {
            id: null,
            restaurante: null
        }
    }
}  
</script>