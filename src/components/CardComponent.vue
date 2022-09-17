<template>
        <div class="cardContainer">
            <!--<div  class="card cardImageAndBody" v-for="(card, index) in cards" :key="index">
                <img  :src="getImage(obj.img)" />
                <div class="card-body">
                    <h3 class="card-text">{{card.title}}</h3>
                    <p class="price">{{card.price}}</p>
                </div>
            </div>-->
            <div  class="card cardImageAndBody">
                <img  src="../assets/images/skin-on-fries-200x286.jpg" />
                <div class="card-body">
                    <h3 class="card-text">Skin On Fries</h3>
                    <p class="price">$3.00-$6.00</p>
                </div>
            </div>
            <div  class="card cardImageAndBody">
                <img  src="../assets/images/choco-cookie-frappe-200x286.jpg" />
                <div class="card-body">
                    <h3 class="card-text">Choco Cookie Frappe</h3>
                    <p class="price">$4.99</p>
                </div>
            </div>
            <div  class="card cardImageAndBody">
                <img  src="../assets/images/donut-burger-200x286.jpg" />
                <div class="card-body">
                    <h3 class="card-text">The Donut Burger</h3>
                    <p class="price">$6.99</p>
                </div>
            </div>
        </div>
</template>

<script>
  export default {
    data(){
        return{
            cards:[
                {
                    "image":"../assets/images/skin-on-fries-200x286.jpg",
                    "title":"Skin On Fries",
                    "price":"$3.00-$6.00",
                },
                {
                    "image":"../assets/images/skin-on-fries-200x286.jpg",
                    "title":"Choco Cookie Frappe",
                    "price":"$4.99"
                },
                {
                    "image":"../assets/images/skin-on-fries-200x286.jpg",
                    "title":"The Donut Burger",
                    "price":"$6.99"
                },
            ]
        }

    },
    /*methods:{
        getImage(path) {
            return require(path)
    }
    }*/
  }
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    li{
        list-style: none;
    }
    .cardContainer{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .card-body{
        text-align: center;
    }
    .cardImageAndBody:not(:last-of-type){
        margin-right: 18px;
    }
    .price{
        color: red;
    }
    img{
        width:237px;
        height: 335px;
    }
</style>
