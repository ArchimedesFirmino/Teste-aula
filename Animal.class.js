export class Animal {

    #nome = ''
    #especie = ''
    #familia
    #nascimento
    #metrica = {}
    #habitat

    constructor(nome, especie) {
        this.#nome = nome
        this.#especie = especie
    }

    alimentacao() { }
    vacinar() { }

    get nome() {
        return this.#nome
    }

    set nome(nome) {
        this.#nome = nome
    }

    get especie() {
        return this.#especie
    }

    set especie(especie) {
        this.#especie = especie
    }

    get familia() {
        return this.#familia
    }

    set familia(familia) {
        this.#familia = familia
    }

    get nascimento() {
        return this.#nascimento
    }

    set nascimento(nascimento) {
        this.#nascimento = nascimento
    }

    get metrica() {
        return this.#metrica
    }

    set metrica(metrica) {
        this.#metrica = metrica
    }

    get habitat() {
        return this.#habitat
    }

    set habitat(habitat) {
        this.#habitat = habitat
    }
}