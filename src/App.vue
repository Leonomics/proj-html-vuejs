<template>
  <div id="app">
    <HeaderComponent/>
    <MainComponent/>
    <DownloadBannerComponent/>
    <LatestNewsComponent/>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue';
import DownloadBannerComponent from './components/DownloadBannerComponent.vue';
import LatestNewsComponent from './components/LatestNewsComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    DownloadBannerComponent,
    LatestNewsComponent,
    FooterComponent
}
}
</script>

<style lang="scss">
  @import './styles/general.scss';
</style>
