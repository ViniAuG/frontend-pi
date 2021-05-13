<template>
  <body>
    <div class="block" v-responsive="{ small: block => block.width <= 500 }">

      <div class="inside-block">
        <h2 id="content-title">Sobre nós</h2>
        <p id="content-paragraph">Estamos em nosso sétimo projeto no Centro universitário SENAC. Este, por sua vez, refere-se a uma aplicação real no mundo da produção de produtos. Nosso produto visa facilitar a vida dos produtores por meio de tecnologias aplicadas e uma alta gama de ferramentas disponíveis para uso diário.</p>
        <img src="../assets/senac.jpg" id="production-image" class="production-image"  v-responsive="{ small: el => el.width <= 500 }">
      </div>

    </div>
  </body>
</template>

<script>

export default {
  name: 'about'
}
</script>

<style scoped>

.inside-block {
  display: inline-block;
  vertical-align: middle;
  height: 500px;
  width: 800px;
}

#content-title {
  font-size: 30px;
  color: aliceblue;
  margin-bottom: 20px;
}

#content-paragraph {
  font-size: 15px;
  text-align: center;
  color: aliceblue;
}

#production-image{
  display: inline-block;
  vertical-align: middle;
  height: 600px;
  width: 800px;
}

body {
  overflow: auto;
  padding-top: 10px;
  margin-top: 0;
  margin-bottom: 0;
  background-color: #1B0C2E;
  width: 100%;
  min-height: 100vh;
}
</style>