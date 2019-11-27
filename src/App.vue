<template>
  <div id='app'>
    <transition name='fade' v-if='showNav'>
      <div class='i-navbar'>
        <NavBar :route='$route' :options='showOptions'></NavBar>
      </div>
    </transition>
    <transition name='fade' v-if='showHelp'>
      <a href='#app' @click='showHelp = false' class='to-up-bt'>
        <font-awesome-icon icon='chevron-up'></font-awesome-icon>
      </a>
    </transition>
    <transition name='fade'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      showNav: false,
      showHelp: false
    };
  },
  watch: {
    $route(to) {
      this.matchRoute(to);
    }
  },
  computed: {
    showOptions() {
      let isIndex = this.$route.path.split('/').length !== 2;
      return isIndex;
    }
  },
  methods: {
    matchRoute(route) {
      let name = route.path.split('/');
      this.showNav = name[1].length > 0;
      document.body.setAttribute('class', name[1] ? name[1] : '');
    }
  },
  created() {
    this.matchRoute(this.$route);
    setInterval(() => {
      this.showHelp = document.getElementById('html').scrollTop > 300;
    }, 500);
  }
};
</script>
