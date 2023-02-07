<script>
    import {ChitStore} from "../stores/ChitStore.js";
    import Chit from "./Chit.svelte";

    import {onMount, onDestroy} from "svelte";

    let allChits;
    let chitStoreUnsub = ChitStore.subscribe((data) => allChits = data);

    onMount( () => {
        console.log("Component mounted");
    });

    onDestroy( () => {
        console.log("Componend destroyed");
        chitStoreUnsub(); 
    });

</script>

<div class = "all-chits" >
    {#each allChits as chit (chit.id)}
        <Chit {...chit} />
    {/each}
</div>
<style>
</style>