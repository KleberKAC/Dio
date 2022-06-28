enum TipoProf {
  Atriz,
  Padeiro,
}
type DPessoais = {
  nome: string,
  idade: number, 
  profissao: TipoProf,
}

let Funcionario1 : DPessoais = {
  nome: "Barbara",
  idade: 25,
  profissao: TipoProf.Atriz,
}

let Funcionario2 : DPessoais = {
  nome: "Ronaldo",
  idade: 65,
  profissao: TipoProf.Padeiro

}

let Funcionario3 : DPessoais = {
  nome: "Renata",
  idade: 40,
  profissao: TipoProf.Atriz,
}

let Funcionario4 : DPessoais = {
  nome: "Niara",
  idade: 36,
  profissao: TipoProf.Atriz, 
}