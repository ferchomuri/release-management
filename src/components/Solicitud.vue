<template>
<div class="solicitud">
  <h1>Formulario Solicitud</h1>
<table border="1" align="center" style="text-align:center;" cellspacing="0">
  <tr>
    <td>Ambiente </td>
    <td><select class="select">
      <option >Seleccione el Ambiente</option>
      <option value="ambiente1">Ambiente 1</option>
      <option value="ambiente2">Ambiente 2</option>
  </select></td>
</tr>
  <tr>
    <td>Proyecto </td>
      <td><select class="select">
      <option >Seleccione el Proyecto</option>
      <option value="proyecto1">Proyecto 1</option>
      <option value="proyecto2">Proyecto 2</option>
</select></td>
  </tr>
  <tr>
    <td>Aplicación </td>
    <td><select  class="select">
      <option >Seleccione la Aplicación</option>
      <option value="aplicacion1">Aplicación 1</option>
      <option value="aplicacion2">Aplicación 2</option>
</select></td>
  </tr>
  <tr>
    <td>Versión</td>
      <td ><input name="versión" placeholder="e.g. 4.5.6" size="38" > </td>
  </tr>
  <tr>
    <td>Fecha de Publicación:</td>
      <td><input type="date" name="fecha-publicacion"  value="fecPublicacion"></td>
  </tr>
  <tr>
    <td>Cargar Aplicación:</td>
  <td ><input name="archivo" type="file" size="20"></td>
  </tr>
  <tr>
    <td>Comentario:</td>
      <td><textarea name="comentario" cols="40" rows="4" value="comentario"></textarea></td>
  </tr>
  </table>
</div>
</template>

<script>
export default {
  name: 'solicitud',
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
