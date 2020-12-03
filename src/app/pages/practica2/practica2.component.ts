import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-practica2',
  templateUrl: './practica2.component.html',
  styleUrls: ['./practica2.component.css']
})
export class Practica2Component {

  art={
    con:null,
    nombre:0,
    apellidos:null,
    dia:null

  }

  grados:number;
  resultadoOperacionFecha: string;
  resultadoOperacionGrados: string;
  resultadoFecha: string;
  resultadoGrados: string;
  check:boolean= true;
  resul:number;


  operaciones = [
              ];

  convertirGrados() {
    // this.art.con=+1;
    // for(let x=0;x<this.articulos.length;x++)
    // if (this.articulos[x].con==this.art.con)
    // {
    //   alert('ya existe un articulo con dicho codigo');
    //   return;
    // }

    let validador=this.check;
    console.log(this.check);
    if(validador === true){
      console.log("C a F");
      this.resultadoGrados= this.art.nombre+" grados Celcius a Farenheit.";
      this.resul=this.art.nombre * 9/5 + 32;
      this.resultadoOperacionGrados= this.art.nombre + " grados Celcius son igual a "+this.resul+ " Farenheit"
    }else{
      console.log("F a C");
      this.resultadoGrados= this.art.nombre+" grados Farenheit a Celcius.";
      this.resul=(this.art.nombre - 32) * 5/9;
      this.resultadoOperacionGrados= this.art.nombre + " grados Farenheit son igual a "+this.resul+ " Celcius"
    }


      this.operaciones.push({nombre:this.resultadoGrados,
        dia:this.resultadoOperacionGrados,
      });

    this.art.apellidos=null;
    this.art.dia=null;

  }

  convertirFecha() {
    // this.art.con=+1;
    // for(let x=0;x<this.articulos.length;x++)
    // if (this.articulos[x].con==this.art.con)
    // {
    //   alert('ya existe un articulo con dicho codigo');
    //   return;
    // }
    // var Dia = this.art.dia.getDate();
    // var Mes = this.art.dia.getMonth() + 1;
    // var Año = this.art.dia.getFullYear();
    // var DiaSemana = this.art.dia.getDay();
    let FechaFull= new Date(this.art.dia);
    let DiaSemana = FechaFull.getDay();
    let DiaLetraES = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
    let DiaLetraEN = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    console.log(FechaFull);

    console.log(DiaSemana,DiaLetraES,DiaLetraEN);

    this.resultadoFecha= "La fecha seleccionada es " +this.art.dia;
    this.resultadoOperacionFecha="El dia seleccionado es "+DiaLetraES[DiaSemana]+" en ingles seria "+DiaLetraEN[DiaSemana]+".";
      this.operaciones.push({nombre:this.resultadoFecha,
        dia:this.resultadoOperacionFecha,

      });
this.art.nombre=null;
this.art.apellidos=null;
this.art.dia=null;


  }
}
