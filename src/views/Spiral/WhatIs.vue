<template>
  <div style='width:100%;'>
    <transition name='fade'>
      <b-list-group class='floating-navbar' v-if='false && showBookmarks'>
        <b-list-group-item href='#what-is'>🤔 ¿Qué es?</b-list-group-item>
        <b-list-group-item href='#caracteristicas'>📜 Características</b-list-group-item>
        <b-list-group-item href='#fases'>🔄 Fases</b-list-group-item>
        <b-list-group-item href='#tipos'>🍃 Tipos</b-list-group-item>
        <b-list-group-item href='#mejores-practicas'>✅ Mejores prácticas</b-list-group-item>
        <b-list-group-item href='#ventajas-desventajas'>❌ Ventajas y desventajas</b-list-group-item>
        <b-list-group-item href='#etapas'>👨‍💻 Etapas</b-list-group-item>
      </b-list-group>
    </transition>
    <div class='main'>
      <div class='body'>
        <div class='title' id='what-is'>👨‍💻️ Metodologia de espiral</div>
        <div class='info'>
          <p
            class='block'
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod, dui quis dictum maximus, erat est congue odio, et dignissim tellus nulla vitae sem. Morbi et ante velit. Integer vestibulum semper nibh. Quisque quis vulputate tellus, quis aliquet tortor. Duis in nisi ultrices, efficitur tortor non, dapibus tellus. Phasellus porta nulla id risus bibendum porttitor. In ut efficitur magna. Etiam vitae tempor purus, ac tincidunt mi.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBookmarks: true
    }
  },
  created() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.showBookmarks = false
    }
  }
}
</script>

<style lang="scss" scoped>
.what-is {
  font-size: 200%;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: lighter;
}
.body {
  width: 40%;
  color: white;
  font-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5vh;
}

.phase {
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  background: #ecf0f1;
  color: black;
  border-radius: 2px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.phase,
.sub-phase {
  font-size: 150%;
  text-align: center;
  width: 100%;
}

.sub-phase {
  font-size: 150%;
  text-align: left;
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
  font-size: 100%;
  text-align: justify;
}

.body {
  background: transparent;
  color: white;
  text-align: center;

  .title {
    user-select: none;
    font-size: 200%;
    font-weight: normal;
    margin-bottom: 1rem;
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