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
        return "Hola, " + this.nombre + super.saludar();
    }
}

function saludarConHola(){
    return "Hola, Bienvenido!";
}

export { SaludarPorNombre, SaludarConHola, saludarConHola, Saludador };