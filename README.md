# 📦 NestJS User Management API

> API complète d'authentification et gestion des utilisateurs avec NestJS, Prisma, Supabase, JWT Refresh Token, Swagger.

## 🚀 Technologies utilisées

- NestJS 11
- TypeScript
- Prisma ORM
- Supabase PostgreSQL
- JWT (Access Token + Refresh Token)  => on peut discuter ce choix  
- Swagger OpenAPI
- Docker (optionnel)
- Postman Collection



## ⚙️ Installation

1. Installation avec NPM

- Cloner le projet :
   git clone https://github.com/AhlemBS/user-auth-system.git
-  cd nestjs-user-management
- Installer les dépendances :
   npm install
- Copier le fichier d'environnement :
   cp .env.example .env
- Lancer l'application en développement :
   npm run start:dev

2. Installation avec Docker

- git clone https://github.com/AhlemBS/user-auth-system.git
- cd nestjs-user-management
- docker build -t nestjs-user-management .
- Créer un fichier .env (voir .env.example)
- docker run -p 3000:3000 --env-file .env nestjs-user-management
L'application sera accessible à l'adresse http://localhost:3000 !


## ⚙️ Désinstallation

1. Si vous avez installé avec NPM :

- Supprimez le dossier node_modules :
rm -rf node_modules
- Supprimez le fichier .env :
rm .env
- Supprimez le dossier du projet si nécessaire :
cd ..
rm -rf nestjs-user-management

2. Si vous avez utilisé Docker :

- Listez les conteneurs en cours d'exécution :
docker ps
- Arrêtez et supprimez le conteneur :
docker stop <container_id>
docker rm <container_id>
- Supprimez l'image Docker :
docker rmi nestjs-user-management

## 📚 Documentation Swagger

Accéder à la documentation API via Swagger :

http://localhost:3000/api

##  TESTER 

il y a un fichier  à la racine du prejet user-management.postman_collection.json
vous pouvez l'importer dans postman et commencer à tester les requêtes