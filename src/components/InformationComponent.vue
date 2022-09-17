<template>
    <ul>
        <li class="linkList" v-for="link in informationLinks" :key="link.id">{{link.name}}</li>
    </ul>
</template>


<script>
export default {
    props:['informationLinks'],
    name: "InformationComponet",
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