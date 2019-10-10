<template>
 <div class="enyem">
   
    <h1>Ez itt az enyém</h1>

    <b-img v-bind="mainProps" rounded="circle" left src="https://picsum.photos/125/125/?image=58" alt="Left image"></b-img>
    <b-img  right src="https://picsum.photos/125/125/?image=58" alt="Right image"></b-img>
</div>



</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class EnyemView extends Vue {}

</script>

