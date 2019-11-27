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
      <hr />
      <h2 class='phase mb-4'>🍃 Tipos de prototipos</h2>
      <hr />
      <div class='row'>
        <div
          class='col-6 mb-3'
          v-for='(disciplina, i) in disciplinas'
          v-bind:key='"b"+i'
        >
          <div class='tag-name red'>{{ disciplina.name }}</div>
          <b-img :src='disciplina.src' fluid></b-img>
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
      'https://dummyimage.com/600x400/000/fff'
    )
    this.add('⚡ Diseño rápido', 'https://dummyimage.com/600x400/000/fff')
    this.add('🏗️ Construcción', 'https://dummyimage.com/600x400/000/fff')
    this.add(
      '😄 Evaluación inicial del usuario',
      'https://dummyimage.com/600x400/000/fff'
    )
    this.add(
      '🧰 Refinado de prototipo',
      'https://dummyimage.com/600x400/000/fff'
    )
    this.add(
      '✅ Implementación y mantenimiento',
      'https://dummyimage.com/600x400/000/fff'
    )

    this.add(
      '⚡ Prototipos desechables rápidos',
      'https://dummyimage.com/600x400/000/fff',
      1
    )
    this.add(
      '🧬 Prototipo evolutivo',
      'https://dummyimage.com/600x400/000/fff',
      1
    )
    this.add(
      '🔄 Prototipos incrementales',
      'https://dummyimage.com/600x400/000/fff',
      1
    )
    this.add(
      '👨‍💻️ Prototipos extremos',
      'https://dummyimage.com/600x400/000/fff',
      1
    )
  }
}
</script>

<style lang='scss' scoped>
</style>
