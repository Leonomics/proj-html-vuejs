<template>
        <div class="cardContainer">
            <div  class="card" v-for="(card, index) in cards" :key="index">
                <img  :src="card.image" />
                <div class="card-body">
                    <h3 class="card-text">{{card.title}}</h3>
                    <p>{{card.price}}</p>
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
                    "image":"../assets/images/skin-on-fries-210x300.jpg",
                    "title":"Skin On Fries",
                    "price":"$3.00-$6.00",
                },
                {
                    "image":"../assets/images/choco-cookie-frappe-210x300.jpg",
                    "title":"Choco Cookie Frappe",
                    "price":"$4.99"
                },
                {
                    "image":"../assets/images/donut-burger-210x300.jpg",
                    "title":"The Donut Burger",
                    "price":"$6.99"
                },
            ]
        }
    }
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
</style>
