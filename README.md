# 🏰 La Carte des Villages Résistants NIRD

> Interface web immersive pour la communauté NIRD (Numérique Inclusif, Responsable et Durable) permettant d'explorer comment les établissements scolaires résistent à l'empire des Big Tech.

## 📋 Table des matières

- [Présentation](#-présentation)
- [🎯 Fonctionnalités](#-fonctionnalités)
- [🔗 Liens](#-liens)
- [🚀 Installation](#-installation)
- [🛠️ Technologies](#️-technologies)
- [📱 Responsive Design](#-responsive-design)
- [⌨️ Raccourcis Clavier](#️-raccourcis-clavier)
- [🎨 Design & UX](#-design--ux)
- [📝 Structure du Projet](#-structure-du-projet)
- [✨ Fonctionnalités Détailées](#-fonctionnalités-détaillées)
- [💡 Justifications Techniques](#-justifications-techniques)
- [🔮 Améliorations Futures](#-améliorations-futures)

---

## 🎯 Présentation

La Carte des Villages Résistants NIRD est une application web interactive développée par **l'équipe Siraj** qui sensibilise et accompagne les établissements scolaires dans leur migration vers les logiciels libres. Inspirée de l'univers d'Astérix, l'interface présente de manière ludique et engageante les alternatives aux outils propriétaires (Microsoft, Google, Adobe) et leurs bénéfices.

### 🎯 Objectifs du projet

- **Sensibiliser** les établissements scolaires aux enjeux de la résistance numérique
- **Promouvoir** les solutions libres et open source
- **Accompagner** la migration avec des outils pratiques (calculateur, checklist, générateur de plan)
- **Partager** les retours d'expérience de la communauté
- **Gamifier** le parcours de migration avec un système de quêtes

---

## 🔗 Liens

- **📦 GitHub** : [Lien vers le repository GitHub](https://github.com/Bezeid-5/hairgonomies.git)
- **🌐 Rendu en ligne** : [Lien vers la démo](https://hairgonomies-three.vercel.app/)


---

## 🎯 Fonctionnalités

### 📄 6 Pages Principales

1. **🏠 Accueil - Le Village Gaulois**
   - Présentation engageante avec statistiques impactantes
   - Appels à l'action vers la carte et l'arsenal
   - Messages clés sur les avantages du libre

2. **🗺️ Carte Interactive - La Gaule Résistante**
   - Carte de France stylisée avec établissements résistants
   - Fiches détaillées par établissement
   - Statistiques globales de la communauté

3. **⚔️ Armurerie - L'Arsenal Libre**
   - Galerie d'alternatives aux GAFAM (Linux, LibreOffice, Nextcloud, etc.)
   - Filtres par difficulté de migration (Facile, Moyen, Expert)
   - Économies estimées pour chaque outil
   - Modals détaillées avec liens vers les sites officiels

4. **👥 Conseil du Village - Témoignages des Druides**
   - Retours d'expérience d'établissements réels
   - Témoignages vidéo et texte
   - Statistiques de réussite (économies, nombre de PC migrés)
   - Modal détaillée pour chaque témoignage

5. **🧙 École des Druides - La Forge du Savoir**
   - **Calculateur d'économies** : Estime les économies réalisables avec Linux
   - **Checklist de migration** : Planification étape par étape avec cases à cocher
   - **Générateur de plan** : Crée un plan de migration personnalisé avec téléchargement
   - Ressources pédagogiques filtrées par niveau (Novice, Initié, Expert)

6. **🎯 Quêtes - Défis de Résistance**
   - Parcours gamifié avec défis progressifs
   - Système de badges et progression
   - Étapes interactives avec suivi de progression
   - Statistiques globales (progression, badges débloqués)

### 🎮 Système de Navigation OS

L'application propose une expérience de navigation unique inspirée des systèmes d'exploitation :

- **Mode Normal** : Page active en plein écran
- **Mode Alt+A** : Navigation rapide vers la page suivante
- **Mode Vue d'ensemble** : Grille 3x2 avec overlay foncé (touche W ou double tap mobile)
- **Navigation tactile** : Swipe horizontal sur mobile
- **Navigation clavier** : Flèches gauche/droite
- **Barre d'état** : Affiche tous les raccourcis disponibles en bas d'écran (desktop uniquement)

---

## 🚀 Installation

### Prérequis

- Node.js 18+ et npm
- Un navigateur moderne (Chrome, Firefox, Edge, Safari)

### Installation locale

```bash
# Cloner le repository
git clone https://github.com/Bezeid-5/hairgonomies.git
cd hairgonomies

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# L'application sera accessible sur http://localhost:3000
```

### Commandes disponibles

```bash
# Développement (ouvre Chrome automatiquement)
npm run dev

# Développement (sans ouvrir de navigateur)
npm run dev:no-browser

# Build de production
npm run build

# Démarrer le serveur de production
npm start

# Linter
npm run lint
```

---

## 💡 Justifications Techniques

### Choix de Next.js 14

- **Performance** : SSR et optimisations automatiques
- **SEO** : Rendu côté serveur pour un meilleur référencement
- **DX** : Excellente expérience développeur avec TypeScript intégré
- **App Router** : Routing moderne et performant

### Système de navigation OS et Expérience Utilisateur

#### 🎯 Concept et Inspiration

**Problématique** : Créer une expérience unique qui se démarque des interfaces web classiques et qui offre une navigation intuitive et moderne.

**Inspiration** : Notre équipe Siraj a été inspirée par les systèmes d'exploitation modernes (Linux, Windows, macOS) qui offrent des mécanismes de navigation puissants et naturels. Nous avons adapté ces concepts au web pour créer une expérience utilisateur immersive et innovante.

#### 🚀 Choix de l'Expérience Utilisateur

**Navigation par Swipe (Mobile)**
- **Pourquoi** : Le swipe est devenu un geste naturel et intuitif sur mobile, utilisé par des milliards d'utilisateurs quotidiennement (réseaux sociaux, galeries photos, etc.)
- **Avantages** :
  - Navigation fluide et rapide entre les pages
  - Réduction de la fatigue oculaire (pas besoin de chercher des boutons)
  - Expérience native et familière pour les utilisateurs mobiles
  - Meilleure utilisation de l'espace écran (pas de barre de navigation encombrante)

**Double Tap pour Vue d'ensemble (Mobile)**
- **Pourquoi** : Le double tap est un geste standard sur mobile, facilement mémorisable
- **Avantages** :
  - Accès rapide à une vue globale sans encombrer l'interface
  - Parité avec l'expérience desktop (touche W)
  - Intuitif et découvert facilement par les utilisateurs

**Vue d'ensemble (Desktop/Mobile)**
- **Pourquoi** : Inspirée de la vue d'ensemble des OS (Mission Control sur macOS, Task View sur Windows)
- **Avantages** :
  - Navigation visuelle et spatiale
  - Permet de voir toutes les pages en un coup d'œil
  - Facilite la compréhension de la structure de l'application
  - Overlay foncé pour se concentrer sur le choix de navigation

**Système de modes de navigation**
- **Pourquoi** : Offrir différents niveaux de navigation selon le contexte d'utilisation
- **Avantages** :
  - Flexibilité : chaque utilisateur peut choisir sa méthode préférée
  - Efficacité : raccourcis clavier pour les utilisateurs avancés
  - Accessibilité : navigation tactile pour tous les niveaux

**Barre d'état avec raccourcis clavier (Desktop)**
- **Pourquoi** : Informer les utilisateurs des raccourcis disponibles sans encombrer l'interface principale
- **Avantages** :
  - Découvrabilité des fonctionnalités
  - Référence rapide pour les raccourcis
  - Design épuré et professionnel
  - Non intrusive (barre fine en bas)

**Absence de barre de navigation mobile**
- **Pourquoi** : Maximiser l'espace d'affichage et éviter la redondance avec le swipe
- **Avantages** :
  - Plus d'espace pour le contenu
  - Interface plus épurée
  - Focus sur le contenu plutôt que sur la navigation
  - Expérience immersive

#### 📊 Avantages Globaux de cette Approche

1. **Engagement Utilisateur**
   - Expérience unique et mémorable qui encourage l'exploration
   - Gamification subtile avec le système de quêtes

2. **Performance**
   - Navigation native (swipe) plus rapide que les clics sur boutons
   - Animations optimisées avec Framer Motion
   - Pas de rechargement de page (SPA)

3. **Accessibilité Multi-plateforme**
   - Desktop : navigation clavier efficace
   - Mobile : gestes tactiles naturels
   - Adaptation automatique selon le contexte

4. **Différenciation**
   - Se démarque des interfaces web traditionnelles
   - Crée une identité visuelle forte pour le projet NIRD
   - Montre l'innovation de la communauté du libre

5. **Ergonomie**
   - Réduction du nombre de clics/taps nécessaires
   - Navigation spatiale intuitive
   - Feedback visuel immédiat

#### 🎨 Cohérence avec le Thème

Cette approche de navigation s'aligne parfaitement avec le thème "Résistance numérique" :
- **Innovation** : Comme les logiciels libres innovent, notre interface innove aussi
- **Contrôle utilisateur** : Plusieurs façons de naviguer = plus de contrôle
- **Modernité** : Interface à la pointe de la technologie web moderne

### Framer Motion

**Justification** : Animations performantes avec GPU acceleration, syntaxe déclarative simple, et excellentes performances sur mobile.

### Design simplifié

**Décision** : Suppression des emojis dans les titres et navigation pour un design plus professionnel et épuré.

**Résultat** : Interface moderne qui reste ludique grâce aux animations et au thème, sans surcharge visuelle.

### Responsive Mobile-first

**Approche** : 
- Navigation tactile optimisée (swipe, double tap)
- Suppression de la barre de navigation mobile pour maximiser l'espace
- Barre d'état uniquement sur desktop (où les raccourcis clavier sont pertinents)

### Accessibilité

- Navigation complète au clavier
- Labels ARIA pour les éléments interactifs
- Contraste de couleurs conforme WCAG
- Support des lecteurs d'écran

---

## 🛠️ Technologies

### Frontend

- **Next.js 14** : Framework React avec App Router pour le routing et le SSR
- **TypeScript** : Typage statique pour une meilleure maintenabilité
- **Tailwind CSS** : Framework CSS utilitaire pour un design responsive
- **Framer Motion** : Bibliothèque d'animations fluides et performantes
- **Lucide React** : Icônes modernes et légères

### Structure

```
hairgonomies/
├── app/
│   ├── layout.tsx          # Layout principal avec métadonnées
│   ├── page.tsx            # Page d'accueil avec système de navigation
│   └── globals.css         # Styles globaux et variables CSS
├── components/
│   ├── OSNavigator.tsx     # Système de navigation OS (modes, raccourcis)
│   └── pages/
│       ├── AccueilPage.tsx      # Page d'accueil
│       ├── CartePage.tsx        # Carte interactive
│       ├── ArmureriePage.tsx    # Galerie d'alternatives
│       ├── ConseilPage.tsx      # Témoignages
│       ├── EcolePage.tsx        # Ressources et outils
│       └── QuetesPage.tsx       # Système de quêtes
├── package.json
├── tailwind.config.js      # Configuration Tailwind avec couleurs personnalisées
└── README.md
```

---

## 📱 Responsive Design

L'interface est entièrement responsive et optimisée pour :

- **Mobile** : Navigation par swipe, double tap pour vue d'ensemble
- **Tablette** : Adaptation automatique de la mise en page
- **Desktop** : Barre d'état avec raccourcis clavier, navigation optimale

### Adaptations mobiles

- Pas de barre de navigation en bas (navigation par swipe uniquement)
- Double tap pour accéder à la vue d'ensemble
- Padding ajusté pour une meilleure utilisation de l'écran
- Gestes tactiles optimisés

---

## ⌨️ Raccourcis Clavier

| Raccourci | Action |
|-----------|--------|
| `Alt + A` | Page suivante (cycle) |
| `←` / `→` | Naviguer entre les pages |
| `W` | Afficher la vue d'ensemble |
| `Échap` | Revenir à la vue normale |

### Mobile

- **Swipe gauche/droite** : Navigation entre les pages
- **Double tap** : Afficher la vue d'ensemble

---

## 🎨 Design & UX

### Palette de couleurs

- **Vert forêt** (`forest-green`) : Nature, écologie, résistance
- **Bleu confiance** (`trust-blue`) : Fiabilité, professionnalisme
- **Orange chaleureux** (`warm-orange`) : Énergie, engagement

### Typographie

- **Inter** : Police principale (lisibilité optimale)
- **Kalam** (handwritten) : Police pour les titres (ton ludique)

### Principes de design

1. **Simplicité** : Interface épurée, pas d'emojis excessifs
2. **Interactivité** : Animations fluides, feedback visuel immédiat
3. **Accessibilité** : Contraste suffisant, navigation clavier complète
4. **Engagement** : Gamification avec système de quêtes

---

## ✨ Fonctionnalités Détailées

### Calculateur d'économies

- Estimation basée sur 150€/PC/an (licences Windows + Office)
- Calcul automatique des économies annuelles et sur 5 ans
- Interface simple et intuitive

### Checklist de migration

- 7 étapes essentielles de migration
- Cases à cocher interactives
- Suivi visuel de la progression

### Générateur de plan

- Formulaire de saisie (établissement, nombre de PC, date, priorités)
- Génération automatique d'un plan personnalisé
- Phases détaillées selon les priorités sélectionnées
- Téléchargement du plan en fichier texte
- Calcul des économies intégré

### Système de quêtes

- 6 quêtes progressives avec badges
- Suivi de progression par étape
- Statistiques globales
- Gamification pour encourager l'action

---



## 🔮 Améliorations Futures

### Court terme

- [ ] Intégration avec une API réelle pour les données d'établissements
- [ ] Export PDF du plan de migration
- [ ] Sauvegarde locale de la progression des quêtes
- [ ] Mode sombre

### Moyen terme

- [ ] Authentification utilisateur
- [ ] Système de contribution communautaire
- [ ] Simulateur de migration interactif
- [ ] Intégration de cartes réelles (Leaflet)

### Long terme

- [ ] Application mobile native
- [ ] Backend pour la gestion des établissements
- [ ] Tableau de bord administrateur
- [ ] Système de commentaires et échanges

---

## 📊 Données

Les données sont actuellement fictives pour la démo :
- 47 villages résistants
- 1,2M€ d'économies totales
- 12 500 ordinateurs libérés
- 15 témoignages

> 💡 **Note** : En production, ces données seraient récupérées depuis une API ou une base de données.

---

## 🤝 Contribution

Ce projet est développé pour la communauté NIRD. Les contributions sont les bienvenues !

### Comment contribuer

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📄 Licence

Ce projet est développé pour la communauté NIRD (Numérique Inclusif, Responsable et Durable).

---

## 👥 Auteurs

- **Équipe Siraj** - *Développement initial*

---

## 🙏 Remerciements

- La communauté NIRD pour l'inspiration
- Tous les établissements qui partagent leur expérience de migration
- Les contributeurs des logiciels libres présentés

---

**Rejoins la résistance numérique ! Ton établissement peut être le prochain village gaulois à tenir tête à l'empire.** 🛡️

---

*Dernière mise à jour : 2025*
