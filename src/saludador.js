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


function saludarConHola(){
    return "Hola, Bienvenido!";
}

export { SaludarPorNombre, SaludarConHola, saludarConHola, Saludador , SaludarPorHora};