import {writable} from "svelte/store";
import {incLike, fetchChits, deleteId, createNewChit} from "../backend/Api.js";

function createChitStore(){
    
    const {
        subscribe, 
        set, 
        update 
    } = writable([]);
    let counter = 1;
    return {
        subscribe, 
        set,
        update,
        addNewChit: async (author, handle, content) => {
            await createNewChit(author, handle, content);
            let data = await fetchChits();
            set(data);
            console.log("Blah");
        },

        likeChit: (id) => {
            update(pastChits => {
                let newCount = 1;
                pastChits.map((chit) => {
                    if (chit.id == id){
                        chit.likes += 1;
                        newCount = chit.likes;
                    }
                    console.log("likeChit");
                });
                incLike(id, newCount);
                return pastChits;
            });
        },

        deleteChit: (id) => {
            update(chits => {
                deleteId(id);
                return chits.filter((chit) => {return (chit.id != id)});
            });
        },

        loadChits: async () =>{
            let data = await fetchChits();
            set(data);
        }
    }
}

export const ChitStore = createChitStore();