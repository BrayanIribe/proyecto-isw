<template>
  <div>
    <b-container class='main' style='text-align:center;'>
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
    this.add('👨‍💻️ Metodología de espiral', 'https://i.imgur.com/2HD7Jbf.jpg')
    this.add('🍃 Meta', 'https://i.imgur.com/HAH6uqt.jpg')
    this.add(
      '🤔 ¿Cuando usar esta metodología?',
      'https://i.imgur.com/6sJJmaB.jpg'
    )
    this.add(
      '🤔 ¿Dónde utilizar esta metodología?',
      'https://i.imgur.com/VrdWRzK.jpg'
    )
    this.add('🤔 ¿A quién va dirigido?', 'https://i.imgur.com/eEoPFp3.jpg')
    this.add('❌ Ventajas y desventajas', 'https://i.imgur.com/nl1l1Vl.jpg')
  }
}
</script>

<style lang='scss' scoped>
</style>
