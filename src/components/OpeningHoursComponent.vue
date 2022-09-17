<template>
    <ul>
        <li class="linkList" v-for="link in openingHoursLinks" :key="link.id">{{link.day}} - {{link.hour}}</li>
    </ul>
</template>


<script>
export default {
    props:['openingHoursLinks'],
    name: "OpeningHoursComponent",
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