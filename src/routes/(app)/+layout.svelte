<div class="grid-container">
    <NavigationRail />
    <div class="grid-content">
        <slot></slot>
    </div>
</div>


<script lang="ts">
import NavigationRail from "src/lib/components/NavigationRail.svelte";
</script>

<style>
.grid-container{
    display: grid;
    grid-template: "navrail content" 1fr / min-content 1fr;
    height: 100vh;
}
@media only screen and (max-width:600px){
    .grid-container{
        grid-template: "content" 1fr "navrail" min-content / 1fr;
    }
}
.grid-content{
    grid-area: content;
    height: 100%;
    overflow-y: scroll;
}
</style>