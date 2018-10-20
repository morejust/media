<template>
  <v-app light>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/read">Read</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </v-app>
</template>
