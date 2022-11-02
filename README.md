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
## Instalar dependencias

Para instalar las dependencias del proyecto, ubicandose en la raíz del mismo, solo basta correr el siguiente comando en la terminal de comandos :point_down:	
```bash
npm install
``` 
- Para levantar el servidor local y correr el API, ejecute el siguiente comando en la terminal:
```bash
npm run dev
```
El servidor escuchará en el puerto 3000 segun está especificado en el archivo variables.env, no obstante, si el puerto se encuentra ocupado, buscará otro puerto que se encuentre disponible.

# CONSUMO DEL API
## Obtener todos los productos

- Método HTTP: GET 
- Url: http://localhost:3000/api/productos

- Ejemplo de respuesta:
```json
[
    {
        "_id": "6356d539c01d0dcadd1934ee",
        "nombre": "Celular",
        "categoria": "Tecnologia",
        "ubicacion": "CUCUTA",
        "precio": 700000,
        "fechaCreacion": "2022-10-24T18:11:04.393Z",
        "__v": 0
    },
    {
        "_id": "63617e9eba0fa19b2ae70bf5",
        "nombre": "Coca cola personal",
        "categoria": "Bebida",
        "ubicacion": "Cucuta",
        "precio": 20,
        "fechaCreacion": "2022-11-01T20:16:13.553Z",
        "__v": 0
    }
]
``` 
## Crear un producto
- Método HTTP: POST 
- Url: http://localhost:3000/api/productos
- body: 
```json
{
    "nombre": "Pepsi",
    "categoria": "bebidas",
    "ubicacion": "Barcelona",
    "precio": 2
}
```
- Ejemplo de respuesta:
```json
{
    "nombre": "Pepsi",
    "categoria": "bebidas",
    "ubicacion": "Barcelona",
    "precio": 2,
    "fechaCreacion": "2022-11-02T00:57:04.110Z",
    "_id": "6361c495df46ac0ce6f5aad5",
    "__v": 0
}
```

## Actualizar un producto
- Método HTTP: PUT 
- Url: http://localhost:3000/api/productos/:id
- body: 
```json
{
    "nombre": "Pepsi",
    "categoria": "bebidas",
    "ubicacion": "Cucuta",
    "precio": 10
}
```
- Ejemplo de respuesta:
```json
{
    "_id": "6361c495df46ac0ce6f5aad5",
    "nombre": "Pepsi",
    "categoria": "bebidas",
    "ubicacion": "Cucuta",
    "precio": 10,
    "fechaCreacion": "2022-11-02T00:57:04.110Z",
    "__v": 0
}
```

## Obtener un producto
- Método HTTP: GET 
- Url: http://localhost:3000/api/productos/:id

- Ejemplo de respuesta:
```json
{
    "_id": "6361c495df46ac0ce6f5aad5",
    "nombre": "Pepsi",
    "categoria": "bebidas",
    "ubicacion": "Cucuta",
    "precio": 10,
    "fechaCreacion": "2022-11-02T00:57:04.110Z",
    "__v": 0
}
```
## Eliminar un producto
- Método HTTP: DELETE 
- Url: http://localhost:3000/api/productos/:id

- Ejemplo de respuesta:
```json
{
    "msg": "Producto eliminado correctamente"
}
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

