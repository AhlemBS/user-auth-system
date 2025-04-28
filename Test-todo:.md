##  Stratégie de tests envisagée

1. Tests unitaires : Vérifient le bon fonctionnement de chaque composant de manière isolée.

2. Tests d'intégration : Évaluent l'interaction entre plusieurs composants ou modules.

3. Tests end-to-end (E2E) : Simulent des scénarios utilisateur complets pour tester l'application dans son ensemble.

## 🛠️ Mise en œuvre

- Utiliser Jest (fourni par défaut avec NestJS) pour les tests unitaires et d'intégration
- Utiliser Supertest pour les tests E2E
- Configurer un environnement de test avec une base de données dédiée

## Tests unitaires 

Utiliser @nestjs/testing pour créer des modules de test.
Écrire des tests pour chaque méthode  en couvrant les cas normaux et les cas d'erreur (mocker les dépendances externes)

- src/users/users.service.ts

tester : createUser(), findUserById(), updateUser(), deleteUser()

- src/auth/auth.service.ts

tester : validateUser(), login(), register()

- src/common/guards/jwt-auth.guard.ts

## Tests d'intégration

Utiliser Jest et @nestjs/testing pour tester l'interaction entre les composants  sans mocker les dépendances internes.

- Tester l'intégration entre UsersController et UsersService.​

- Tester l'intégration entre AuthController et AuthService.

## Tests end-to-end (E2E)

Utiliser Supertest pour envoyer des requêtes HTTP Simuler des scénarios utilisateur 
Vérifier les réponses, les statuts HTTP, les en-têtes
Utiliser une base de données de test 

- test/auth.e2e-spec.ts

POST /auth/register

POST /auth/login​

- test/users.e2e-spec.ts

GET /users

GET /users/:id

PUT /users/:id

DELETE /users/:id​

## 🗂️ Ordre d'exécution

1. Tests unitaires des services
2. Tests unitaires des contrôleurs
3. Tests d'intégration des modules
4. Tests E2E des routes principales

##  Intégration continue

- Exécuter les tests unitaires et d'intégration à chaque push ou pull request.
- Exécuter les tests E2E sur une branche dédiée ou à intervalles réguliers pour valider l'application dans son ensemble.
