# AppRickMorty
Esta aplicación Angular utiliza PrimeNG y PrimeFlex para consumir la API de Rick and Morty. Permite a los usuarios:

Ver el listado completo de todos los personajes de la serie.
Acceder a detalles específicos de cada personaje, incluyendo información relevante y su imagen.
Utilizar un filtro de búsqueda por nombre para encontrar rápidamente a un personaje específico.
La interfaz de usuario está diseñada con PrimeNG y PrimeFlex para ofrecer una experiencia amigable e intuitiva al usuario mientras explora la amplia gama de personajes en la serie de Rick and Morty.

## Descripción
Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 14.2.13. Utiliza las librerias de PrimeNG en su versión 14.2.17 y PrimeFlex en su version 3.3.1 para la interfaz de usuario.

## Instalación
Para ejecutar esta aplicación en tu entorno local, asegúrate de cumplir con los siguientes requisitos:

1. Node.js y npm: Instala Node.js, que incluye npm (Node Package Manager).
2. Angular CLI: Una vez que Node.js esté instalado, instala Angular CLI globalmente usando el siguiente comando en la terminal:  `npm install -g @angular/cli@14.2.13`
   
## Pasos para ejecutar la aplicación
1. Clona este repositorio a tu máquina local usando git clone [https://github.com/DanielSaenzt/rickAndMorty.git.](https://github.com/DanielSaenzt/rickAndMorty.git)
2. Navega al directorio del proyecto: cd rickAndMorty.
3. Instala las dependencias utilizando npm: `npm install`.
   
## Servidor de desarrollo
Ejecute `ng serve` para un servidor de desarrollo. Navegue hasta `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos fuente.
Vera la siguiente imagen en su navegador
![image](https://github.com/DanielSaenzt/rickAndMorty/assets/60766477/03251bfb-daf6-46d7-a83f-8e19a4476eb9)

# Estructura de la aplicación


1. src: Este directorio contiene todos los archivos fuente de la aplicación Angular.
2. app: Es el directorio principal donde se encuentra la mayor parte del código de la aplicación.
3. components: Aquí se encuentran los componentes de la aplicación. El componente llamado `character` para mostrar el listado de personajes. y tambien el module `character.module.ts` para la importacion de los componentes de `prime ng` y el provedor del servicio `rick-morty.service.ts`.
4. model: En este directorio se encuentran las interfaces que actúan como modelos de datos. Lo cuales son   
          `character.ts` que define la estructura de un personaje y `episode.ts` que define la estructura de un episodio de Tick and Morty.
5. service: Maneja peticiones a la API. En este directorio se encuentra el servicio 
              `rick-morty.service.ts` que maneja las peticiones a la API de Rick and Morty relacionadas con los personajes, para listarlos y para buscar los episodios relacionados.
6. assets: Aquí se encuentran los archivos estáticos que la aplicación puede utilizar, como imágenes del logo de Rick and Morty y el portal que ellos utilizan.
7. environments: Contiene los archivos de configuración específicos para cada entorno, como desarrollo o producción.

    

## Manual de usuario
### Listado de Personajes
1. Al ingresar a http://localhost:4200/character, se mostrará un listado de los personajes de la serie Rick and Morty. Para navegar por la lista completa, se proporciona un sistema de paginación en la parte   
   inferior de la página, permitiendo explorar los diferentes personajes disponibles.
   
   ![image](https://github.com/DanielSaenzt/rickAndMorty/assets/60766477/46c4e8b6-93bb-4407-9af0-e7c1cd1f2e93)
### Búsqueda de Personajes
1. Búsqueda por Nombre: Para encontrar un personaje específico, utiliza la barra de búsqueda ubicada en la interfaz. Ingresa el nombre del personaje que deseas buscar y la aplicación filtrará automáticamente los   
   resultados para mostrarte coincidencias.
   
   ![image](https://github.com/DanielSaenzt/rickAndMorty/assets/60766477/234ff7a0-9a8b-4e06-b06a-e27061db1818)
### Detalles de Personajes
1. Visualización de Detalles: Haz clic en la tarjeta correspondiente al personaje que te interese para ver más detalles. Esto abrirá un modal con información adicional sobre ese personaje, como su nombre, estado, epidsodios en lso que aparece, entre otros datos relevantes.
2. 
   ![image](https://github.com/DanielSaenzt/rickAndMorty/assets/60766477/f63a0b35-5d43-4afc-93fe-b6c0afb08b33)


