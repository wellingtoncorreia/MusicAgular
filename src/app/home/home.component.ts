import { Component } from '@angular/core';
import { ListAudioComponent } from '../list-audio/list-audio.component';
import { PesquisaComponent } from "../pesquisa/pesquisa.component";
import { EstilosComponent } from "../estilos/estilos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListAudioComponent, PesquisaComponent, EstilosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
