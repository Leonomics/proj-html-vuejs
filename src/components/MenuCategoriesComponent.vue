<template>
    <div class="headerItemsContainer menuCategoriesContainer">
        <div class="titleAndButton">
            <h1>Menu Categories</h1>
            <button class="menuButton">
                VIEW THE FULL MENU <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </button>
        </div>
        <div class="grid-container">
            <div v-for="(category, index) in categories" :key="index" class="grid-item">
                <img class="comicCover" :src="category.image" />
                {{category.title.toUpperCase()}}
            </div>
        </div>
        <div class="restrictions grid-container">
            <div class="grid-item">
                Vegetarian
            </div>
            <div class="grid-item">
                Gluten Free
            </div>
            <div class="grid-item">
                Dairy Free
            </div>
            <div class="grid-item">
                Keto Friendly
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuCategoriesComponent",
    props: {
        msg: String
    },
    data(){
        return{
            categories:[
                {
                    "image":"../assets/images/appetizers-menu-background.jpg",
                    "title":"appetizers",
                    //"price":"$3.00-$6.00",
                },
                {
                    "image":"../assets/images/burgers-menu-background.jpg",
                    "title":"burgers",
                    //"price":"$4.99"
                },
                {
                    "image":"../assets/images/pizza-menu-background.jpg",
                    "title":"pizza",
                    //"price":"$6.99"
                },
                {
                    "image":"../assets/images/fries-menu-background.jpg",
                    "title":"fries",
                    //"price":"$6.99"
                },
                {
                    "image":"../assets/images/sides-menu-background.jpg",
                    "title":"sides",
                    //"price":"$6.99"
                },
                {
                    "image":"../assets/images/desserts-menu-background.jpg",
                    "title":"desserts",
                    //"price":"$6.99"
                },
                {
                    "image":"../assets/images/beverages-menu-background.jpg",
                    "title":"beverages",
                    //"price":"$6.99"
                },
                {
                    "image":"../assets/images/specials-menu-background.jpg",
                    "title":"specials",
                    //"price":"$6.99"
                },
            ]
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .menuButton{
    width: 129px;
    height: 26px;
    font-size: 0.5rem;
    color: white;
    background-color: red;
    border-radius: 15px;
  }
  .titleAndButton{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 42px;
  }
  .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto;
        padding: 10px;
        column-gap: 26px;
    }
    .grid-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1rem;
        width:172px;
        height: 124px;
    }
    .menuCategoriesContainer{
        margin-top: 92px;
        margin-bottom: 92px;
    }
</style>