const auto = [
    {
        marca : "Audi",
        modello : "R8",
        alimentazione : "Benzina",
    },
    {
        marca : "Tesla",
        modello : "Model 3",
        alimentazione : "Elettrica",
    },
    {
        marca : "Fiat",
        modello : "Fiorino",
        alimentazione : "Metano",
    },
    {
        marca : "Fiat",
        modello : "Multipla",
        alimentazione : "Benzina",
    },
    {
        marca : "Fiat",
        modello : "500X",
        alimentazione : "Diesel",
    },
    {
        marca : "Ford",
        modello : "Fiest",
        alimentazione : "Diesel",
    },
    {
        marca : "Mercedes",
        modello : "Classe 63",
        alimentazione : "Benzina",
    },
    {
        marca : "KIA",
        modello : "Picanto",
        alimentazione : "GPL",
    },
    {
        marca : "Lamborghini",
        modello : "Urus",
        alimentazione : "Benzina",
    },
    {
        marca : "Renault",
        modello : "Capture",
        alimentazione : "GPL",
    }
]
const autoBenzina = auto.filter(auto => auto.alimentazione == "Benzina");
const autoDiesel = auto.filter(auto => auto.alimentazione == "Diesel");
const autoAltro = auto.filter(auto => auto.alimentazione !== "Diesel" && auto.alimentazione !== "Benzina");
console.log(autoBenzina, autoDiesel, autoAltro);