<template>
  <div>
    <b-container class='main' style='text-align:center;'>
      <div class='mb-3' v-for='(video, i) in videos' v-bind:key='i'>
        <div class='tag-name'>{{ video.name }}</div>
        <div class='embed-responsive embed-responsive-16by9'>
          <iframe
            class='embed-responsive-item'
            :src='video.src'
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Videos',
  data() {
    return {
      videos: []
    }
  },
  methods: {
    add(name, src) {
      this.videos.push({ name, src })
    }
  },
  created() {
    this.add('Scrum en 6 minutos', 'https://www.youtube.com/embed/HhC75IonpOU')
  }
}
</script>

<style scoped>
</style>
