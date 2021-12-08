<template>
  <div class="main-sidebar">
    <aside id="sidebar-wrapper">
      <div class="sidebar-brand">
        <a href="index.html">Stisla</a>
      </div>
      <div class="sidebar-brand sidebar-brand-sm">
        <a href="index.html">St</a>
      </div>
      <ul class="sidebar-menu">
        <li class="menu-header">Menu</li>
        <li class="nav-item" v-for="(item, i) in sidebar" :key="i">
          <nuxt-link :to="item.to" class="nav-link"
            ><i :class="item.icon"></i><span>{{ item.name }}</span></nuxt-link
          >
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebar: [
        {
          name: 'Dashboard',
          icon: 'fas fa-fire',
          to: '/',
        },
        {
          name: 'Skill Test',
          icon: 'fas fa-chart-line',
          to: '/skill-test',
        },
      ],
    }
  },
}
</script>

<style></style>
