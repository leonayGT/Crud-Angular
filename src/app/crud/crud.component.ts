import { Crud } from './../modulo/crud/crud.module';
import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';



@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  cruds: Crud[] = [] 
  dateCurrent = new Date()
  pessoa: Crud= new Crud()
  dadoNome: Crud = new Crud()
  novoDado: Crud = new Crud()
  validacao: Crud = new Crud

  adcionarNomes() {
    this.cruds.push(new Crud(this.dadoNome.nome, this.dadoNome.id, this.dadoNome.cpf, this.dadoNome.telefone)) 
    console.log(this.cruds)
    
  }

  excluir(i: number){
  this.cruds.splice(i, 1)

  }

  editarInfo1(i: number) {
    this.cruds.splice(i,1,new Crud(this.dadoNome.nome, this.dadoNome.id, this.dadoNome.cpf, this.dadoNome.telefone))
  }

  visualizarinfo(i: any){
  const lista:any = document.getElementsByClassName('lista')[i]
  lista.classList.toggle('bg-danger')


  }
  constructor() {
  
  }
   ngOnInit(): void {
  }

}
