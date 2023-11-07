# Utilizar una imagen base de Node.js
FROM node:lts

# Crea y cambia el destino actual a /app
WORKDIR /app

# Copiamos el archivo de dependencias
COPY ./package*.json /app/

#Instalar las dependencias
RUN npm install

#Copiamos el contenido del proyecto a /app
COPY . /app/

# Exponer puerto 80
EXPOSE 80

# Iniciar la aplicación
CMD [ "node", "app.js" ]


