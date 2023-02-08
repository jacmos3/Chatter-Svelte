export async function fetchChits(){
    console.log("[b] Fetching all chits");
    const response = await fetch("http://localhost:3000/chits");
    const data = response.json();
    console.log("[b] Data:", data);
    return data;
}

export async function incLike(id, newCount) {
    console.log("[b] Incrementing likes", id, newCount);
    const data = {likes: newCount};
    const settings = {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    try{
        const url = `http://localhost:3000/chits/${id}`;
        const response = await fetch(url, settings);
        const data = await response.json();
        return data;
    }catch(e){
        return e;
    };

}

export async function deleteId(id){
    console.log( "[b] deleting element");

    const settings = {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    };

    try{
        const url = `http://localhost:3000/chits/${id}`;
        const response = await fetch(url, settings);
        const data = await response.json();
        return data;
    }
    catch(e){
        return e;
    }

}

export async function createNewChit(author, handle, content){
    console.log( "[b] creating element", author, handle, content);
    const data = {id: Date.now(), likes:0, author:author, handle:handle, content:content};
    const settings = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    try{
        const url = `http://localhost:3000/chits`;
        const response = await fetch(url, settings);
        const data = await response.json();
        return data;
    }
    catch(e){
        return e;
    }
}
