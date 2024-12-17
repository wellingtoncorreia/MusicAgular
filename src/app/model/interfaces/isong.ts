export interface ISong {
    id: number; // Identificador único da música
    title: string; // Título da música
    artist: string; // Nome do artista
    album?: string; // Álbum (opcional)
    duration: number; // Duração em segundos
    url: string; // URL da música
  }
  