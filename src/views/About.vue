<template>
  <div style='width:100%;padding-top:8%;'>
    <div class='main'>
      <div class='body'>
        <div class='title'>👪 Acerca de</div>
        <div class='info'>
          <p class='block mt-3'>
            Este blog fue creado a partir de una asignación de la materia Ingeniería en Software en el ITSON durante el segundo
            parcial en el semestre 2019-B.
          </p>
          <p class='block mt-3'>👨‍🏫️ Docente: Verónica Sierra García.</p>
        </div>
        <Biography
          src='https://avatars0.githubusercontent.com/u/520683?s=460&v=4'
          href='https://github.com/BrayanIribe'
          bgcolor='white'
          color='black'
          class='mb-3'
        >
          <p>👨‍💻️ Desarrollador y 📊 Analista.</p>
          <p>Brayan Alexis Iribe Ruiz.</p>
        </Biography>
        <Biography
          src='assets/mavely.jpg'
          bgcolor='white'
          color='black'
          class='mb-3'
        >
          <p>📊 Analista.</p>
          <p>Alexa Mavely Sanchez Bojorquez.</p>
        </Biography>
        <Biography
          src='assets/paul.jpg'
          bgcolor='white'
          color='black'
          class='mb-3'
        >
          <p>📝 Documentación.</p>
          <p>Paul Alejandro Becerra Candia.</p>
        </Biography>
        <Biography
          src='assets/chafino.jpg'
          bgcolor='white'
          color='black'
          class='mb-3'
        >
          <p>🎨 Diseñador.</p>
          <p>Héctor Daniel Chafino Orduño.</p>
        </Biography>
        <Biography
          src='assets/soqui.jpeg'
          bgcolor='white'
          color='black'
          class='mb-3'
        >
          <p>📝 Documentación.</p>
          <p>Rafael García Soqui.</p>
        </Biography>
        <h3
          style='font-weight:lighter'
          class='mt-4 mb-5'
        >👨‍💻️ Tecnologías utilizadas</h3>
        <Biography
          src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
          href='https://github.com'
          bgcolor='white'
          color='black'
          class='mb-3'
        >
          <p>✅ Github Pages.</p>
          <p>Gracias a Github Pages este proyecto fue posible. Nos ofreció hospedaje gratuito 🚀 deployments rápidos.</p>
        </Biography>
        <Biography
          src='https://cdn.changelog.com/uploads/icons/topics/nnG/icon_large.png?v=63694227909'
          href='https://vuejs.org'
          bgcolor='white'
          color='black'
          class='mb-3'
        >
          <p>✅ Vue.js.</p>
          <p>Gracias al framework Vue.js, este proyecto es una realidad. Aceleró de una manera radical el desarrollo y se mantiene el código organizado gracias a sus estándares.</p>
        </Biography>
        <Biography
          src='https://bootstrap-vue.js.org/_nuxt/icons/icon_512.67aef2.png'
          href='https://bootstrap-vue.js.org/'
          bgcolor='white'
          color='black'
          class='mb-3'
        >
          <p>✅ BootrstrapVue.</p>
          <p>Gracias al framework BootstrapVue se pudo ahorrar mucho tiempo en el diseño del sitio web.</p>
        </Biography>
        <Biography
          src='http://ww.monterrey2016.com/sites/default/files/sites/default/files/images/equipos/logos/logo_potros_itson_1.png'
          href='https://itson.mx'
          bgcolor='white'
          color='black'
          class='mb-3'
        >
          <p>✅ Orgullosamente Potros ITSON.</p>
          <p>Somos alumnos del ITSON, cursando el primer semestre (2019) de la licenciatura Ingeniería en Software.</p>
        </Biography>
        <h3 class='mb-5'>
          <a
            href='https://github.com/BrayanIribe/blog-isw-itson'
            class='text-white'
          >👀 ¿Interesado en ver el código del proyecto? Da clic aquí! ✅</a>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
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
    font-size: 700%;
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