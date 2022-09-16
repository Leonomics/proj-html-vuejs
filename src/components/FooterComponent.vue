<template>
    <footer>
        <div class="linksWrapper">
            <div>
                <h3>ORDER ONLINE</h3>
                <ul>

                </ul>
            </div>
            <div>
                <h3>NAVIGATE</h3>
                <ul>

                </ul>
            </div>
            <div>
                <h3>INFORMATION</h3>
                <ul>

                </ul>
            </div>
            <div>
                <h3>OPENING HOURS</h3>
                <ul>

                </ul>
            </div>
            <div>
                <h3>VOUCHER</h3>
                <ul>

                </ul>
            </div>
        </div>
    </footer>
</template>


<script>
export default {
    name: "FooterComponent",
}
</script>


<style scoped lang="scss">
    footer{
        height: 791px;
        background-image: url(../assets/images/footer-background-scaled.jpg);
        background-size: contain;
    }
    div{
        color: white;
    }
    .linksWrapper{
        display: flex;
        align-items: center;
        justify-content: space-around;
        max-width: 875px;
        margin:0 auto;
    }

</style>