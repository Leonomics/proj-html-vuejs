<template>
  <header class="headerComponent">
    <div class="plusIcon">
      +
    </div>
    <div class="catchPhraseContainer">
      <div class="hungry">
        hungry?
      </div>
      <div class="greatFood">
        Great Food
      </div>
      <div class="delivered">
        Delivered
      </div>
      <button class="menuButton">
        VIEW OUR MENU <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </button>
    </div>
    <div class="leftTags">
      <div class="demosTag">
        <div>
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </div>
        <div>
          Demos
        </div>
      </div>
      <div class="saleTag">
        <div class="price">
          <sup>$</sup>39
        </div>
        <div>
          On Sale
        </div>
      </div>
    </div>
    <div class="headerItemsContainer">
      <nav class="navbarElements navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="../assets/images/takeout-logo-2x-200x43.png" alt="">
      </a>
      <div class="navMenu">
        <div class="navText">
          <a href="#">HOME</a>
          <font-awesome-icon icon="fa-solid fa-chevron-down" />
        </div>
        <div class="navText">
          <a href="#">Order online</a>
        </div>
        <div class="navText">
          <a href="#">About</a>
        </div>
        <div class="navText">
          <a href="#">News</a>
        </div>
        <div class="navText">
          <a href="#">Contact us</a>
        </div>
        <div class="shoppingCart">
          <a href="#">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          </a>
        </div>
      </div>
    </nav>
    </div>
    <div class="delivery">
      <div>
        <font-awesome-icon icon="fa-solid fa-clock" />
        <div>
          24/7 DELIVERY
        </div>
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-burger" />
        <div>
          OVER 100 DISHES
        </div>
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-mobile-screen" />
        <div>
          IN APP ORDERING
        </div>
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-car" />
        <div>
          CAR DELIVERY
        </div>
      </div>
    </div>
  </header>

</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .headerComponent{
    position: relative;
    background-image: url(../assets/images/demo-takeout.jpg);
    background-attachment: fixed;
    height: 664px;
  }
  .plusIcon{
    position: absolute;
    text-align: center;
    right:11px;
    top: 11px;
    border-radius: 50%;
    background-color: red;
    color: white;
    height: 32px;
    width: 32px;
  }


  .catchPhraseContainer{
    position:absolute;
    left:222px;
    top:235px;
    color: white;
  }
  .hungry{
    font-size: 2rem;
  }
  .greatFood{
    font-size: 4rem;
    color: yellow;
  }
  .delivered{
    font-size: 4rem;
  }
  .menuButton{
    width: 129px;
    height: 26px;
    font-size: 0.5rem;
    color: white;
    background-color: red;
    border-radius: 15px;
  }

  .navbarElements{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 42px;
  }
  .navMenu{
    display: flex;
    flex-direction: row;
  }
  .navText{
    margin-right: 27px;
    color:white;
  }
  .shoppingCart{
    color: white;
  }
  .navText:hover{
    color: yellow;
  }
  .shoppingCart:hover{
    color: yellow;
  }
  .leftTags{
    color: white;
    position: absolute;
    top: 92px;
    right: 9px;
    text-align: center;
  }

.demosTag, .saleTag{
  background-color: white;
  color:black;
  border-radius: 5px;
  padding: 9px;
  aspect-ratio: 1;
  align-items: center;
}
.price{
  color:green;
  font-size: 2rem;

}

.delivery{
  --height: 100px;
  color: black;
  background-color: white;
  height: 76px;
  display: flex;
  flex-direction: row;
  position: absolute;
  text-align: center;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
}


</style>
