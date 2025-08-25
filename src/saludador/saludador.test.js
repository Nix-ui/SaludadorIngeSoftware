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
