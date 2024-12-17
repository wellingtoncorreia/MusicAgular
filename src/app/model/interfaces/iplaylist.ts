import { ISong } from "./isong";

export interface IPlaylist {
    id: number; // Identificador único da playlist
    name: string; // Nome da playlist
    description?: string; // Descrição opcional
    createdAt: Date; // Data de criação
    songs: ISong[]; // Lista de músicas
  }
  