# youtube-video-keeper
El actual proyecto consiste en una aplicación para guardar links de YouTube.

## Alcance el proyecto
Se implementó un layout que sólo es funcional en desktop, no tuvo dentro de su scope un diseño para dispositivos móviles

## Demo
Para facilitar la exploración del proyecto se ha dispuesto una versión demo alojada en [este link](http://frontend-example-s3.s3-website-us-west-2.amazonaws.com/#/).

## Requisitos
- [Nodejs](https://nodejs.org/es/)
- [Yarn](https://classic.yarnpkg.com/en/docs/getting-started)
- [AWS CLI](https://aws.amazon.com/es/cli/)
- [AWS SAM](https://docs.aws.amazon.com/es_es/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

## Setup del proyecto
### Backend
El proyecto backend consiste en una función de AWS Lambda conectada a AWS DynamoDB, la cual se dispone a través de AWS API Gateway.
La aplicación se encuentra en la carpeta 'aws-lambda', y para facilitar el despliegue se ha dejado un archivo (deploy-backend.yaml) IaC (Infrastructure as Code) de tipo SAM, una herramienta de AWS para extender a Cloudformation y desplegar proyectos serverless como este
Para desplegar el backend nos basta con ejecutar la siguiente línea:
```
sam deploy -t deploy-backend.yaml --stack-name youtube-video-keeper-api --resolve-s3 --capabilities CAPABILITY_IAM
```
El output de este comando nos entrega la url de API Gateway para poder utilizarla dentro del proyecto.
### Frontend
La aplicación frontend consiste en una SPA de Vuejs, la biblioteca de componentes utilizada es Vuetify, y se hace uso de Sass como preprocesador de estilos.
Para no acarrear credenciales hacia el repositorio de Git, parte de la lógica hace uso de variables de entorno, por lo que antes de utilizar el proyecto se necesita configurar un archivo .env con la url del backend y la API Key de google para utilizar la API de YouTube. El proyecto dispone de un archivo .env.example con un ejemplo de esto.
SAM levanta un backend que permite la consultas cross-domain, por lo que se puede utilizar el proyecto directamente desde el entorno de desarrollo en local.
### Desarrollo
```
yarn serve
```

### Transpilado para producción
```
yarn build
```

### Test unitarios
```
yarn test:unit
```

### Lints y corrección de archivos
```
yarn lint
```

## Vistas implementadas

### Home
![home](https://frontend-example-s3.s3.us-west-2.amazonaws.com/readme-images/home.png)

### Confirmación de eliminación
![home](https://frontend-example-s3.s3.us-west-2.amazonaws.com/readme-images/delete-confirm.png)

### Descripción del video
![home](https://frontend-example-s3.s3.us-west-2.amazonaws.com/readme-images/description.png)

### Reproductor
![home](https://frontend-example-s3.s3.us-west-2.amazonaws.com/readme-images/player.png)

### Customización
See [Configuration Reference](https://cli.vuejs.org/config/).
