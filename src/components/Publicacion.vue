<template>
<div class="publicacion">
  <h1>Formulario Publicacion</h1>
<table border="1" align="center" style="text-align:center;" cellspacing="0">
<tr>
  <td>
    <input type="checkbox" name="filaSelecionada" >
  </td>
  <td>
    Ambiente
  </td>
  <td>
    Proyecto
  </td>
  <td>
    Aplicación
  </td>
  <td>
    Vesión
  </td>
  <td>
    Fecha Publicación
  </td>
  <td>
    Comentario
  </td>
  <td>
    Estado
  </td>
  <td>
    Acción
  </td>
</tr>
<tr>
<td>
  <input type="checkbox" name="filaSelecionada" >
</td>
<td>
  <select >
    <option >Seleccione el Ambiente</option>
    <option value="ambiente1">Ambiente 1</option>
    <option value="ambiente2">Ambiente 2</option>
</select>
</td>
<td>
  <select >
  <option >Seleccione el Proyecto</option>
  <option value="proyecto1">Proyecto 1</option>
  <option value="proyecto2">Proyecto 2</option>
</select>
</td>
<td>
  <select select class="select">
    <option >Seleccione la Aplicación</option>
    <option value="aplicacion1">Aplicación 1</option>
    <option value="aplicacion2">Aplicación 2</option>
</select>
</td>
<td>
  <output type="text" value="Version"></output
</td>
<td>
  <output type="date" name="fecha-publicacion"  value="fecPublicacion"></output>
</td>
<td>
</td>
<td>
</td>
<td>
</td>
</tr>
  </table>
</div>
</template>

<script>
export default {
  name: 'publicacion',
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
