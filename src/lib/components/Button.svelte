<button class="primary on-primary-text body-large" on:click={onClick}>
    <slot></slot>
</button>

<script lang="ts">
export let onClick:VoidFunction = () => {};
</script>

<style>
button{
    height: 2.5rem;
    border: none;
    border-radius: 1.25rem;
    cursor: pointer;
}
</style>