<script>
    import {ChitStore} from "../stores/ChitStore.js";
    import Chit from "./Chit.svelte";

    import {onMount, onDestroy} from "svelte";
    let loading = true;

    let allChits;
    let chitStoreUnsub = ChitStore.subscribe((data) => allChits = data);

    onMount( async () => {
        console.log("Component mounted");
        await ChitStore.loadChits();
        loading = false;
    });

    onDestroy( () => {
        console.log("Componend destroyed");
        chitStoreUnsub(); 
    });

</script>

<div class = "all-chits" >
    {#if loading}
        <div class = "loader"> Loading...</div>
    {:else}
        {#each allChits as chit (chit.id)}
            <Chit {...chit} />
        {/each}
    {/if}
</div>
<style>
    .loader{
        font-size: x-small;
        padding-top: 20px;
        opacity: 0.6;
    }
</style>