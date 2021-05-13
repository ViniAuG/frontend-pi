<template>
  <body>
    <div class="block" v-responsive="{ small: block => block.width <= 500 }">

      <div class="inside-block">
        <h2 id="content-title">Smart Belt</h2>
        <p id="content-paragraph">Nossa aplicação consiste em fornecer ao usuário um maior controle em sua linha de produção,
          dentre todas as funcionalidades, a principal é nosso controle de qualidade que utiliza visão computacional para
          realizar a separação dos produtos. Todo o sistema é automatizado e conta com uma comunicação de ponta a ponta, ou seja,
          todos os dados apurados pela esteira são processados e posteriormente enviados para sua dashboard!</p>
      </div>

      <img src="../assets/production-line.png" id="production-image" class="production-image"  v-responsive="{ small: el => el.width <= 500 }">

    </div>
  </body>
</template>

<script>

import { ResponsiveDirective } from 'vue-responsive-components'

export default {
  name: 'home',
  directives: {
    responsive: ResponsiveDirective
  }
}
</script>

<style scoped>
.block {
  align-content: center;
  text-align: center;
  padding-left: 100px;
  padding-top: 50px;
}

.inside-block {
  display: inline-block;
  vertical-align: middle;
  height: 500px;
  width: 300px;
}

#content-title {
  text-align: left;
  font-size: 30px;
  color: aliceblue;
  margin-bottom: 20px;
}

#content-paragraph {
  font-size: 15px;
  text-align: justify;
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

@media screen and (max-width: 1230px) {
  .block {
    text-align: center;
    padding-left: 20px;
    padding-top: 50px;
  }

  .inside-block {
    display: inline-block;
    vertical-align: middle;
    height: 500px;
    width: 300px;
  }

  #content-title {
    text-align: left;
    font-size: 25px;
    color: aliceblue;
    margin-bottom: 20px;
  }

  #content-paragraph {
    font-size: 12px;
    text-align: justify;
    color: aliceblue;
  }

  #production-image{
    display: inline-block;
    vertical-align: top;
    height: 300px;
    width: 300px;
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
}

@media screen and (max-width: 400px) {
  .block {
    text-align: right;
    padding-left: 20px;
    padding-top: 50px;
    padding-right: 0;
    margin-right: 0;
  }

  .inside-block {
    display: inline-block;
    vertical-align: top;
    padding-right: 0;
    margin-right: 0;
  }

  #content-title {
    text-align: left;
    font-size: 25px;
    color: aliceblue;
    margin-bottom: 20px;
  }

  #content-paragraph {
    font-size: 12px;
    text-align: justify;
    color: aliceblue;
    margin-right: 20px;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  #production-image{
    vertical-align: top;
    height: 200px;
    width: 300px;
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
}

</style>