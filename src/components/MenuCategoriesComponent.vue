<template>
    <div class="headerItemsContainer menuCategoriesContainer">
        <div class="titleAndButton">
            <h1>Menu Categories</h1>
            <button class="menuButton">
                VIEW THE FULL MENU <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </button>
        </div>
        <!--<div class="grid-container">
            <div v-for="(category, index) in categories" :key="index" class="grid-item">
                <img class="comicCover" :src="category.image" />
                {{category.title.toUpperCase()}}
            </div>-->
        <div class="grid-container">
            <div class="grid-item appetizers">
                <div class="textWrapper">
                    APPETIZERS
                </div>
            </div>
            <div class="grid-item burgers">
                <div class="textWrapper">
                    BURGERS
                </div>
            </div>
            <div class="grid-item pizzas">
                <div class="textWrapper">
                    PIZZAS
                </div>
            </div>
            <div class="grid-item fries">
                <div class="textWrapper">
                    FRIES
                </div>
            </div>
            <div class="grid-item sides">
                <div class="textWrapper">
                    SIDES
                </div>
            </div>
            <div class="grid-item desserts">
                <div class="textWrapper">
                    DESSERTS
                </div>
            </div>
            <div class="grid-item beverages">
                <div class="textWrapper">
                    BEVERAGES
                </div>
            </div>
            <div class="grid-item specials">
                <div class="textWrapper">
                    SPECIALS
                </div>
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
        position: relative;
        flex-direction: column;
        align-items: center;
        font-size: 1rem;
        width:172px;
        height: 124px;
        margin-bottom: 10px;
}
.menuCategoriesContainer{
        margin-top: 92px;
        margin-bottom: 92px;
}
.textWrapper{
    position: absolute;
    top: 50%;
    color: white;
}



.appetizers{
    width:172px;
    height: 125px;
    background-image: url(../assets/images/appetizers-menu-background.jpg);
    background-size: cover;
    background-repeat: no-repeat;

}
.burgers{
    width:172px;
    height: 125px;
    background-image: url(../assets/images/burgers-menu-background.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
.pizzas{
    width:172px;
    height: 125px;
    background-image: url(../assets/images/pizza-menu-background.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
.fries{
    width:172px;
    height: 125px;
    background-image: url(../assets/images/fries-menu-background.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
.sides{
    width:172px;
    height: 125px;
    background-image: url(../assets/images/sides-menu-background.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
.desserts{
    width:172px;
    height: 125px;
    background-image: url(../assets/images/desserts-menu-background.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
.beverages{
    width:172px;
    height: 125px;
    background-image: url(../assets/images/beverages-menu-background.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
.specials{
    width:172px;
    height: 125px;
    background-image: url(../assets/images/sides-menu-background.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}


</style>