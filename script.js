class perfilHeroi{
    constructor(nome, lv, classe){
        this.nome = nome;
        this.lv = lv;
        this.classe = classe;
    }
    
    atacar(ataque){
        console.log(`O ${this.classe} (lv: ${this.lv}) atacou usando ${ataque}!\n`);
    }
}

const heroi1 = new perfilHeroi('Vealkan', 35, 'Guerreiro');
const heroi2 = new perfilHeroi('Dumbledoor', 50, 'Mago');
const heroi3 = new perfilHeroi('Yaarin', 42, 'Monge')

const rpgPool = {
    classes: {
        0: ['Guerreiro', 'Espada'],
        1: ['Mago', 'Magia'],
        2: ['Monge', 'Artes Marciais'],
        3: ['Ninja', 'Shuriken']
    }
}
    
function getHero(classeDoHeroi){
    let escolhaDeClasse = classeDoHeroi;
    
    for (let index in rpgPool.classes){
        let [tipoDeClasse, tipoDeAtaque] = rpgPool.classes[index];
        if (escolhaDeClasse === tipoDeClasse){
            return tipoDeAtaque;
        }
    }
}

const ataqueHeroi1 = getHero(heroi1.classe);

const ataqueHeroi2 = getHero(heroi2.classe);

const ataqueHeroi3 = getHero(heroi3.classe);

heroi1.atacar(ataqueHeroi1);
heroi2.atacar(ataqueHeroi2);
heroi3.atacar(ataqueHeroi3);
