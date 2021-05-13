<template>
  <body>
    <div class="block">

      <div class="inside-block">
        <h2 id="content-title">Nosso time</h2>
        <p id="content-paragraph">Gustavo Begod, Lucas Marcelino, Guilherme Kratos, Vinicius Lima e Vinicius Augusto.</p>
        <img src="../assets/team.png" id="production-image" class="production-image">
      </div>
    </div>
  </body>
</template>

<script>

export default {
  name: 'contact'
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