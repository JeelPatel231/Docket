<nav class="surface on-surface-variant-text">
    <div class="fab-wrapper">
        <button on:click={() => {fabExpanded = !fabExpanded}} class="material-symbols-rounded primary-fab primary-container">add</button>
        {#if fabExpanded}
        <div transition:fly={{y:50, duration:200}} class="fab-menu flex flex-col body-medium">
            <button class="action-button">
                <span class="material-symbols-rounded">task</span>
                <div>Create a Task</div>
            </button>
            <button class="action-button">
                <span class="material-symbols-rounded">assignment</span>
                <div>Create a Project</div>
            </button>
            <button class="action-button">
                <span class="material-symbols-rounded">note</span>
                <div>Create a Note</div>
            </button>
        </div>
        {/if}
    </div>

    <ul>
        {#each navRoutes as [icon,label,route]}
            {@const isActive = ($page.url.pathname.split('/')[1] == route)}
            <li>
                <a class="flex flex-col" href={route}>
                    <span class="material-symbols-rounded nav-icon" class:active={isActive} class:secondary-container={isActive} class:on-secondary-container-text={isActive}>
                        {icon}
                    </span>
                    <span class="icon-label body-small on-surface-variant-text" class:on-surface-text={isActive}>
                        {label}
                    </span>
                </a>
            </li>
        {/each}
    </ul>
</nav>

<script lang="ts">
import { page } from '$app/stores'
import { fly } from 'svelte/transition';

let fabExpanded:boolean = false;

let navRoutes = [
    ['home', 'Home', ''],
    ['task', 'Tasks', 'tasks'],
    ['assignment', 'Projects', 'projects'],
]
</script>

<style>
.material-symbols-rounded{
    font-size: 32px;
    padding: 0 16px;
    border-radius: 16px;
}
.material-symbols-rounded.nav-icon{
    margin-bottom: 4px;
}
.material-symbols-rounded.active{
    font-variation-settings: 'FILL' 1;
}
li a{
    margin: 0 8px;
}
nav{
    grid-area: navrail;
    text-align: center;
    padding-top: 16px;
}
ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 18px;
}
.icon-label{
    font-weight: 700;
    margin-bottom: 8px;
}

.primary-fab{
    border: none;
    aspect-ratio: 1/1;
}
.fab-wrapper{
    margin-bottom: 48px;
    position: relative;
}
.fab-menu{
    position: absolute;
    left: 100%;
    top: 0;
    gap:16px;
    width: max-content;
}
.action-button{
    display: flex;
    gap:8px;
    align-items: center;
    width: 100%;
    background: var(--md-sys-color-primary-container);
    border: none;
    border-radius: 16px;
    padding: 8px;
}
.action-button span {
    padding: 8px 0;
}
@media only screen and (max-width: 600px){
    nav{
        padding-top: 8px;
    }
    ul{
        flex-direction: row;
        justify-content: space-around;
        gap: 0px;
    }
    .fab-wrapper {
        position: absolute;
        right: 32px;
        bottom: 32px;
    }
    .fab-menu{
        bottom: 100%;
        margin-bottom: 16px;
        right: 0;
        left: unset;
        top: unset;
    }
}
</style>