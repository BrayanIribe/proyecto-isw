<template>
  <div>
    <div v-if='!onlyOptions'>
      <b-navbar toggleable='xl' type='dark'>
        <b-navbar-toggle target='nav-text-collapse' right></b-navbar-toggle>
        <transition name='fade'>
          <b-navbar-brand
            style='cursor:pointer'
            v-on:click='$router.push("/")'
            v-if='$route.fullPath != "/"'
          >👨‍💻️ ISW</b-navbar-brand>
        </transition>
        <b-collapse v-if='options' id='nav-text-collapse' is-nav>
          <b-navbar-nav class='ml-auto' right>
            <b-nav-item
              v-for='(route,i) in routes'
              v-bind:key='i'
              v-on:click='pickRoute(route)'
              v-bind:class='{"active": $route.fullPath === route.path}'
              right
            >{{ route.name }}</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class='v-wrapper' v-else>
      <div style='width:40%;' v-for='(route, i) in routeHome' :key='"rc"+i'>
        <b-button
          style='margin:1rem;'
          @click='$router.push(route.path)'
          variant='outline-light'
          pill
          block
        >{{route.name}}</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['route', 'options', 'onlyOptions'],
  name: 'NavBar',
  data() {
    return {
      routes: [],
      routeHome: []
    };
  },
  methods: {
    pickRoute(route) {
      this.$router.push(route.path);
    }
  },
  created() {
    let toRoute = this.$route.path.split('/')[1];
    this.routes = this.$routes.filter(obj => {
      let route = obj.path.split('/');
      let name = route[1];
      if (name && name === toRoute && route.length !== 2) {
        this.routeHome.push(obj);
      }
      return name && name === toRoute ? obj : false;
    });
  }
};
</script>

<style lang="scss" scoped>
.v-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.active {
  background-color: white;
  color: black !important;
}

.active a {
  color: black !important;
}
</style>
