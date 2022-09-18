<template>
    <div class="headerItemsContainer sectionWrapper">
        <div class="titleAndButton">
            <h1>Latest News</h1>
            <button class="menuButton">
                READ MORE NEWS <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </button>
        </div>
        <div class="newsCards">
            <div class="card" style="width: 22rem;">
                <img class="card-img-top" src="../assets/images/pancake-burger-400x300.jpg" alt="Card image cap">
                <div class="card-body">
                    <h3>NEW: The Pancake Burger</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card" style="width: 22rem;">
                <img class="card-img-top" src="../assets/images/new-milkshake-menu-400x300.jpg" alt="Card image cap">
                <div class="card-body">
                    <h3>New Milkshake Menu</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "LatestNewsComponent",
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
        margin-bottom: 39px;
    }
    .sectionWrapper{
        margin-top: 100px;
        margin-bottom: 100px;
    }
    .newsCards{
        display: flex;
        justify-content: space-between;
        text-align: center;
    }
    .card:hover{
        cursor: pointer;
        box-shadow: 5px 10px 8px 10px rgba(178,178,178, 0.5);

    }
    .card-body{
        margin-top: 27px;
    }
</style>