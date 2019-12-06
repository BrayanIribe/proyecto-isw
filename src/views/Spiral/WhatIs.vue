<template>
  <div style='width:100%;'>
    <transition name='fade'>
      <b-list-group class='floating-navbar' v-if='false && showBookmarks'>
        <b-list-group-item href='#what-is'>🤔 ¿Qué es?</b-list-group-item>
        <b-list-group-item href='#caracteristicas'>📜 Características</b-list-group-item>
        <b-list-group-item href='#fases'>🔄 Fases</b-list-group-item>
        <b-list-group-item href='#meta'>🍃 Meta</b-list-group-item>
        <b-list-group-item href='#ventajas-desventajas'>❌ Ventajas y desventajas</b-list-group-item>
      </b-list-group>
    </transition>
    <div class='main'>
      <div class='body'>
        <div class='title' id='what-is'>👨‍💻️ Metodologia de espiral</div>
        <div class='info'>
          <p
            class='block'
          >Es un modelo de ciclo de vida del software definido por primera vez por Barry Boehm en 1986. Las actividades de este modelo se conforman en una espiral, en la que cada bucle o iteración representa un conjunto de actividades. Las actividades no están fijadas a ninguna prioridad, sino que las siguientes se eligen en función del análisis de riesgo, comenzando por el bucle interior.</p>
          <p class='phase' id='carecteristicas'>📜 Características</p>
          <p
            class='block'
          >✅ Las actividades de este modelo se conforman en una espiral, en la que cada bucle o iteración representa un conjunto de actividades.</p>
          <p
            class='block'
          >✅ Las actividades no están fijadas a ninguna prioridad, sino que las siguientes se eligen en función del análisis de riesgo, comenzando por el bucle interior.</p>
          <p
            class='block'
          >✅ Un inconveniente es el planificar un proyecto con esta metodología ya que es a menudo imposible, debido a la incertidumbre en el número de iteraciones que serán necesarias.</p>
          <p class='phase' id='fases'>🔄 Fases</p>
          <p class='sub-phase'>🎯 Planificación</p>
          <p
            class='block'
          >Se determinan los objetivos y el alcance del ciclo que comienza, tras un necesario ejercicio de investigación. Con cada iteración, se irá incrementando el tamaño de software entregado y la funcionalidad cubierta.</p>
          <p class='sub-phase'>📊 Análisis de riesgo</p>
          <p
            class='block'
          >Se evalúa todo aquello que pueda afectar al proyecto según el estado en que se encuentre y su grado de avance. Para ello, se diseñarán los prototipos que deberán ser validados en el ciclo.</p>
          <p class='sub-phase'>👨‍💻️ Desarrollo y pruebas</p>
          <p
            class='block'
          >Se desarrolla y valida el software según el alcance acordado, el cual está íntimamente relacionado y condicionado con el análisis de riesgos anterior.</p>
          <p class='sub-phase'>✅ Evaluación</p>
          <p
            class='block'
          >Antes de proceder a realizar otra vuelta en la espiral, se debe prestar atención a lo que sucedió en la vuelta anterior. Se debe analizar en detalle si los riesgos detectados anteriormente ya tuvieron solución. Básicamente, esta fase servirá para determinar el avance del proyecto y dar pistas de hacia dónde debe enfocarse la próxima iteración.</p>
          <p class='phase' id='meta'>🍃 Meta</p>
          <p
            class='block'
          >Ciclo de Vida en Espiral tiene en cuenta fuertemente el riesgo que aparece a la hora de desarrollar software. Para ello, se comienza mirando las posibles alternativas de desarrollo, se opta por la de riesgo más asumible y se hace un ciclo de la espiral. Si el cliente quiere seguir haciendo mejoras en el software, se vuelve a evaluar las distintas nuevas alternativas y riesgos y se realiza otra vuelta de la espiral, así hasta que llegue un momento en el que el producto software desarrollado sea aceptado y no necesite seguir mejorándose con otro nuevo ciclo.</p>
          <p class='phase' id='ventajas-desventajas'>❌ Ventajas y desventajas</p>
          <p
            class='block'
          >✅ El análisis del riesgo se hace de forma explícita y clara.</p>
          <p class='block'>✅ Une los mejores elementos de los restantes modelos.</p>
          <p class='block'>✅ Reduce riesgos del proyecto.</p>
          <p class='block'>✅ Incorpora objetivos de calidad.</p>
          <p class='block'>❌ Genera mucho tiempo en el desarrollo del sistema.</p>
          <p class='block'>❌ Modelo costoso.</p>
          <p
            class='block'
          >❌ Requiere experiencia en la identificación de riesgos.</p>
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