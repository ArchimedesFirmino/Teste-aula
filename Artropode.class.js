import {Animal} from './Animal.class.js';

export class Artropode extends Animal{

    #formato
    #qntPata

    constructor(nome, especie, formato){
        // Passa esses parâmetros para o construtor da classe principal.
        super(nome, especie, habitat)
        this.#formato = formato
    }

    get formato(){
        return this.#formato
    }

    get qntPata(){
        return this.#qntPata
    }

    set  
    (formato){
        this.#formato = formato
    }

    set qntPata(patas){
        this.#qntPata = patas
    }


}