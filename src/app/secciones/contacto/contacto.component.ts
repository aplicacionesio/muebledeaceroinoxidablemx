import { Component, OnInit } from '@angular/core';
import { Contacto } from "./contacto.model";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ConfigService } from "./contacto.service";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})



export class ContactoComponent implements OnInit {

  model; 
  mensajeMail = "";
  encabezado:any = {};

  constructor(public http:HttpClient, public servicioFormulario:ConfigService) {
    
    this.model = new Contacto("", "", "", "");

    this.encabezado.subject                  = "Mensaje de muebledeaceroinoxidable.mx";
    this.encabezado.remitente_nombre         = "Mi Sitio Web";
    this.encabezado.remitente_mail           = "no-reply@muebledeaceroinoxidable.mx";
    this.encabezado.destinatario_nombre      = "Web Muebles de Acero Inoxidable";
    // this.encabezado.destinatario_mail        = "montreal_institute@yahoo.com.mx";
    this.encabezado.destinatario_mail        = "ferinoxidables@gmail.com";


  }



  procesarFormulario() {
    
    this.servicioFormulario.aenviarFormulario(this.model).subscribe((mensaje) => {
      console.log("Algo se cumplió", mensaje);
      this.mensajeMail = mensaje;
      this.model = {};
    });

  }



  ngOnInit() {
  }

}
