


class Singelton {

    static #instance;

    constructor(){
        if(Singelton.#instance)
        {
            Singelton.#instance = this;
        }
        return Singelton.#instance;
    }

    get()
    {
        return Singelton.#instance;
    }
}