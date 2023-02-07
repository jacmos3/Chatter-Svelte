
<script>
    import {ChitStore} from "../stores/ChitStore.js";
    let newChitValue;

    function createChit(){
        console.log("create: ", newChitValue);
        let newChit = {
            id: ChitStore.generateNewId(), 
            handle:"hello", 
            author:"lol", 
            content: newChitValue,
            likes: 0
        }
        ChitStore.addNewChit(newChit);
    }
</script>

<div class="tweet-entry">
    <textarea bind:value = {newChitValue} placeholder = "Say something..." />
    <button on:click = {createChit} class = "btn-send fa-solid fa-location-arrow" />
</div>

<style>
    .tweet-entry {
        border: 1px solid #62676d22;
        display: flex;
        flex-direction: row;
        padding: 10px 20px;
        font-weight: lighter;
        background-color: #282c34;
        box-shadow: 0px 0px 20px #1d2025;
        margin-top: 30px;
        justify-content: space-between;
        align-items: center;
    }
    
    .tweet-entry textarea {
        display: block;
        flex-basis: 90%;
        background-color: #282c34;
        color: #dce4ec;
        font-size: smaller;
        padding: 10px;
        border: 1px solid #dce4ec22;
    }

    .tweet-entry .btn-send {
        flex-basis: 20px;
        text-align: right;
        background-color: inherit;
        border: none;
        color: #dce4ec;
        cursor: pointer;
    }
</style>