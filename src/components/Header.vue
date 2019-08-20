<template>
  <div class="header">
    <router-link to="/" class="header_logo">
      <img class="logo" :src="`${this.logo}`">
      <span class="title logo">{{ this.title }}</span>
    </router-link>
    <div :class="`header_menu ${this.showMenu ? 'open' : ''}`">
      <v-menu :menu="this.menu" v-on:handleMenuClick="handleMenuClick"/>
      <button class="btn--icon menu-hamburguer" @click='toggleShowMenu()'></button>
    </div>
  </div>
</template>

<script>
import BaseMenu from '@/components/BaseMenu'
import HeaderContent from '../../public/content/header.json'

export default {
  name: 'Header',
  components: {
    'v-menu': BaseMenu
  },
  data () {
    return {
      showMenu: false,
      menu: [],
      logo: '',
      title: ''
    }
  },
  methods: {
    toggleShowMenu: function () {
      this.showMenu = !this.showMenu
    },
    handleMenuClick: function () {
      if (this.showMenu) this.toggleShowMenu()
    }
  },
  mounted: function () {
    this.menu = HeaderContent.menu
    this.logo = HeaderContent.logo
    this.title = HeaderContent.title
  }
}
</script>

<style scoped>

.header {
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  background: var(--color-navy);
}
.header_logo {
  text-decoration: none;
}
.header_logo .logo {
  width: 100px;
}
.header_logo .logo,
.header_logo .title {
  display: inline-block;
  vertical-align: middle;
}
.header_logo .title {
  margin: 0 0 0 10px;
}
.header_menu {
  display: flex;
}
.header_menu .menu-hamburguer {
  display: none;
}

/* Media Mobile */
@media (max-width: 768px) {
  .header_menu .menu-hamburguer {
    display: block;
    z-index: 3;
    position: absolute;
    top: 14px;
    right: 20px;
    background-image: url('../assets/images/hamburguer.png');
  }
  .header_menu.open .menu {
    right: 0;
  }
  .header_menu.open .menu-hamburguer {
    background-image: url('../assets/images/close.png');
  }
}
</style>
