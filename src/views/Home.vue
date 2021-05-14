<template>
  <body>
    <div class="block">

      <div class="inside-block">
        <h2 id="content-title">Smart Belt</h2>
        <p id="content-paragraph">Nossa aplicação consiste em fornecer ao usuário um maior controle em sua linha de produção,
          dentre todas as funcionalidades, a principal é nosso controle de qualidade que utiliza visão computacional para
          realizar a separação dos produtos. Todo o sistema é automatizado e conta com uma comunicação de ponta a ponta, ou seja,
          todos os dados apurados pela esteira são processados e posteriormente enviados para sua dashboard!</p>

      </div>

      <img src="../assets/production-line.png" id="production-image">

    </div>
  </body>
</template>

<script>

export default {
  name: 'home'
}
</script>

<style scoped>
.block {
  text-align: left;
  padding-left: 100px;
  padding-top: 50px;
}

.inside-block {
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  width: 600px;
}

#content-title {
  font-size: 50px;
  color: aliceblue;
  margin-bottom: 20px;
}

#content-paragraph {
  text-align: justify;
  color: aliceblue;
}

#production-image{
  display: inline-block;
  vertical-align: right;
  height: 100%;
  width: 700px;
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