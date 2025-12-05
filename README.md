# 🏰 La Carte des Villages Résistants NIRD

Interface web immersive pour la communauté NIRD (Numérique Inclusif, Responsable et Durable) permettant d'explorer comment les établissements scolaires résistent à l'empire des Big Tech.

## 🎯 Fonctionnalités

### 6 Pages Principales

1. **🏠 Accueil - Le Village Gaulois**
   - Présentation engageante avec ton Astérix
   - Statistiques choc sur la dépendance aux Big Tech
   - Appel à rejoindre la résistance

2. **🗺️ Carte Interactive - La Gaule Résistante**
   - Carte de France stylisée avec points lumineux
   - Fiches établissements avec économies et alternatives
   - Statistiques globales de la communauté

3. **⚔️ Armurerie - L'Arsenal Libre**
   - Galerie d'alternatives aux GAFAM
   - Filtres par difficulté de migration
   - Économies estimées pour chaque outil

4. **👥 Conseil du Village - Témoignages des Druides**
   - Retours d'expérience d'établissements
   - Témoignages vidéo et texte
   - Statistiques de réussite

5. **🧙 École des Druides - La Forge du Savoir**
   - Ressources pédagogiques par niveau
   - Calculateur d'économies
   - Checklist de migration

6. **🎯 Quêtes - Défis de Résistance**
   - Parcours gamifié avec défis progressifs
   - Système de badges et progression
   - Étapes interactives

### 🎮 Système de Navigation OS

- **Mode Normal** : Page active en plein écran
- **Mode Alt+Tab** : Vue horizontale des 6 pages (Alt+Tab)
- **Mode Vue d'ensemble** : Grille 3x2 (Ctrl+Shift+Up)
- **Navigation tactile** : Swipe horizontal sur mobile
- **Navigation clavier** : Flèches gauche/droite

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement (ouvre automatiquement Chrome)
npm run dev

# Lancer sans ouvrir de navigateur automatiquement
npm run dev:no-browser

# Ouvrir http://localhost:3000
```

**Note** : Par défaut, `npm run dev` ouvre automatiquement Chrome. Si vous préférez un autre navigateur ou ne pas ouvrir de navigateur automatiquement, utilisez `npm run dev:no-browser` et ouvrez manuellement `http://localhost:3000` dans votre navigateur préféré.

## 🛠️ Technologies

- **Next.js 14** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styles
- **Framer Motion** - Animations
- **Lucide React** - Icônes

## 📱 Responsive

L'interface est entièrement responsive avec :
- Menu burger mobile
- Barre de navigation inférieure
- Gestes tactiles (swipe, tap, pinch)
- Adaptation portrait/landscape

## 🎨 Design

- **Palette** : Verts forestiers, bleus fiables, orangers chaleureux
- **Typographie** : Inter + Kalam (manuscrite)
- **Style** : Inspiré d'Astérix avec modernité
- **Animations** : Transitions fluides et micro-interactions

## 📝 Structure du Projet

```
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil avec navigation
│   └── globals.css         # Styles globaux
├── components/
│   ├── OSNavigator.tsx     # Système de navigation OS
│   └── pages/
│       ├── AccueilPage.tsx
│       ├── CartePage.tsx
│       ├── ArmureriePage.tsx
│       ├── ConseilPage.tsx
│       ├── EcolePage.tsx
│       └── QuetesPage.tsx
└── package.json
```

## 🎯 Raccourcis Clavier

- `Alt + Tab` : Basculer entre vue normale et Alt+Tab
- `Ctrl + Shift + Up` : Afficher la vue d'ensemble
- `Échap` : Revenir à la vue normale
- `Flèches gauche/droite` : Naviguer entre les pages

## 📊 Données

Les données sont actuellement fictives pour la démo :
- 47 villages résistants
- 1,2M€ d'économies totales
- 12 500 ordinateurs libérés
- 15 témoignages

## 🔮 Améliorations Futures

- Intégration avec une API réelle
- Authentification utilisateur
- Système de contribution communautaire
- Export PDF du plan de migration
- Simulateur de migration interactif

## 📄 Licence

Ce projet est développé pour la communauté NIRD.

---

**Rejoins la résistance numérique ! Ton établissement peut être le prochain village gaulois à tenir tête à l'empire.** 🛡️
