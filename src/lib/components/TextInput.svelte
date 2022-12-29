<div class="component-wrapper">
    <input type="text" class="body-large" {name} required bind:value>
    <div class="label body-large">{label}</div>
    <div class="support-text body-small on-surface-variant-text">{supportText ?? ''}</div>
    <div class="support-text error-text body-small">{errorText ?? ''}</div>
</div>

<script lang="ts">
export let value:string|undefined = undefined;
export let label:string;
export let name:string;
export let supportText:string|null = null;
export let errorText:string|null = null;
</script>

<style>
.component-wrapper{
    position: relative;
    margin-top: 1rem;
}
input{
    width: 100%;
    height: 3.5rem;
    padding: 0 1rem;
    border: 0.0625rem solid var(--md-sys-color-outline);
    background: transparent;
    border-radius: var(--md-sys-shape-corner-extrasmall);
}
.label{
    position: absolute;
    top: 0;
    display: flex;
    height: 3.5rem;
    align-items: center;
    transition: 200ms ease;
    margin-left: 1rem;
    pointer-events: none;
    color: var(--md-sys-color-on-surface-variant);
}


input:focus-within{
    outline: var(--md-sys-color-primary) solid 0.0625rem;
}

input:focus-within + .label, input:valid + .label{
    height: 1rem;
    top: -0.35rem;
    padding:  0 0.25rem;
    color: var(--md-sys-color-primary);
    font-size: var(--md-sys-typescale-body-small-font-size);
    font-weight: var(--md-sys-typescale-body-small-font-weight);
    background-color: var(--md-sys-color-background);
}
.support-text{
    margin-left: 1rem;
    margin-top: 0.25rem;
}
</style>