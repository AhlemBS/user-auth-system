## 🔧 Éléments manquants

-  Ajouter la pagination et le filtrage pour les listes d'utilisateurs
-  Mettre en place la gestion des erreurs globales avec des filtres d'exception personnalisés
-  Ecriture des tests

## 🧹 Bonnes pratiques non appliquées

-  mon approche actuelle : Contrôleur → Service → DTO, je l'ai choisi car elle est simple et rapide et necessite moins de fichiers et cela convient dans notre cas, l'approche qui est envisageable dans un cas plus complexe sera avec les entités et repositories mais j'ai vu que ça convient plus a des cas plus complexes (plus de configuartion et des fichiers)

-  Prévoir d'autres stratégies d'authentification (oAuth , session , cookies)
-  Utiliser des interfaces pour les services , chaque service a une interface correspondante, ce qui facilite les tests
-  Séparer les entités de la base de données des DTOs
-  Ajouter des logs
-  Le fichier Docker-compose (j'ai voulu rester simple dans ce cas on a pas besoin car c'est un seul service)
-  La migration avec Prisma  
-  Configurer et Utiliser Husky en pre-commit
-  Séparation des environnement dev staging prod 
-  Automatisation des tests avec github actions
-  Stocke les clés dans des variables d'environnement pour les garder séparées du code.
-  Actuellement le refresh token est dans la Tbale user,il sera envisageable de créer une table dédiée aux refresh tokens ou les stocker temporairement dans une base redis avec une expiration automatique.
- Aussi ôté client, le tokens dans des cookies HttpOnly
- - Pour la gestion d'erreur je peux profiter d'exception filter de nest.js et customiser les  erreurs at ajouter un filtre global et les gérer d'une maniére plus propre
  - 
## 🏗️ Améliorations d'architecture et de conception envisagées

- Refactoriser les services pour réduire la duplication de code
- Organiser les modules par domaine fonctionnel pour améliorer la maintenabilité
- opter pour une architecture clean qui ne dépend de l'infra (orm prisme ou bd )
