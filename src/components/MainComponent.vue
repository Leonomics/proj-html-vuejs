<template>
    <main>
        <div class="headerItemsContainer cardWrapper">
            <h1 class="title">
                Our Most Popular Dishes
            </h1>
            <CardComponent/>
            <button class="menuButton">
                START YOUR ORDER
            </button>
        </div>
        <PromoComponent/>
        <MenuCategoriesComponent/>
        <DownloadBannerComponent/>
        <LatestNewsComponent/>
    </main>
</template>

<script>
import CardComponent from './CardComponent.vue';
import PromoComponent from './PromoComponent.vue';
import MenuCategoriesComponent from './MenuCategoriesComponent.vue';
import DownloadBannerComponent from './DownloadBannerComponent.vue';
import LatestNewsComponent from './LatestNewsComponent.vue';

export default {
    name: "MainComponent",
    props: {
        msg: String
    },
    components: {
    CardComponent,
    PromoComponent,
    MenuCategoriesComponent,
    DownloadBannerComponent,
    LatestNewsComponent
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .title{
        margin-top: 45px;
        text-align: center;
        margin-bottom: 50px;
        margin-top: 72px;
    }
    .cardWrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .menuButton{
    width: 129px;
    height: 26px;
    font-size: 0.5rem;
    color: white;
    background-color: red;
    border-radius: 15px;
    margin-top: 34px;
    margin-bottom: 34px;
    }
</style>
