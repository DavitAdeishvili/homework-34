class Personal{
    #id;
    constructor(name, id){
        this.name = name;
        this.#id = id;
    };
    get id(){
        return this.#id;
    };
};
const me = new Personal("David", 1234);
console.log(me);