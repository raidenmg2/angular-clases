import { Component, OnInit } from '@angular/core';
import { TablaComponent } from "../../components/tabla/tabla.component";
import { PersonaComponent } from '../persona/persona.component';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [TablaComponent, PersonaComponent]
})
export class HomeComponent implements OnInit {
    nombre: string ='';
    /**esta función sirve para cargar un mensaje inicial al cargar la pagina */
ngOnInit(): void {
    this.nombre='Maria de los Angeles'
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
      });
}

mostrarModal(): void{
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question",
        width:'25em',
      });   

}

}


