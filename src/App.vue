<template>
  <div id="home">
    <p>
      <router-link to="/">Here</router-link>
      <router-link to="/foo">Foo</router-link>
      <router-link to="/bar">Bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    // empty
  }
</script>

