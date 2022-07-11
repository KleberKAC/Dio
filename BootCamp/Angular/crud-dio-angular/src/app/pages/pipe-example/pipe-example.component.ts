import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  number = 0;
  text = 'hello world!';
  date = new Date;
  pessoa = {
    nome: 'Kleber Coelho',
    idade: '39',
    profissao: 'Programador'
  };
  nomes = ['Kleber', 'Renata', 'Barbara'];
  nomesPromisse: any;
  nomes$: any;

  constructor(private upperCasePipe: UpperCasePipe) {
  }

  ngOnInit(): void {
    this.text = this.upperCasePipe.transform(this.text)
  }

  mudaValor() {
    this.text = 'novo texto';
  }

  add(text: string) {
    this.nomes.push(text);
  }

  addToPromisse(text: string) {
    this.nomes.push(text);
    this.nomesPromisse = new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.nomes), 2000)
    })
  }

  addToObservable(text: string) {
    this.nomes.push(text);
    this.nomes$ = interval(2000).pipe(map(valor => this.nomes));
  }
}