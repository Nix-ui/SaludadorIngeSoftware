class Saludador{
    message;
    constructor(){
        this.message= " Bienvenido!";
    }
    saludar(){
        return this.message;
    }
}

class SaludarConHola extends Saludador{
    constructor(){
        super();
    }
    saludar(){
        return  "Hola, " + super.saludar();
    }
}
class SaludarPorNombre extends Saludador{
    nombre;
    constructor(nombre){
        super();
        this.nombre= nombre;
    }
    saludar(){
        return "Hola, " + this.nombre;
    }
    getNombre(){
        return this.nombre;
    }
}
class SaludarPorHora extends Saludador{
    hora;
    constructor(){
        super();
        this.hora = new Date().getHours().toLocaleString("en-US",{timeZone: "America/Santiago"});
    }
    saludar(){
        if(parseInt(this.hora)<12) return "Buenos días, " ;
        if(parseInt(this.hora)<18) return "Buenas tardes, " ;
        return "Buenas noches, " ;
    }
}
class SaludarPorGenero extends Saludador{
    genero;
    constructor(genero){
        super();
        this.genero= genero;
    }
    saludar(){
        if(this.genero.toLowerCase()=="f") return "Hola, Sra." ;
        if(this.genero.toLowerCase()=="m") return "Hola, Sr." ;
    }
}

function saludarConHola(){
    return "Hola, Bienvenido!";
}

export { SaludarPorNombre, SaludarConHola, saludarConHola, Saludador , SaludarPorHora, SaludarPorGenero};