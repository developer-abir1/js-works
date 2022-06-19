class Grup {
    name;
    job="kazi grup";
    rol="Supppot web dev";
    meetSection="Meet secton";
    obje= ["hello " , "how " , "are" ]
    constructor(name){
        this.name = name
    }
    startSesson(){
        console.log( this.name,"start a seccon")
    }

}

const alima = new Grup("abir");
console.log(alima.startSesson() )