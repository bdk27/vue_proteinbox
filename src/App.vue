<script setup>
  import ProteinNav from './components/ProteinNav.vue'
  import ProteinHome from './components/ProteinHome.vue'
  import ProteinMenu from './components/ProteinMenu.vue'
  import ProteinNews from './components/ProteinNews.vue'
  import ProteinLoc from './components/ProteinLoc.vue'
  import ProteinFooter from './components/ProteinFooter.vue'
</script>

<template>
  <ProteinNav></ProteinNav>
  <ProteinHome></ProteinHome>
  <ProteinMenu></ProteinMenu>
  <ProteinNews></ProteinNews>
  <ProteinLoc></ProteinLoc>
  <ProteinFooter></ProteinFooter>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
  @import 'scss/style.scss';

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans TC', sans-serif;
  }
  html {
    font-size: 62.5%;
  }
  section {
    padding: 5rem 0rem;
  }
</style>
