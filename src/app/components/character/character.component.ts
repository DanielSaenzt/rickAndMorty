import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { RickMortyService } from 'src/app/service/rick-morty.service';
import { Episode } from 'src/app/model/episode';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {

  characters: Character[] = []; // Array que almacena los personajes obtenidos
  character!: Character; // Variable para almacenar un personaje seleccionado
  episodes: Episode[] = []; // Array que almacena los episodios relacionados con un personaje
  params = {} as any; // Parámetros para las consultas
  showPortal: boolean = false; // Controla la visualización de un portal
  cardSelected: number | null = null; // Almacena el ID del personaje seleccionado
  showModal: boolean = false; // Controla la visualización de un modal

  constructor(private rickMortyservice: RickMortyService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.params.page = 1; // Inicialización del número de página
    this.getCharacters(); // Obtiene los personajes al inicializar el componente
  }

  // Obtiene los personajes utilizando los parámetros definidos
  getCharacters() {
    this.rickMortyservice.findAllCharacters(this.params).subscribe(
      (data: any) => {
        this.characters = data.results;
      }, (error: HttpErrorResponse) => {
        // Manejo de errores al obtener personajes
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.error });
        console.error('Error al obtener los personajes:', error.error.error);
      });
  }

  // Realiza una búsqueda de personajes con los parámetros definidos
  searchCharacters() {
    this.rickMortyservice.findAllCharacters(this.params).subscribe(
      (data: any) => {
        this.characters = data.results;
        this.params.page = 1; // Reinicia la página a la primera al realizar una búsqueda
      }, (error: HttpErrorResponse) => {
        // Manejo de errores al buscar personajes
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.error });
        console.error('Error al buscar personajes:', error.error.error);
      });
  }

  // Obtiene los episodios relacionados con un personaje
  getEpisodesByCharacter() {
    for (let urlEpisode of this.character.episode) {
      this.rickMortyservice.findEpisodesCharacter(urlEpisode).subscribe(
        (data: any) => {
          this.episodes.push(data);
        }, (error: HttpErrorResponse) => {
          // Manejo de errores al obtener episodios por personaje
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.error });
          console.error('Error al obtener los episodios:', error.error.error);
        });
    }
  }

  // Navega a la siguiente página de personajes
  nextPage(): void {
    this.params.page++;
    this.getCharacters();
  }

  // Navega a la página anterior de personajes
  prevPage(): void {
    if (this.params.page > 1) {
      this.params.page--;
      this.getCharacters();
    }
  }

  // Controla la visualización de un portal y muestra un modal al hacer clic en un personaje
  moveCard(character: Character): void {
    this.showPortal = true;
    this.cardSelected = character.id;
    this.character = { ...character }; // Copia del personaje seleccionado
    const card = document.getElementById(`card-${character.id}`) as HTMLElement;
    if (card) {
      setTimeout(() => {
        this.showPortal = false;
        this.cardSelected = null;
        this.getEpisodesByCharacter(); // Obtiene los episodios del personaje seleccionado
        this.showModal = true; // Muestra el modal después de un tiempo de espera
      }, 1000);
    }
  }
}

