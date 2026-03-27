# 2D Physics Engine

> A custom 2D physics engine built to explore rigid body dynamics, collision detection, and vector mathematics.

---

## Description

Ce projet est un moteur de physique 2D développé entièrement en **TypeScript**, avec pour objectif de comprendre les bases mathématiques et physiques utilisées dans les simulations :

- 🔹 Dynamique des corps rigides (Rigid Body Dynamics)
- 🔹 Mathématiques vectorielles (Vec2)
- 🔹 Détection de collisions (SAT, AABB, etc.)
- 🔹 Résolution des collisions
- 🔹 Intégration numérique (Euler, etc.)

Ce projet est avant tout **éducatif**, mais vise une implémentation proche des moteurs réels (type Box2D).

---

## Architecture du projet
```
src/
│
├── math/ → vecteurs, opérations mathématiques
├── core/ → corps rigides, monde, intégration
├── physics/ → collisions, résolution
├── utils/ → constantes, helpers
└── main.ts → point d’entrée
```

---

## Technologies utilisées

- **TypeScript**
- **Canvas API** (pour le rendu)

---

## Fonctionnalités actuelles

- [x] Implémentation de vecteur 2D
- [ ] Rigid Body basique
- [ ] Intégration du mouvement
- [ ] Détection de collision (AABB)
- [ ] SAT (Separating Axis Theorem)
- [ ] Résolution des collisions

---

## Objectifs pédagogiques

Ce projet me permet de :

- Comprendre les **fondamentaux de la physique en simulation**
- Implémenter des concepts mathématiques concrets
- Construire un système modulaire et performant
- Approcher la logique des moteurs physiques professionnels

---

## Roadmap

- [ ] Gestion des forces (gravité, impulsions)
- [ ] Rotation et moment d’inertie
- [ ] Broad phase (optimisation des collisions)
- [ ] Système de contraintes (joints)
- [ ] Optimisations (object pooling, performance)

---

## Contribution

Les contributions sont les bienvenues !

### Pour contribuer :

1. Fork le projet
2. Crée une branche (`feature/ma-feature`)
3. Commit tes modifications
4. Push et ouvre une Pull Request

---

## Remarques

- Ce projet est en cours de développement
- Certaines implémentations peuvent être simplifiées à des fins pédagogiques

---

## Licence

MIT License

---

## Auteur

Développé par **Mbouombouo Aboubakar**

---

## ⭐ Support

Si le projet t’aide ou t’intéresse, n’hésite pas à mettre une étoile ⭐
