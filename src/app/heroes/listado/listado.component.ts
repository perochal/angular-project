import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Prospero', 'Wonder Woman']
  //para poeder llamar a heroee borrado se crea una propiedad, la cual será llamada desde el html
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('borrando..')
    this.heroeBorrado = this.heroes.shift() || ''; //para evitar el undefine se utiliza el operador o (||) diciendo o vacio

  }
}
