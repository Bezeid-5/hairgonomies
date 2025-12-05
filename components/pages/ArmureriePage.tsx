'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingDown, Star, ArrowRight, CheckCircle2 } from 'lucide-react'

interface Alternative {
  id: string
  nom: string
  logo: string
  remplace: string
  description: string
  difficulte: 'Facile' | 'Moyen' | 'Expert'
  economie: string
  lien: string
}

const alternatives: Alternative[] = [
  {
    id: 'linux-edu',
    nom: 'Linux Édu',
    logo: '',
    remplace: 'Windows',
    description: 'Distribution Linux spécialement conçue pour l\'éducation, basée sur Ubuntu. Interface intuitive, logiciels éducatifs pré-installés.',
    difficulte: 'Moyen',
    economie: '150€/PC/an',
    lien: 'https://linuxedu.org',
  },
  {
    id: 'libreoffice',
    nom: 'LibreOffice',
    logo: '',
    remplace: 'Microsoft Office',
    description: 'Suite bureautique complète : traitement de texte, tableur, présentation. Compatible avec les formats Microsoft.',
    difficulte: 'Facile',
    economie: '200€/licence/an',
    lien: 'https://fr.libreoffice.org',
  },
  {
    id: 'nextcloud',
    nom: 'Nextcloud',
    logo: '',
    remplace: 'Google Drive / OneDrive',
    description: 'Cloud privé auto-hébergé. Vos données restent en France, contrôle total sur la sécurité et la confidentialité.',
    difficulte: 'Expert',
    economie: '50€/utilisateur/an',
    lien: 'https://nextcloud.com',
  },
  {
    id: 'bigbluebutton',
    nom: 'BigBlueButton',
    logo: '',
    remplace: 'Microsoft Teams / Zoom',
    description: 'Solution de visioconférence open source, parfaite pour l\'enseignement à distance. Intégration avec Moodle.',
    difficulte: 'Moyen',
    economie: '100€/utilisateur/an',
    lien: 'https://bigbluebutton.org',
  },
  {
    id: 'gimp',
    nom: 'GIMP',
    logo: '',
    remplace: 'Adobe Photoshop',
    description: 'Éditeur d\'images professionnel. Toutes les fonctionnalités nécessaires pour la création graphique.',
    difficulte: 'Facile',
    economie: '300€/licence/an',
    lien: 'https://www.gimp.org',
  },
  {
    id: 'inkscape',
    nom: 'Inkscape',
    logo: '',
    remplace: 'Adobe Illustrator',
    description: 'Éditeur de graphiques vectoriels. Parfait pour créer logos, illustrations et diagrammes.',
    difficulte: 'Moyen',
    economie: '300€/licence/an',
    lien: 'https://inkscape.org',
  },
  {
    id: 'audacity',
    nom: 'Audacity',
    logo: '',
    remplace: 'Adobe Audition',
    description: 'Éditeur audio gratuit et open source. Enregistrement, montage et traitement du son.',
    difficulte: 'Facile',
    economie: '200€/licence/an',
    lien: 'https://www.audacityteam.org',
  },
  {
    id: 'moodle',
    nom: 'Moodle',
    logo: '',
    remplace: 'Google Classroom',
    description: 'Plateforme d\'apprentissage en ligne. Gestion de cours, devoirs, évaluations. Hébergement possible en France.',
    difficulte: 'Moyen',
    economie: '80€/utilisateur/an',
    lien: 'https://moodle.org',
  },
]

export default function ArmureriePage() {
  const [selectedAlternative, setSelectedAlternative] = useState<Alternative | null>(null)
  const [filter, setFilter] = useState<'all' | 'Facile' | 'Moyen' | 'Expert'>('all')

  const filteredAlternatives = filter === 'all' 
    ? alternatives 
    : alternatives.filter(a => a.difficulte === filter)

  const getDifficulteColor = (difficulte: string) => {
    switch (difficulte) {
      case 'Facile': return 'bg-forest-green-100 text-forest-green-800'
      case 'Moyen': return 'bg-warm-orange-100 text-warm-orange-800'
      case 'Expert': return 'bg-trust-blue-100 text-trust-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-green-50 via-trust-blue-50 to-warm-orange-50 pb-4 lg:pb-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-green-600 to-forest-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-handwritten font-bold mb-4">
            L&apos;Arsenal Libre
          </h1>
          <p className="text-xl opacity-90">
            Découvrez les alternatives libres aux outils propriétaires
          </p>
        </div>
      </div>

      {/* Filtres */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              filter === 'all'
                ? 'bg-forest-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Tous
          </button>
          <button
            onClick={() => setFilter('Facile')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              filter === 'Facile'
                ? 'bg-forest-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Facile
          </button>
          <button
            onClick={() => setFilter('Moyen')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              filter === 'Moyen'
                ? 'bg-warm-orange-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Moyen
          </button>
          <button
            onClick={() => setFilter('Expert')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              filter === 'Expert'
                ? 'bg-trust-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Expert
          </button>
        </div>
      </div>

      {/* Grille des alternatives */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlternatives.map((alt, index) => (
            <motion.div
              key={alt.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedAlternative(alt)}
              className="bg-white rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-all border-2 border-transparent hover:border-forest-green-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficulteColor(alt.difficulte)}`}>
                  {alt.difficulte}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-forest-green-800 mb-2">
                {alt.nom}
              </h3>
              
              <div className="mb-3">
                <span className="text-sm text-gray-600">Remplace </span>
                <span className="text-sm font-semibold text-warm-orange-700">
                  {alt.remplace}
                </span>
              </div>
              
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {alt.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-trust-blue-700">
                  <TrendingDown className="w-4 h-4" />
                  <span className="font-semibold text-sm">{alt.economie}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-forest-green-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal détail alternative */}
      {selectedAlternative && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedAlternative(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-1">
                <h2 className="text-3xl font-handwritten font-bold text-forest-green-800 mb-2">
                  {selectedAlternative.nom}
                </h2>
                <div className="mb-3">
                  <span className="text-gray-600">Remplace </span>
                  <span className="font-semibold text-warm-orange-700">
                    {selectedAlternative.remplace}
                  </span>
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getDifficulteColor(selectedAlternative.difficulte)}`}>
                  Difficulté : {selectedAlternative.difficulte}
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Description</h3>
                <p className="text-gray-700">{selectedAlternative.description}</p>
              </div>

              <div className="bg-gradient-to-r from-trust-blue-50 to-forest-green-50 rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-trust-blue-600" />
                  <span className="font-bold text-trust-blue-700">
                    Économie estimée : {selectedAlternative.economie}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={selectedAlternative.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-forest-green-600 text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-forest-green-700 transition-all"
              >
                Visiter le site officiel
              </a>
              <button
                onClick={() => setSelectedAlternative(null)}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all"
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

