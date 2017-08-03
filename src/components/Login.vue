<template>
<div class="login">
  <h1>Formulario Login</h1>
  <table  align="center" style="text-align:center;" cellspacing="0">
  <tr>
    <td>Usuario: </td>
    <td><input type="text" name="user"></td>
  <tr>
  <td>Contraseña: </td>
  <td><input type="password" name="password"></td>
  </tr>
  </table>
  <br><input  onclick=go() type=button value=Acceder>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.select {
  border: 1px solid #ccc;
  width: 300px;
  overflow: hidden;
}

</style>
