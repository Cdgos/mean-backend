# Gestor de productos

Esta es una aplicacion desarrollada con el framework [Express.js](https://expressjs.com/) 

## Preparación :t-rex:	
Dado que es una aplicacion desarrollada con el framework Express.js necesitas unos prerrequisitos antes de correrla en local :face_in_clouds:

- NodeJS :white_check_mark:	

## Node
Para instalar NodeJs se debe descargar desde su web oficial en el siguiente enlace
[Node js](https://nodejs.org/en/download/)  :slightly_smiling_face:	

Sigue los pasos de la instalación.
Una vez instalado Node puede proceder a clonar el proyecto e instalar sus dependencias: Express.js, mongoose, dotenv y cors

## Comenzamos :rocket:	
Se debe clonar el repositorio con su terminal para tenerlo en local :upside_down_face: con :

```bash
https://github.com/Cdgos/mean-backend
```
- En la terminal nos desplazamos a la carpeta que acabamos de clonar y ejecutamos el siguiente comando para instalar todas las librerias necesarias para correr la app
```bash
yarn install
```

## Instalar dependencias

Para instalar las dependencias del proyecto, ubicandose en la raíz del mismo, solo basta correr el siguiente comando en la terminal de comandos :point_down:	
```bash
npm install
``` 

## BD
Ahora que tenemos las dependencias instaladas vamos a montar una base de datos local :sparkles:

Debes tener instalado MySql para montar la bd de la siguiente manera
- Nos desplazamos a la carpeta database en donde se encuentra el script para crear la base de datos y las tablas en local
- Lo siguiente sera crear en la raiz del proyecto un archivo ``` .env.local ``` 
- Añadimos en este archivo las credenciales de la base de datos en local que creamos de la siguiente manera

```bash
  DB_HOST=tu_host
  DB_USER=tu_usuario
  DB_PASS=tu_contraseña
  DB_NAME=tu_nombredebasededatos
  DB_PORT=tu_puertodebd
```
y ya tenemos todo listo :+1: .

Esto nos dejara el proyecto en local listo para ser ejecutado en localhost, ahora vamos a ejecutarlo con el siguiente comando

```bash
yarn dev
```
abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado :fire:.

Puedes comenzar a hacer modificaciones al archivo `pages/index.js`. La pagina deberia auto-recargarse cada vez que realices un cambio en el archivo.

