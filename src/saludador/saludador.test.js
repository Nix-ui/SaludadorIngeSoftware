import { SaludarPorNombre, SaludarConHola, saludarConHola,SaludarPorHora , SaludarPorGenero} from "./saludador.js";

describe("Saludador.saludar",()=>{
    it("Deberia saludar como base",()=>{
        const saludador = new SaludarConHola();
        expect(saludador.saludar()).toBe("Hola, Bienvenido!");
    });
})

describe("SaludadorConHola.saludar",()=>{
    it("Deberia saludar como base",()=>{
        const saludador = new SaludarConHola();
        expect(saludador.saludar()).toBe("Hola, Bienvenido!");
    });
})

describe ("SaludadorPorNombre.saludar",()=>{
    it("Deberia saludar por nombre",()=>{
        const saludador = new SaludarPorNombre("Matias");
        expect(saludador.saludar()).toBe("Hola, Matias");
    });
})

describe("SaludadorPorHora.saludar",()=>{
    it("Deberia saludar como base",()=>{
        const saludador = new SaludarPorHora();
        const hora = new Date().getHours().toLocaleString("en-US",{timeZone: "America/Santiago"});
        const expepectedMessage = parseInt(hora)<12 ? "Buenos días, " : parseInt(hora)<18 ? "Buenas tardes, " : "Buenas noches, " ;
        expect(saludador.saludar()).toBe(expepectedMessage);
    });
})