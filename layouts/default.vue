<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>

    <v-bottom-navigation app>
      <!-- ボトムナビゲーション -->
      <v-btn v-for="menu in menus" :key="menu.title" :to="menu.url">
        <span>{{ menu.title }}</span>
        <v-icon>{{ menu.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    menus: [
      { title: '説明', icon: 'mdi-web', url: '/' },
      { title: '作る！', icon: 'mdi-home', url: '/maker' },
      { title: 'みんなの', icon: 'mdi-heart', url: '/timeline' },
      { title: 'これについて', icon: 'mdi-information-variant', url: '/about' }
    ]
  })
}
</script>