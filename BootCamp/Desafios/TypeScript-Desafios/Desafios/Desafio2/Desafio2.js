"use strict";
var TipoProf;
(function (TipoProf) {
    TipoProf[TipoProf["Atriz"] = 0] = "Atriz";
    TipoProf[TipoProf["Padeiro"] = 1] = "Padeiro";
})(TipoProf || (TipoProf = {}));
let Funcionario1 = {
    nome: "Barbara",
    idade: 25,
    profissao: TipoProf.Atriz,
};
let Funcionario2 = {
    nome: "Ronaldo",
    idade: 65,
    profissao: TipoProf.Padeiro
};
let Funcionario3 = {
    nome: "Renata",
    idade: 40,
    profissao: TipoProf.Atriz,
};
let Funcionario4 = {
    nome: "Niara",
    idade: 36,
    profissao: TipoProf.Atriz,
};
