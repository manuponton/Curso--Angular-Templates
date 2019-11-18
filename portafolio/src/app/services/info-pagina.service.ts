import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
info: InfoPagina = {};
cargada = false;
  constructor(private http: HttpClient) {
    console.log('Sevicio de infoPagina lista');
    // Leer archivo Json
    this.http.get('assets/data/data-pagina.json')
  .subscribe(resp => {
    this.cargada = true;
    this.info = resp;
    console.log(resp ['facebook']); // Se especifica el campo que se requiere

  });
 }

}
