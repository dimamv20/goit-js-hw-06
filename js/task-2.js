class Storage {
    #items;

    constructor(params){
        this.#items = params;
    }


    getItems(){
        return this.#items;
    }

    addItem(item){
        this.#items.push(item);
    }

    removeItem(item){
        const index = this.#items.indexOf(item);
        if (index > -1){
            this.#items.splice(index,1);
        }

    }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
