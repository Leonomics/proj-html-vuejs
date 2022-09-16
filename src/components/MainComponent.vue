<template>
    <main>
        <div class="headerItemsContainer cardWrapper">
            <h1 class="title">
                Our Most Popular Dishes
            </h1>
            <CardComponent/>
        </div>
        <PromoComponent/>
        <MenuCategoriesComponent/>
    </main>
</template>

<script>
import CardComponent from './CardComponent.vue';
import PromoComponent from './PromoComponent.vue';
import MenuCategoriesComponent from './MenuCategoriesComponent.vue';

export default {
    name: "MainComponent",
    props: {
        msg: String
    },
    components: {
    CardComponent,
    PromoComponent,
    MenuCategoriesComponent
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .title{
        margin-top: 45px;
        text-align: center;
    }
    .cardWrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
