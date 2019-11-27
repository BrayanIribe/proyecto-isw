<template>
  <div
    class='x-card'
    @click='$emit("click")'
    :class='{"big": card.big, "success": card.success}'
  >
    <div class='footer' v-if='!card.show'></div>
    <div class='reverse' v-if='card.show'>
      <span class='title'>{{ card.title }}</span>
      <span class='description' v-if='!card.url'>{{ card.description }}</span>
      <img class='image' :src='card.url' v-if='card.url' />
    </div>
  </div>
</template>

<script>
export default {
  props: ['card'],
  name: 'Card'
}
</script>

<style lang="scss" scoped>
.x-card {
  width: 12vh;
  height: 18vh;
  font-size: 45%;
  display: flex;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border: 1px solid;
  border-radius: 5px;
  border-color: rgba(0, 0, 0, 0.5);
  background-color: white;
  padding: 10px;
  cursor: pointer;
  transition: 0.25s;
  &.big,
  &:hover {
    transform: scale(2.5);

    z-index: 3;
  }

  &.success {
    background: linear-gradient(#2ecc71, #27ae60) !important;
    color: white !important;
  }
}

.footer {
  width: 100%;
  height: 100%;
  background-image: url('https://i.imgur.com/nzQQD7h.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.reverse {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  .title {
    font-size: 120%;
    font-weight: bold;
  }

  .description {
    text-align: justify;
  }

  .image {
    width: 100%;
  }
}
</style>