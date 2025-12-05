'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Calculator, FileText, Download, GraduationCap } from 'lucide-react'

interface Ressource {
  id: string
  niveau: 'Novice' | 'Initié' | 'Expert'
  titre: string
  description: string
  type: 'guide' | 'video' | 'outil'
  duree?: string
}

const ressources: Ressource[] = [
  {
    id: 'linux-basics',
    niveau: 'Novice',
    titre: 'C\'est quoi Linux ?',
    description: 'Introduction complète à Linux pour les débutants. Découvrez l\'histoire, les avantages et les bases du système d\'exploitation libre.',
    type: 'guide',
    duree: '30 min',
  },
  {
    id: 'migration-docs',
    niveau: 'Initié',
    titre: 'Migrer ses documents vers LibreOffice',
    description: 'Guide pas à pas pour convertir vos documents Word, Excel et PowerPoint vers LibreOffice sans perdre de formatage.',
    type: 'guide',
    duree: '45 min',
  },
  {
    id: 'deploy-nextcloud',
    niveau: 'Expert',
    titre: 'Déployer un serveur Nextcloud',
    description: 'Tutoriel technique complet pour installer et configurer Nextcloud sur votre propre serveur. Sécurité, performance, maintenance.',
    type: 'guide',
    duree: '2h',
  },
  {
    id: 'linux-install',
    niveau: 'Initié',
    titre: 'Installer Linux Édu sur un PC',
    description: 'Vidéo tutoriel montrant comment installer Linux Édu étape par étape. Configuration réseau, pilotes, logiciels éducatifs.',
    type: 'video',
    duree: '20 min',
  },
  {
    id: 'formation-collegues',
    niveau: 'Initié',
    titre: 'Former ses collègues au libre',
    description: 'Kit de formation pour organiser des sessions de sensibilisation et de formation aux outils libres dans votre établissement.',
    type: 'guide',
    duree: '1h',
  },
  {
    id: 'troubleshooting',
    niveau: 'Expert',
    titre: 'Résolution de problèmes courants',
    description: 'Guide de dépannage pour les problèmes les plus fréquents lors d\'une migration vers le libre. Solutions et astuces.',
    type: 'guide',
    duree: '1h30',
  },
]

export default function EcolePage() {
  const [selectedNiveau, setSelectedNiveau] = useState<'all' | 'Novice' | 'Initié' | 'Expert'>('all')
  const [showCalculator, setShowCalculator] = useState(false)
  const [nombrePC, setNombrePC] = useState('100')
  const [showChecklist, setShowChecklist] = useState(false)

  const filteredRessources = selectedNiveau === 'all'
    ? ressources
    : ressources.filter(r => r.niveau === selectedNiveau)

  const calculerEconomie = () => {
    const pc = parseInt(nombrePC) || 0
    // Estimation : 150€/PC/an avec Linux vs Windows
    const economieParPC = 150
    const economieAnnuelle = pc * economieParPC
    const economie5Ans = economieAnnuelle * 5
    return { economieAnnuelle, economie5Ans }
  }

  const { economieAnnuelle, economie5Ans } = calculerEconomie()

  const getNiveauColor = (niveau: string) => {
    switch (niveau) {
      case 'Novice': return 'bg-forest-green-100 text-forest-green-800'
      case 'Initié': return 'bg-warm-orange-100 text-warm-orange-800'
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
            École des Druides
          </h1>
          <p className="text-xl opacity-90">
            La Forge du Savoir - Ressources pédagogiques pour la migration
          </p>
        </div>
      </div>

      {/* Outils rapides */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCalculator(!showCalculator)}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-trust-blue-300"
          >
            <Calculator className="w-8 h-8 text-trust-blue-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Calculateur d'économies</h3>
            <p className="text-gray-600 text-sm">
              Estimez les économies réalisables avec Linux
            </p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowChecklist(!showChecklist)}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-forest-green-300"
          >
            <FileText className="w-8 h-8 text-forest-green-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Checklist de migration</h3>
            <p className="text-gray-600 text-sm">
              Planifiez votre migration étape par étape
            </p>
          </motion.button>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-warm-orange-300"
          >
            <Download className="w-8 h-8 text-warm-orange-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Générateur de plan</h3>
            <p className="text-gray-600 text-sm">
              Créez votre plan de migration personnalisé
            </p>
          </motion.a>
        </div>
      </div>

      {/* Calculateur d'économies */}
      {showCalculator && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto px-4 py-8"
        >
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-forest-green-800 mb-6">
              Calculateur d'économies
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nombre d'ordinateurs
                </label>
                <input
                  type="number"
                  value={nombrePC}
                  onChange={(e) => setNombrePC(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green-500 focus:border-transparent"
                  placeholder="100"
                />
              </div>
              <div className="bg-gradient-to-r from-trust-blue-50 to-forest-green-50 rounded-xl p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Économie annuelle estimée :</span>
                    <span className="text-2xl font-bold text-trust-blue-700">
                      {economieAnnuelle.toLocaleString()}€
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Économie sur 5 ans :</span>
                    <span className="text-2xl font-bold text-forest-green-700">
                      {economie5Ans.toLocaleString()}€
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                * Estimation basée sur une économie moyenne de 150€/PC/an (licences Windows + Office)
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Checklist de migration */}
      {showChecklist && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto px-4 py-8"
        >
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-forest-green-800 mb-6">
              Checklist de migration
            </h2>
            <div className="space-y-3">
              {[
                'Audit de l\'infrastructure existante',
                'Formation de l\'équipe technique',
                'Test pilote sur une salle',
                'Migration des documents utilisateurs',
                'Installation des alternatives libres',
                'Formation des enseignants',
                'Support et documentation',
              ].map((etape, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="text-gray-700">{etape}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Filtres par niveau */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setSelectedNiveau('all')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedNiveau === 'all'
                ? 'bg-forest-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Tous les niveaux
          </button>
          <button
            onClick={() => setSelectedNiveau('Novice')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedNiveau === 'Novice'
                ? 'bg-forest-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Novice
          </button>
          <button
            onClick={() => setSelectedNiveau('Initié')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedNiveau === 'Initié'
                ? 'bg-warm-orange-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Initié
          </button>
          <button
            onClick={() => setSelectedNiveau('Expert')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedNiveau === 'Expert'
                ? 'bg-trust-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Expert
          </button>
        </div>

        {/* Liste des ressources */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRessources.map((ressource, index) => (
            <motion.div
              key={ressource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-forest-green-300"
            >
              <div className="flex items-start justify-between mb-4">
                {ressource.type === 'video' ? (
                  <div className="w-12 h-12 bg-trust-blue-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-trust-blue-600" />
                  </div>
                ) : (
                  <BookOpen className="w-8 h-8 text-forest-green-600" />
                )}
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getNiveauColor(ressource.niveau)}`}>
                  {ressource.niveau}
                </span>
              </div>

              <h3 className="text-xl font-bold text-forest-green-800 mb-3">
                {ressource.titre}
              </h3>

              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {ressource.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                {ressource.duree && (
                  <span className="text-sm text-gray-600">
                    {ressource.duree}
                  </span>
                )}
                <button className="text-forest-green-600 font-semibold text-sm hover:text-forest-green-700 flex items-center gap-1">
                  Accéder <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

