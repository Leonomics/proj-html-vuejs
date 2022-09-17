<template>
    <footer>
        <div class="linksWrapper">
            <div>
                <h3 class="linkSectionTitle">ORDER ONLINE</h3>
                <OrderOnlineComponent :orderLinks="orderLinks"></OrderOnlineComponent>

            </div>
            <div>
                <h3 class="linkSectionTitle">NAVIGATE</h3>
                <NavigateComponent :navigateLinks="navigateLinks"></NavigateComponent>

            </div>
            <div>
                <h3 class="linkSectionTitle">INFORMATION</h3>
                <InformationComponent :informationLinks="informationLinks" ></InformationComponent>
                <div class="storeBadgesWrapper">
                    <div class="appleStoreBadge">
                        <img src="../assets/images/app-store-badge-200x67.png" />
                    </div>
                    <div class="playStoreBadge">
                        <img src="../assets/images/play-store-badge-200x67.png" />
                    </div>
                </div>
            </div>
            <div>
                <h3 class="linkSectionTitle">OPENING HOURS</h3>
                <OpeningHoursComponent :openingHoursLinks="openingHoursLinks" ></OpeningHoursComponent>
            </div>
            <div class="voucher">
                <h3 class="linkSectionTitle">VOUCHER</h3>
                <img class="couponImage" src="../assets/images/footer-coupon-200x200.png" />
                <div class="promoText">
                    <p>Just Use The Code</p>
                    <p class="promoCode">FIRSTORDER</p>
                    <p>At Checkout</p>
                </div>
            </div>
        </div>
        <div class="contactArea">
            <img src="../assets/images/takeout-logo-2x-200x43.png"/>
            <h2>Stay in the loop</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis delectus accusantium laboriosam ratione corporis iste, dolores nihil architecto dolorem!
            </p>
            <input class="emailField" type="email" placeholder="you@email.com">
            <button class="subscribeButton">
                SUBSCRIBE
            </button>
            <div class="socialIcons">
                <font-awesome-icon class="socialIcon" icon="fa-brands fa-facebook-f" />
                <font-awesome-icon class="socialIcon" icon="fa-brands fa-twitter" />
                <font-awesome-icon class="socialIcon" icon="fa-brands fa-instagram" />
                <font-awesome-icon class="socialIcon" icon="fa-brands fa-linkedin" />
                <font-awesome-icon class="socialIcon" icon="fa-solid fa-wifi" />
                <font-awesome-icon class="socialIcon" icon="fa-brands fa-youtube" />
                <font-awesome-icon class="socialIcon" icon="fa-solid fa-envelope" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laboriosam sit fugit nostrum quae tempora, pariatur et repudiandae nam impedit?</p>
        </div>
    </footer>
</template>


<script>
import OrderOnlineComponent from './OrderOnlineComponent.vue';
import NavigateComponent from './NavigateComponent.vue';
import InformationComponent from './InformationComponent.vue';
import OpeningHoursComponent from './OpeningHoursComponent.vue';


export default {
    name: "FooterComponent",
    data() {
        return {
            orderLinks: [
                {
                    name:'appetizers',
                    id:1,
                },
                {
                    name:'burgers',
                    id:2,
                },
                {
                    name:'pizza',
                    id:3,
                },
                {
                    name:'fries',
                    id:4,
                },
                {
                    name:'sides',
                    id:5,
                },
                {
                    name:'desserts',
                    id:6,
                },
                {
                    name:'beverages',
                    id:7,
                },
                {
                    name:'specials',
                    id:8,
                }
            ],
            navigateLinks: [
                {
                    name:'home',
                    id:1,
                },
                {
                    name:'alternate home',
                    id:2,
                },
                {
                    name:'menu',
                    id:3,
                },
                {
                    name:'about',
                    id:4,
                },
                {
                    name:'news',
                    id:5,
                },
                {
                    name:'contact us',
                    id:6,
                },
                {
                    name:'cart',
                    id:7,
                },
            ],
            informationLinks: [
                {
                    name:'my account',
                    id:1,
                },
                {
                    name:'terms of services',
                    id:2,
                },
                {
                    name:'privacy policy',
                    id:3,
                },
            ],
            openingHoursLinks: [
                {
                    day:'mon',
                    hour:'10AM to 11PM',
                    id:1,
                },
                {
                    day:'tue',
                    hour:'10AM to 11PM',
                    id:2,
                },
                {
                    day:'wed',
                    hour:'10AM to 11PM',
                    id:3,
                },
                {
                    day:'thu',
                    hour:'10AM to 11PM',
                    id:4,
                },
                {
                    day:'fri',
                    hour:'10AM to 11PM',
                    id:5,
                },
                {
                    day:'sat',
                    hour:'10AM to 1AM',
                    id:6,
                },
                {
                    day:'sun',
                    hour:'10AM to 10PM',
                    id:7,
                },
            ],
        };
    },
    components: { OrderOnlineComponent, NavigateComponent, InformationComponent, OpeningHoursComponent }
}
</script>


<style scoped lang="scss">
    footer{
        height: 791px;
        background-image: url(../assets/images/footer-background-scaled.jpg);
        background-size: contain;
    }

    /*set color for all the the font in the footer*/
    div{
        color: white;
    }

    /*LINKS*/
    .linksWrapper{
        display: flex;
        justify-content: space-around;
        max-width: 875px;
        margin:0 auto;
    }


    /*CONTACT AREA*/
    .contactArea{
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 34px;
    }
    .linkSectionTitle{
        margin-bottom: 24px;
        margin-top: 92px;
    }
    .storeBadgesWrapper{
        display: flex;
        flex-direction: column;
    }
    .appleStoreBadge, .playStoreBadge{
        border:2px solid lightblue;
        border-radius: 15px;
        width: 92px;
        height: 32px;
    }
    .appleStoreBadge{
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .emailField{
        width: 430px;
        height: 30px;
        border-radius: 15px;
        margin-bottom: 21px;
        margin-top: 21px;
    }
    .subscribeButton{
        width: 430px;
        height: 30px;
        font-size: 0.5rem;
        color: white;
        background-color: red;
        border-radius: 15px;
        margin-bottom: 21px;
    }


    /*SOCIALS*/
    .socialIcons{
        color: white;
        margin-bottom: 28px;
    }
    .socialIcon:not(:last-of-type){
        margin-right: 12px;
    }


    /*VOUCHER*/
    .couponImage{
        width:96px;
        height: 96px;
    }
    .voucher{
        text-align: center;
    }
    .promoCode{
        color: yellow;
    }
</style>