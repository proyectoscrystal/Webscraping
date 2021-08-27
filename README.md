# BlackBox backend

Backend de la aplicación BlackBox construida en Node JS. Permite almacenar imágenes, eliminarlas, editar las características y eliminarlas. De igual manera permite el registro y login de usuarios en la plataforma.

Para iniciar la aplicación se deben instalar las dependencias con `npm install`, una vez instaladas se inicia el servidor con `npm start`

## Endpoints

La aplicación está protegida con JWT garantizando seguridad en la transmisión de los datos.

### Autenticación

Registro e ingreso de usuarios a la plataforma.

Los datos de los usuarios se almacenan en la base de datos de la plataforma, en el modelo **Users**

<span style="color:#ffb400">POST</span> -  **Register User**

`{{url}}/register`

Registrar usuarios en la base de datos

**Body** - JSON

```json
{
    "email": "email@email.com",
    "username": "username",
    "password": "password123"
}
```

<span style="color:#ffb400">POST</span> - **Login User**

`{{url}}/login`

Ingresar a la plataforma con un usuario registrado

**Body** - JSON

```json
{
    "email": "email",
    "password": "password123"
}
```

#### Manejo de imágenes

Manipulación de imágenes y características.

<span style="color:#ffb400">POST</span> - **Save Images**

`{{url}}/saveImages`

Las imágenes son procesadas en el modelo y enviadas al backend en formato **base64** para ser almacenadas en la base de datos junto con el resto de datos.

#### Request Headers

**Authorization** `Token generado con jwt`

**Body** - JSON

```json
{
    "imageName": "nuevo2",
    "base64": "imagen_en_formato_base_64",
    "features": ["feature1","feature2","feature3"],
    "year": "2020",
    "gender": "female",
    "type": "asda",
    "origin": "web",
    "quarter": "Q5",
    "use" : "interior"
}
```

> No se coloca la url de la imagen por ser demasiado extenso

<span style="color:#0cbb52">GET</span> - **Get Images**

`{{url}}/getImages`

Obtener todas las imágenes almacenadas en la base de datos

#### Request Headers

**Authorization** `Token generado con jwt`

<span style="color:#ffb400">POST</span> - **Delete Image**

`{{url}}/deleteImage`

Elimina la imagen de la base de datos

#### Request Headers

**Authorization** `Token generado con jwt`

**Body** - JSON

```json
{
  "name": "Imagen-2.jpg"
}
```

<span style="color:#0cbb52">GET</span> - **Get Image**

`{{url}}/getImage/id_de_la_img_en_base_de_datos`

#### Request Headers

**Authorization** `Token generado con jwt`

<span style="color:#ffb400">POST</span> - **Delete feature**

`{{url}}/deleteFeature`

Eliminar característica de la imagen

#### Request Headers

**Authorization** `Token generado con jwt`

**Body** - JSON

```json
{
  "name": "imageName",
  "feature": "feature_name"
}
```

<span style="color:#ffb400">POST</span> - **Update feature**

`{{url}}/updateFeature`

Actualizar característica de la imagen

#### Request Headers

**Authorization** `Token generado con jwt`

**Body** - JSON

```json
{
  "name": "imageName",
  "feature": "feature_name"
}
```

<span style="color:#0cbb52">GET</span> - **Get image filter**

 `{{url}}/getImagesFilter`

Filtrar imágenes

#### Request Headers

**Authorization** `Token generado con jwt`

El Json se va llenando o vaciando a medida que el usuario selecciona el en front una de las opciones.

**Body** - JSON

```json
{
  "year": "2020",
  "origin": "web"
}
```

> Ejemplo de un filtro por año y por origen, el filtro puede contener más parámetros o menos, según el filtro.
