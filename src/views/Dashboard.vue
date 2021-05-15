<template>
  <body>
    <ul class="status-list">
      <h1 class="list-title">Status | Bananas</h1>
      <li class="list-component">
        <h4 class="list-component-title">
          {{ TotalOK + TotalInProgress + TotalNOK }}
        </h4>
        <p>Processadas</p>
      </li>
      <li class="list-component">
        <h4 class="list-component-title" id="total-ok">{{ TotalOK }}</h4>
        <p>Maduras</p>
      </li>
      <li class="list-component">
        <h4 class="list-component-title" id="total-descartados">
          {{ TotalInProgress }}
        </h4>
        <p>Não Maduras</p>
      </li>
      <li class="list-component">
        <h4 class="list-component-title" id="total-inaptas">{{ TotalNOK }}</h4>
        <p>Inaptas para consumo</p>
      </li>
        <h1 class="list-title">Gráfico | Bananas</h1>
        <div class="graphic">
      <apexchart
        width="500"
        type="line"
        :options="options"
        :series="series"
      ></apexchart>
    </div>
    </ul>
  </body>
</template>
<script>
import axios from 'axios'

export default {
  name: 'dashboard',
  data () {
    return {
      TotalOK: 0,
      TotalInProgress: 0,
      TotalNOK: 0,
      options: {
        chart: {
          id: 'vuechart-example'
        },
        stroke: {
          curve: 'smooth'
        },
        legend: {
          show: false
        },

        grid: {
          borderColor: '#111',
          strokeDashArray: 0
        },

        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: 'Maduras',
          data: [2, 3, 4, 6, 9, 6, 8, 1],
          color: '#eca406'
        },
        {
          name: 'Não Maduras',
          data: [1, 2, 5, 2, 4, 5, 7, 9],
          color: 'rgb(102, 163, 22)'
        },
        {
          name: 'Inaptas',
          data: [1, 4, 5, 5, 4, 6, 3, 2],
          color: '#752424'
        }
      ]
    }
  },
  methods: {
    startInterval () {
      setInterval(() => {
        this.getData()
      }, 2000)
    },

    getData () {
      axios
        .get(
          'https://smart-b-api.ue.r.appspot.com/api/v1/product/summary?userID=3d729ae8-ad34-46ab-842b-e01e0785137c'
        )
        .then((response) => {
          let OKElement = response.data.filter(
            (element) => element.condition === 'OK'
          )

          let NOKElement = response.data.filter(
            (element) => element.condition === 'NOT_OK'
          )

          let INProgressElement = response.data.filter(
            (element) => element.condition === 'IN_PROGRESS'
          )

          this.TotalOK = OKElement.length === 1 ? OKElement[0].total : 0

          this.TotalInProgress =
            INProgressElement.length === 1 ? INProgressElement[0].total : 0

          this.TotalNOK = NOKElement.length === 1 ? NOKElement[0].total : 0
        })
    }
  },
  created () {
    this.getData()
  },
  mounted () {
    this.startInterval()
  }
}
</script>

<style scoped>
ul > li {
  display: inline-block;
}
.graphic {
  position: absolute;
  left: 40%;
  background-color: whitesmoke;
}

.list-component-title {
  font-size: 40px;
  margin-bottom: 0;
}

.list-title {
  color: white;
  text-align: left;
  margin-left: 30px;
}

#total-ok {
  color: #eca406;
}

#total-descartados {
  color: rgb(102, 163, 22);
}

#total-inaptas {
  color: #752424;
}

.list-component {
  margin: 10px;
  background-color: white;
  width: 250px;
  height: 200px;
}

body {
  overflow: auto;
  padding-top: 10px;
  margin-top: 0;
  margin-bottom: 0;
  background-color: #1b0c2e;
  width: 100%;
  min-height: 100vh;
}
</style>
