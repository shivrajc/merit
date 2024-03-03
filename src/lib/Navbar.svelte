<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let menuItems;    
    export let selectedItem;

    function handleClick(item) {
        dispatch('menu-change', { item })
    }
</script>

<div class="item-container">
    {#each menuItems as item}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div 
            class="item" 
            class:selected={selectedItem === item}    
            on:click={() => handleClick(item)}        
        >
            {item}
        </div>
    {/each}
</div>

<style>
    .item-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 40px;       
        position: absolute;
        top: 1px;
    }

    .item {
        text-transform: uppercase;
        letter-spacing: 0.6px;
        cursor: pointer;
        height: 100%;        
        display: flex;
        justify-content: flex-start;
        align-items: center;        
        /* border-radius: 40px; */
    }

    .item:hover {
        /* font-weight: bold; */
        /* background-color: var(--primary-blue); */
        color: var(--primary-blue);        
    }


    /* .item:not(:nth-of-type(1)) {
        padding-left: 16px;
        padding-right: 16px;
    } */

    .selected {
        border-bottom: 4px solid var(--primary-blue);        
        /* background-color: var(--primary-blue); */
        color: var(--primary-blue);
        transition: all 0.1s ease;

    }
</style>