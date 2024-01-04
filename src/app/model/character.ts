// Definición de una interfaz Character para representar la estructura de un personaje
export interface Character {
  id: number; // Identificador único del personaje
  name: string; // Nombre del personaje
  status: string; // Estado del personaje (vivo, muerto, desconocido, etc.)
  species: string; // Especie del personaje
  origin: {
    name: string; // Nombre del lugar de origen del personaje
  };
  location: {
    name: string; // Nombre del lugar donde se encuentra actualmente el personaje
  };
  image: string; // URL de la imagen del personaje
  episode: string[]; // Lista de códigos/identificadores de episodios en los que aparece el personaje
}

