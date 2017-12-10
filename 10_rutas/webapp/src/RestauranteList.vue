<template>
    <div>
        <ul id="restauranteList" v-if="restaurantes!=null">
            <li v-for="item in restaurantes">
                <strong>{{item.title}}</strong>
                <p>
                    <router-link :to="{name: 'verRestaurante', params: {id: item.id}}">Ver</router-link>
                    <router-link :to="{name: 'editarRestaurante', params: {id: item.id}}">Editar</router-link>
                    <span v-if="showBorrar !=item.id">
                        <a v-on:click="borrarRestaurante(item.id)" style="cursor:pointer;">Eliminar</a>
                    </span>
                    <span v-else>
                        <p>Estas seguro?</p>
                        <button v-on:click="cancelar()">Cancelar</button>
                        <button v-on:click="aceptar(item.id)">Aceptar</button>
                    </span>
                </p>
            </li>
        </ul>
        <span v-else>Cargando...</span>
    </div>
</template>

<script>
export default {
    name: "restauranteList",
    mounted() {
        this.getRestaurantes();
    },
    data() {
        return {
             texto: 'Pagina restaurante list',
             restaurantes: null,
             showBorrar: null
        }
    },
    methods: {
        getRestaurantes(){
            fetch("https://jsonplaceholder.typicode.com/posts",{
                method: "GET",
                headers: new Headers(),
            }).then((res) => res.json())
            .then((data) => this.restaurantes=data)
            .catch((err) => console.log(err))       
        },
        borrarRestaurante(id){
            this.showBorrar=id;
        },
        cancelar(){
            this.showBorrar=null;
        },
        aceptar(id){
            fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
                method: 'DELETE'
            })
            .then((resp)=>{
                this.showBorrar=null;
                console.log(resp);
                this.getRestaurantes();
            });
        }
    }
}    
</script>

<style lang="scss">
    #restauranteList{
        padding: 5px;
        li{
            margin-top: 10px;
            width: 30%;
            height: 120px;
            border: 1px solid #ddd;
            background: #eee;
            padding: 20px;
            overflow: hidden;
        }
    }
</style>