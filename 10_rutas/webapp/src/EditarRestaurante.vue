<template>
    <div>
        <h2>Editar nuevo restaurante</h2>
            <form v-on:submit.prevent="editRestaurante()">
        <p>
            <label>userID</label>
            <input type="number" v-model="restaurante.userId">
        </p>  
        <p>      
            <label>id</label>
            <input type="number" v-model="restaurante.id">
        </p>
        <p>  
        <label>title</label>
        <input type="text" v-model="restaurante.title">
        </p>  
        <p>
            <label>body</label>
            <textarea v-model="restaurante.body"></textarea>
        </p>
        <input type="submit" value="Guardar Restaurante">
        </form>
    </div>
</template>

<script>
    export default {
        name: 'editarRestaurante',
        mounted(){
            this.idruta=this.$route.params.id;
                fetch("https://jsonplaceholder.typicode.com/posts/"+this.idruta,{
                    method: "GET",
                    headers: new Headers(),
                }).then((res) => res.json())
                .then((data) => this.restaurante=data)
                .catch((err) => console.log(err))  
        },
        data(){
            return {
                idruta: null,
                restaurante: {
                    userId: null,
                    id: null,
                    title: null,
                    body: null
                }
            }
        },
        methods: {
            editRestaurante(){
                var rout=this.$router;
                fetch('https://jsonplaceholder.typicode.com/posts/'+this.idruta, {
    method: 'PUT',
    body: JSON.stringify({
        id: this.idruta,
      title: this.restaurante.title,
      body: this.restaurante.body,
      userId: this.restaurante.userId
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then((res) => res.json())
  .then(function(data) {
    console.log(data);
    //comprobar x header primero si es 200 de eestado, if status blabla
    // if()
        rout.push('/restaurante')
  })
  .catch(function(error) {
    console.log('Fetch Error :-S', error);
  });
            }
        }
    }
</script>