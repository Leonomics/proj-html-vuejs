<template>
  <header>
    <div class="headerItemsContainer">
      <nav class="navbarElements navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="../assets/images/takeout-logo.png"  alt="">
      </a>
      <div class="navMenu">
        <div>
          <a href="#">HOME</a>
          <font-awesome-icon icon="fa-solid fa-chevron-down" />
        </div>
        <div>
          <a href="#">Order online</a>
        </div>
        <div>
          <a href="#">About</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Contact us</a>
        </div>
        <div>
          <a href="#">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          </a>
        </div>
      </div>
    </nav>
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
  .navbarElements{
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .navMenu{
    display: flex;
    align-items: center;
    flex-direction: row;
  }
</style>
