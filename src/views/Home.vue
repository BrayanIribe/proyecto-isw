<template>
  <div style='width:100%;padding-top:8%;'>
    <div class='main'>
      <div class='body'>
        <div class='title'>👨‍💻️ ISW</div>
        <div class='info mt-3'>
          <p
            class='phase'
          >Bienvenido a nuestro blog! Selecciona una metodología.</p>
        </div>
        <div class='row mt-3' style='width:100%;'>
          <div class='col-sm-4' v-for='(route, i) in routes' :key='"r"+i'>
            <b-button
              @click='$router.push(route.href)'
              :variant='route.variant'
              pill
              block
            >{{route.text}}</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      routes: []
    }
  },
  created() {
    this.routes.push({
      text: 'Prototipos',
      href: '/prototypes',
      variant: 'outline-light'
    })
    this.routes.push({
      text: 'Espiral',
      href: '/spiral',
      variant: 'outline-light'
    })
    this.routes.push({
      text: 'SCRUM',
      href: '/scrum',
      variant: 'outline-light'
    })
  }
}
</script>

<style lang='scss' scoped>
.i-row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: space-between;
}
.what-is {
  font-size: 200%;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: lighter;
}
.body {
  width: 60%;
  color: white;
  font-size: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;
}
.phase,
.sub-phase {
  font-size: 200%;
  text-align: center !important;
  width: 100%;
}

.sub-phase {
  font-size: 190%;
}
.body > .info {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.center {
  width: 100%;
  text-align: center !important;
}

.info > .block {
  width: 100%;
  font-size: 130%;
  text-align: justify;
}

.body {
  background: transparent;
  color: white;
  text-align: center;

  .title {
    user-select: none;
    font-size: 800%;
    font-weight: normal;
  }
}

@media only screen and (max-width: 600px) {
  .main {
    height: auto !important;
    min-height: auto !important;
  }
  .body {
    width: 100% !important;
  }
}

.main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  height: 100%;
  min-height: 100%;
}

.i-bt-picker {
  width: 100%;
  height: 60%;
  display: block;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.picker {
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 3rem !important;
  border-radius: 100% !important;
  width: 300px;
  height: 300px;
  font-weight: lighter !important;
}
</style>
