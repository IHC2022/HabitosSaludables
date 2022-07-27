# Hábitos saludables

Este proyecto consiste en una aplicación para darle seguimiento e incorporar hábitos saludables.
Comentario
# Instalar dependencias

yarn

```

### Conectar a Firebase


1. Loguear en [Firebase](https://console.firebase.google.com/)
2. Crear un proyecto
3. Crear una Realtime Database
   1. En el paso 2, check “Empezar en **test mode”**
4. Authentication > Sign-in method > Sign-in providers, agregar lo siguiente:
   1. Email/Password
   2. Google
   3. Anonymous
   4. (Optional): Si se quiere agregar Facebook y/o GitHub, los ids de clientes y los secretors de dichos servicios deber ser proporcionados
5. Agregar web-app al proyecto
6. No es necesario correr `npm install firebase`
7. En .env.local configurar lo siguiente de acuerdo a los datos que nos proporciona firebase en configuarción.

    ```bash
    const firebaseConfig = {
      apiKey: "<YOUR_API_KEY>",
      authDomain: "<YOUR_AUTH_DOMAIN>",
      databaseURL: "<YOUR_DATABASE_URL>",
      projectId: "<YOUR_PROJECT_ID>",
      storageBucket: "<YOUR_STORAGE_BUCKET>",
      messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
      appId: "<YOUR_APP_ID>",
      measurementId: "<YOUR_MEASUREMENT_ID>",
    };
    ```


### Inicializar la app

```bash
# Iniciar desarrollo
yarn start
```
La app corre en: [http://localhost:3000](http://localhost:3000/)

# Despliegue

- Se está usando un servidor como servicio de nube de DigitalOcean
- El servidor web que usamos es Nginx configurado por bloques para admitir más dominios
- Para los certificados estamos usando Certbot ssl-encrypted security
- El sistema operativo es Ubuntu-server 22.04
- El dominio es uno que teníamos como grupo y lo apuntamos al servidor de DigitalOcean

Link del despliegue: https://dev.magrito.io/
