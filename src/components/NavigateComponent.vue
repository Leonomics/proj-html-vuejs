<template>
    <ul>
        <li class="linkList" v-for="link in navigateLinks" :key="link.id">{{link.name}}</li>
    </ul>
</template>


<script>
export default {
    props:['navigateLinks'],
    name: "NavigateComponent",
}
</script>


<style scoped lang="scss">
    .linkList{
        color:white;
    }
    .linkList:hover{
        cursor: pointer;
        color: yellow;
    }
    .linkList:not(:last-of-type){
        margin-bottom: 16px;
    }
</style>