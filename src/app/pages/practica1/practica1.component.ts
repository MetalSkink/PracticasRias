import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica1',
  templateUrl: './practica1.component.html',
  styleUrls: ['./practica1.component.css']
})
export class Practica1Component {
    user={
      con:null,
      nombre:null,
      apellidos:null,
      dia:null,
      color:null,
      fotografia:null,
      area:null,
      correo:null,
      password:null,
      direccion:null,
      pasatiempo:null,
      fecha:null
    }

    operaciones = [
                ];



    agregar() {


        this.operaciones.push({nombre:this.user.nombre,
          apellidos:this.user.apellidos,
          dia:this.user.dia,
          color:this.user.color,
          fotografia:this.user.fotografia,
          area:this.user.area,
          correo:this.user.correo,
          password:this.user.password,
          direccion:this.user.direccion,
          pasatiempo:this.user.pasatiempo,
          fecha:this.user.fecha
        });
  this.user.nombre=null;
  this.user.apellidos=null;
  this.user.dia=null;
  this.user.color=null;
  this.user.fotografia=null;
  this.user.area=null;
  this.user.correo=null;
  this.user.password=null;
  this.user.direccion=null;
  this.user.pasatiempo=null;
  this.user.fecha=null;



    }




  }
