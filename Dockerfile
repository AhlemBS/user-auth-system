FROM node:20-alpine

WORKDIR /app

# Copie package.json + package-lock.json et installe les dépendances
COPY package*.json ./
RUN npm install

# Puis seulement maintenant copier le reste du code
COPY . .

# Génération Prisma Client
RUN npx prisma generate

# Expose le port
EXPOSE 3000

# Commande de lancement
CMD [ "npm", "run", "start:prod" ]
