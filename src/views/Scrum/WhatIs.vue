<template>
  <div style='width:100%;'>
    <transition name='fade'>
      <b-list-group class='floating-navbar' v-if='showBookmarks'>
        <b-list-group-item href='#what-is'>🤔 ¿Qué es?</b-list-group-item>
        <b-list-group-item href='#caracteristicas'>📜 Características</b-list-group-item>
        <b-list-group-item href='#fases'>🔄 Fases</b-list-group-item>
        <b-list-group-item href='#roles'>👨‍💻 Roles</b-list-group-item>
        <b-list-group-item href='#ventajas-desventajas'>❌ Ventajas y desventajas</b-list-group-item>
      </b-list-group>
    </transition>
    <div class='main'>
      <div class='body'>
        <div class='title' id='what-is'>👨‍💻️ Metodologia de SCRUM</div>
        <div class='info'>
          <p class='block'>
            La palabra ‘Scrum’ no son siglas, sino que significa melé, un tipo de jugada del rugby. La complejidad de una melé hace que, si un miembro del equipo se viene abajo, se cae toda la melé. En consecuencia, los jugadores deben estar bien coordinados.
            Se considera un marco de trabajo para un ágil desarrollo de software. Este proceso se aplica de manera regular a base de prácticas para llevar a cabo el trabajo en equipo y que de esta manera se obtenga el mejor resultado posible de proyectos.
          </p>
          <p class='phase mb-4' id='caracteristicas'>📜 Características</p>
          <p class='block'>✅ Desarrollo incremental de los requisitos.</p>
          <p
            class='block'
          >✅ Se le da prioridad al cliente con lo de mayor valor.</p>
          <p class='block'>✅ Equipo sincronizado directamente y adaptado.</p>
          <p
            class='block'
          >✅ El cliente puede tomar decisiones después del resultado de cada iteración.</p>
          <p
            class='block'
          >✅ Todo se realiza en equipos pequeños, no más de 9 personas.</p>
          <p class='phase mb-4' id='fases'>🔄 Fases</p>
          <b-img class='mb-3' src='https://i.imgur.com/XVn8dWo.png' fluid></b-img>
          <p class='sub-phase'>🎯 Planificación del sprint</p>
          <p
            class='block'
          >Se deben definir todos los aspectos que tengan relación con el proyecto, como la funcionalidad, los objetivos, los riesgos del sprint (mini proyecto dentro del proyecto principal), los plazos de entrega, entre otros.</p>
          <p class='sub-phase'>👨‍💻 Etapa de desarrollo</p>
          <p
            class='block'
          >Una vez que el sprint está llevándose a cabo, los encargados del proyecto deben garantizar que no se presenten alteraciones de este en el último momento los cuales puedan afectar los objetivos planeados.</p>
          <p class='sub-phase'>✅ Revisión del sprint</p>
          <p
            class='block'
          >Cuando finaliza el desarrollo de cada intervalo, debe analizarse y llevar a cabo la evaluación de los resultados. Todo el equipo debe colaborar para saber qué aspectos deberán ser modificados.</p>
          <p class='sub-phase'>📊 Retroalimentación</p>
          <p
            class='block'
          >Los resultados que se entreguen tiene la posibilidad para recibir una retroalimentación no solo por parte de los encargados dentro del proyecto, sino también de todas aquellas personas que estarán involucradas en él y que utilizarán de manera directa lo que se desea lograr.</p>
          <p class='phase mb-4' id='roles'>👨‍💻 Roles</p>
          <p
            class='block'
          >En Scrum, el equipo se focaliza en construir software de calidad. La gestión de un proyecto Scrum se centra en definir cuáles son las características que debe tener el producto a construir (qué construir, qué no y en qué orden) y en vencer cualquier obstáculo que pudiera entorpecer la tarea del equipo de desarrollo.</p>
          <p class='sub-phase'>🙋‍♀️ Scrum master</p>
          <p
            class='block'
          >Persona que lidera al equipo guiándolo para que cumpla las reglas y procesos de la metodología. Gestiona la reducción de impedimentos del proyecto y trabaja con el Product Owner para maximizar el ROI.</p>
          <p class='sub-phase'>👨‍💼️ Product Owner</p>
          <p
            class='block'
          >Representante de los accionistas y clientes que usan el software. Se focaliza en la parte de negocio y él es responsable del ROI del proyecto (entregar un valor superior al dinero invertido). Traslada la visión del proyecto al equipo, formaliza las prestaciones en historias a incorporar en el Product Backlog y las reprioriza de forma regular.</p>
          <p class='sub-phase'>👨‍💻️ Team</p>
          <p
            class='block'
          >Grupo de profesionales con los conocimientos técnicos necesarios y que desarrollan el proyecto de manera conjunta llevando a cabo las historias a las que se comprometen al inicio de cada sprint.</p>
          <p
            class='phase mb-4'
            id='ventajas-desventajas'
          >❌ Ventajas y desventajas</p>
          <p
            class='block'
          >✅ Entregables en tiempo y forma, puedes ir enviando entregables al cliente mientras vas atacando los objetivos más sencillos, eso te hace ganar tiempo para atacar los objetivos más complejos.</p>
          <p
            class='block'
          >✅ El ScrumMaster tiene el conocimiento necesario para lograr el objetivo primario y secundario por lo cual puede ir controlando el proyecto y delegando roles.</p>
          <p
            class='block'
          >✅ Cada persona sabe que es lo que tiene que hacer y no es necesario estar reorganizando una y otra vez los Tracks de cada persona.</p>
          <p
            class='block'
          >✅ Se involucra desde un principio y se da un rol a todos los stakeholders (personas que van a participar en el proyecto incluyendo cliente final, QA, Testers, etc.)</p>
          <p
            class='block'
          >❌ Algunos miembros de tu equipo pueden saltar pasos importantes en el camino rápido para llegar al “sprint” final.</p>
          <p
            class='block'
          >❌ El cliente siempre va a esperar los informes con la fecha exacta, y muchas veces los va a pedir antes, cuando capaz no pudiste avanzar en nada.</p>
          <p
            class='block'
          >❌ Demasiadas Reuniones para poco avance, a veces es muy cansado y estresante reunirse demasiadas veces por el mismo tema, algunos van perdiendo el interés en el proyecto.</p>
          <p
            class='block'
          >❌ Si una persona renuncia o hay algún cambio es complicado remplazar ese rol ya que es la persona que se lleva el conocimiento específico y afecta a todo el proyecto.</p>
          <p
            class='block'
          >❌ No es aplicable a grandes escalas o cuando el sector IT es variado.</p>
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