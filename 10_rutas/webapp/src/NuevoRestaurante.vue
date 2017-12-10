<template>
    <div>
        <h2>A;adir nuevo restaurante</h2>
            <form v-on:submit.prevent="saveRestaurante()">
        <p>
            <label>userID</label>
            <input type="number" v-model="restaurante.userid">
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
        name: 'nuevoRestaurante',
        mounted(){

        },
        data(){
            return {
                restaurante: {
                    userid: null,
                    id: null,
                    title: null,
                    body: null
                }
            }
        },
        methods: {
            saveRestaurante(){
                var rout=this.$router;
                fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: this.restaurante.title,
      body: this.restaurante.body,
      userId: this.restaurante.userid
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