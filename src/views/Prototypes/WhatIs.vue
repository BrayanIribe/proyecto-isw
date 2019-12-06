<template>
  <div style='width:100%;'>
    <transition name='fade'>
      <b-list-group class='floating-navbar' v-if='showBookmarks'>
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
        <div class='title' id='what-is'>👨‍💻️ Metodologia de prototipos</div>
        <div class='info'>
          <p
            class='block'
          >El presente blog se refiere al tema “Metodologia de prototipos”, el cual puede ser definido como un modelo de desarrollo de software en el que se construye, prueba y luego se vuelve a trabajar cuando sea necesario hasta que se logre un prototipo aceptable.</p>
          <p class='phase center mb-4' id='caracteristicas'>📜 Características</p>
          <p class='sub-phase mb-4'>✅ Satisfacción de requisitos</p>
          <p
            class='block'
          >El prototipo funcional evolutivo desarrolla un comportamiento que satisface los requisitos y necesidades que se han entendido claramente. Realiza, por tanto, un proceso real de datos, para contrastarlo con el usuario.</p>
          <p class='sub-phase mb-4'>🎯 Modificación sobre la marcha</p>
          <p
            class='block'
          >Se va modificando y desarrollando sobre la marcha, según las apreciaciones del cliente.</p>
          <p class='sub-phase mb-4'>🙋‍♀️ Participación activa del cliente</p>
          <p
            class='block'
          >Para que la construcción de prototipos sea posible se debe contar con la participación activa del cliente.</p>
          <p class='sub-phase mb-4'>🔒 Producto seguro</p>
          <p
            class='block'
          >Genera un producto más seguro, en cuanto a la satisfacción de las necesidades del cliente.</p>
          <p class='phase center mb-4' id='fases'>🔄 Fases</p>
          <b-img class='mb-3' src='assets/fases.png' fluid></b-img>
          <p
            class='block'
          >El modelo de prototipos tiene las siguientes seis fases del ciclo de vida.</p>
          <p class='sub-phase mb-4'>📊 Recopilación y análisis de requisitos</p>
          <p
            class='block'
          >En esta fase, los requisitos del sistema se definen en detalle. Durante el proceso, los usuarios del sistema son entrevistados para saber cuáles son sus expectativas del sistema.</p>
          <p class='sub-phase mb-4'>⚡ Diseño rápido</p>
          <p
            class='block mb-4'
          >En esta etapa, se crea un diseño simple del sistema. Sin embargo, no es un diseño completo. Da una breve idea del sistema al usuario. El diseño rápido ayuda a desarrollar el prototipo.</p>
          <p class='sub-phase mb-4'>🏗️ Construcción</p>
          <p
            class='block mb-4'
          >En esta fase, se diseña un prototipo real basado en la información recopilada del diseño rápido. Es un pequeño modelo de trabajo del sistema requerido.</p>
          <p class='sub-phase mb-4'>😄 Evaluación inicial del usuario</p>
          <p
            class='block mb-4'
          >En esta etapa, el sistema propuesto se presenta al cliente para una evaluación inicial. Ayuda a descubrir la fuerza y la debilidad del modelo de trabajo. Los comentarios y sugerencias se recopilan del cliente y se proporcionan al desarrollador.</p>
          <p class='sub-phase mb-4'>🧰 Refinado de prototipo</p>
          <p
            class='block mb-4'
          >Si el usuario no está satisfecho con el prototipo actual, debe refinar el prototipo de acuerdo con los comentarios y sugerencias del usuario.</p>
          <p class='sub-phase mb-4'>✅ Implementación y mantenimiento</p>
          <p
            class='block mb-4'
          >Una vez que el sistema final se desarrolla en base al prototipo final, se prueba a fondo y se implementa en producción. El sistema se somete a un mantenimiento de rutina para minimizar el tiempo de inactividad y evitar fallas a gran escala.</p>
          <p class='phase mb-4' id='tipos'>🍃 Tipos</p>
          <p class='sub-phase mb-4'>⚡ Prototipos desechables rápidos</p>
          <p
            class='block mb-4'
          >Se desarrolla rápidamente para mostrar cómo se verá visualmente el requisito. Los comentarios del cliente ayudan a impulsar los cambios en el requisito, y el prototipo se crea nuevamente hasta que el requisito se base.</p>
          <p class='sub-phase mb-4'>🧬 Prototipo evolutivo</p>
          <p
            class='block mb-4'
          >Aquí, el prototipo desarrollado se refina gradualmente en función de los comentarios de los clientes hasta que finalmente se acepta. Le ayuda a ahorrar tiempo y esfuerzo. Esto se debe a que desarrollar un prototipo desde cero para cada interacción del proceso a veces puede ser muy frustrante.</p>
          <p class='sub-phase mb-4'>🔄 Prototipos incrementales</p>
          <p
            class='block mb-4'
          >En la creación de prototipos incrementales, el producto final se diezma en diferentes prototipos pequeños y se desarrolla individualmente. Finalmente, los diferentes prototipos se fusionan en un solo producto.</p>
          <p class='sub-phase mb-4'>👨‍💻️ Prototipos extremos</p>
          <p
            class='block mb-4'
          >El método de prototipos extremos se usa principalmente para el desarrollo web. Se compone de tres fases secuenciales.</p>
          <ul style='padding:0;' class='mb-3'>
            <li
              style='text-align:justify;'
            >1. El prototipo básico con toda la página existente está presente en formato HTML.</li>
            <li
              style='text-align:justify;'
            >2. Puede simular el proceso de datos utilizando una capa de servicios prototipo.</li>
            <li
              style='text-align:justify;'
            >3. Los servicios se implementan e integran en el prototipo final.</li>
          </ul>
          <p class='phase mb-4' id='mejores-practicas'>✅ Mejores prácticas</p>
          <p
            class='block mb-4'
          >✅ Debe usar Prototipos cuando los requisitos no estén claros.</p>
          <p
            class='block mb-4'
          >✅ Es importante realizar prototipos planificados y controlados.</p>
          <p
            class='block mb-4'
          >✅ Las reuniones periódicas son vitales para mantener el proyecto a tiempo y evitar retrasos costosos.</p>
          <p
            class='block mb-4'
          >✅ En una etapa muy temprana, debe aprobar un prototipo y solo entonces permitir que el equipo avance al siguiente paso.</p>
          <p
            class='block mb-4'
          >✅ En el método de creación de prototipos de software, nunca debe temer cambiar las decisiones anteriores si es necesario implementar nuevas ideas.</p>
          <p
            class='block mb-4'
          >✅ Debe seleccionar el tamaño de paso apropiado para cada versión.</p>
          <p
            class='phase mb-4'
            id='ventajas-desventajas'
          >❌ Ventajas y desventajas</p>
          <p
            class='block mb-4'
          >✅ Los usuarios participan activamente en el desarrollo.</p>
          <p
            class='block mb-4'
          >✅ Se puede identificar la funcionalidad que falta, lo que ayuda a reducir el riesgo de falla, ya que la creación de prototipos también se considera una actividad de reducción de riesgos.</p>
          <p
            class='block mb-4'
          >✅ Ayuda al miembro del equipo a comunicarse efectivamente.</p>
          <p
            class='block mb-4'
          >✅ La satisfacción del cliente existe porque el cliente puede sentir el producto en una etapa muy temprana.</p>
          <p
            class='block mb-4'
          >✅ Apenas habrá posibilidades de rechazo de software.</p>
          <p class='block mb-4'>❌ La creación de prototipos es un proceso lento.</p>
          <p
            class='block mb-4'
          >❌ El costo de desarrollar un prototipo es un desperdicio total ya que el prototipo finalmente se desecha.</p>
          <p
            class='block mb-4'
          >❌ La creación de prototipos puede alentar solicitudes de cambio excesivas.</p>
          <p
            class='block mb-4'
          >❌ Algunas veces los clientes pueden no estar dispuestos a participar en el ciclo de iteración durante un período de tiempo más largo.</p>
          <p
            class='block mb-4'
          >❌ Puede haber demasiadas variaciones en los requisitos de software cuando cada vez que el cliente evalúa el prototipo.</p>
          <p class='phase mb-4' id='etapas'>👨‍💻 Etapas</p>
          <b-img class='mb-3' src='https://i.imgur.com/Z0SxuLj.png' fluid></b-img>
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