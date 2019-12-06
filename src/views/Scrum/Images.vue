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
      '🎯 Planificación del sprint',
      'https://st3.depositphotos.com/4111759/18641/v/1600/depositphotos_186414770-stock-illustration-business-characters-scrum-team-work.jpg'
    )
    this.add(
      '👨‍💻 Etapa de desarrollo',
      'https://previews.123rf.com/images/iconicbestiary/iconicbestiary1612/iconicbestiary161200653/67654567-cub%C3%ADculo-de-la-oficina-centros-de-trabajo-con-los-empleados-en-los-mostradores-la-gente-de-negocios-qu.jpg'
    )
    this.add(
      '✅ Revisión del sprint',
      'https://cdn5.vectorstock.com/i/1000x1000/43/09/review-rating-bubble-speeches-on-computer-vector-15874309.jpg'
    )
    this.add(
      '📊 Retroalimentación',
      'https://www.tlgcommerce.es/blog/wp-content/uploads/sites/2/feedback.jpg'
    )
  }
}
</script>

<style lang='scss' scoped>
</style>
