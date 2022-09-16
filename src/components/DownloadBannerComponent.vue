<template>
    <div class="downloadContainer">
        <div class="textAndButtonContainer">
            <p class="downloadOur">Download Our</p>
            <p class="orderingApp">Ordering App</p>
            <div class="storeButtons">
                <div class="appleStore">
                    <img src="../assets/images/app-store-badge-200x67.png"/>
                </div>
                <div class="playStore">
                    <img src="../assets/images/play-store-badge-200x67.png"/>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "DownloadBannerComponent",
    }
</script>


<style scoped lang="scss">
    .downloadContainer{
        position: relative;
        background-image: url(../assets/images/app-ordering-scaled.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        height: 664px;
    }
    .textAndButtonContainer{
         position: absolute;
         top: 86px;
         left:223px;
    }
    .downloadOur{
        font-size: 2.5rem;
        font-weight: bold;
        color: white;
    }
    .orderingApp{
        font-size: 5rem;
        font-weight: bold;
        color: yellow;
        margin-bottom: 46px;
    }
    .storeButtons{
        display: flex;
        align-items: center;

    }
    .appleStore{
        margin-right: 12px;
    }
</style>
