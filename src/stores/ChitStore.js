import {writable} from "svelte/store";

function createChitStore(){
    
    const {
        subscribe, 
        //set, 
        update 
    } = writable(
            [{
                id: 1,
                author: "Me",
                handle: "@myself",
                content: "First chit",
                likes: 0
            }]
        );
    let counter = 1;
    return {
        subscribe, 
        //set,
        update,
        generateNewId: () => {
            ++counter;
            console.log("counter", counter);
            return counter;
        },

        addNewChit: (newChit) => {
            update( e => [...e, newChit]);
            console.log("Blah");
        },

        likeChit: (id) => {
            update(pastChits => {
                
                pastChits.map((chit) => {
                    if (chit.id == id){
                        chit.likes += 1;
                    }
                    console.log("likeChit");
                    console.log(pastChits);
                   
                });
                return pastChits;
            });
        },

        deleteChit: (id) => {
            update(chits => {
                return chits.filter((chit) => {return (chit.id != id)});
            });
        }
    }
}

export const ChitStore = createChitStore();