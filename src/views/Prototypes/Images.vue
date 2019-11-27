<template>
  <div>
    <b-container class='main' style='text-align:center;'>
      <h2 class='phase mb-4'>🔁 Fases</h2>
      <hr />
      <div class='row'>
        <div class='col-6 mb-3' v-for='(fase, i) in fases' v-bind:key='"a"+i'>
          <div class='tag-name'>{{ fase.name }}</div>
          <b-img :src='fase.src' fluid-grow></b-img>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Images',
  data() {
    return {
      fases: [],
      disciplinas: []
    }
  },
  methods: {
    add(name, src, type = 0) {
      if (type === 0) this.fases.push({ name, src })
      else this.disciplinas.push({ name, src })
    }
  },
  created() {
    this.add(
      '📊 Recopilación y análisis de requisitos',
      'https://i.imgur.com/V0kFKWE.jpg'
    )
    this.add('⚡ Diseño rápido', 'https://i.imgur.com/nmjuNlx.jpg')
    this.add('🏗️ Construcción', 'https://i.imgur.com/StFX21G.jpg')
    this.add(
      '😄 Evaluación inicial del usuario',
      'https://i.imgur.com/keBy3a5.png'
    )
    this.add('🧰 Refinado de prototipo', 'https://i.imgur.com/Y16RdiY.jpg')
    this.add(
      '✅ Implementación y mantenimiento',
      'https://i.imgur.com/2iTUnsq.png'
    )
  }
}
</script>

<style lang='scss' scoped>
</style>
