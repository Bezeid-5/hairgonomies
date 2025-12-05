'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, CheckCircle2, Circle, Target, Award, TrendingUp } from 'lucide-react'

interface Quete {
  id: number
  titre: string
  description: string
  difficulte: 'Facile' | 'Moyen' | 'Difficile'
  badge: string
  etapes: string[]
  recompense: string
}

const quetes: Quete[] = [
  {
    id: 1,
    titre: 'Organiser une journée "Découverte du Libre"',
    description: 'Organisez un événement dans votre établissement pour sensibiliser aux alternatives libres. Invitez les enseignants, les élèves et les parents.',
    difficulte: 'Facile',
    badge: '',
    etapes: [
      'Planifier la date et le lieu',
      'Préparer des démonstrations',
      'Inviter les participants',
      'Animer la journée',
      'Recueillir les retours',
    ],
    recompense: 'Badge "Semeur de Liberté"',
  },
  {
    id: 2,
    titre: 'Migrer 1 salle informatique vers Linux',
    description: 'Commencez par une salle pilote. Installez Linux Édu sur tous les ordinateurs et formez les utilisateurs.',
    difficulte: 'Moyen',
    badge: '',
    etapes: [
      'Choisir la salle pilote',
      'Installer Linux Édu',
      'Migrer les documents',
      'Former les utilisateurs',
      'Documenter le processus',
    ],
    recompense: 'Badge "Pionnier du Libre"',
  },
  {
    id: 3,
    titre: 'Former 5 collègues aux alternatives',
    description: 'Partagez vos connaissances ! Formez au moins 5 collègues à l\'utilisation des outils libres.',
    difficulte: 'Moyen',
    badge: '',
    etapes: [
      'Identifier les collègues intéressés',
      'Préparer le contenu de formation',
      'Organiser les sessions',
      'Fournir le support',
      'Valider les acquis',
    ],
    recompense: 'Badge "Druide Formateur"',
  },
  {
    id: 4,
    titre: 'Documenter sa migration sur la Forge NIRD',
    description: 'Partagez votre expérience ! Rédigez un guide ou un témoignage pour aider d\'autres établissements.',
    difficulte: 'Facile',
    badge: '',
    etapes: [
      'Rédiger le document',
      'Ajouter des captures d\'écran',
      'Partager sur la Forge NIRD',
      'Répondre aux questions',
      'Mettre à jour si nécessaire',
    ],
    recompense: 'Badge "Scribe de la Résistance"',
  },
  {
    id: 5,
    titre: 'Déployer Nextcloud dans l\'établissement',
    description: 'Installez et configurez Nextcloud pour remplacer Google Drive ou OneDrive. Hébergez vos données en France !',
    difficulte: 'Difficile',
    badge: '',
    etapes: [
      'Préparer le serveur',
      'Installer Nextcloud',
      'Configurer la sécurité',
      'Migrer les données',
      'Former les utilisateurs',
    ],
    recompense: 'Badge "Gardien des Nuages"',
  },
  {
    id: 6,
    titre: 'Migrer 100% de l\'infrastructure',
    description: 'Le défi ultime ! Migrez l\'ensemble de votre infrastructure vers le libre. Système d\'exploitation, bureautique, cloud, communication.',
    difficulte: 'Difficile',
    badge: '',
    etapes: [
      'Audit complet',
      'Planification détaillée',
      'Migration progressive',
      'Formation globale',
      'Documentation complète',
    ],
    recompense: 'Badge "Maître de la Résistance"',
  },
]

export default function QuetesPage() {
  const [progress, setProgress] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  })
  const [completed, setCompleted] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  })

  const totalProgress = Object.values(progress).reduce((sum, p) => sum + p, 0) / (quetes.length * 100) * 100
  const badgesUnlocked = Object.values(completed).filter(Boolean).length

  const toggleEtape = (queteId: number, etapeIndex: number) => {
    const quete = quetes.find(q => q.id === queteId)
    if (!quete) return

    const currentProgress = progress[queteId] || 0
    const etapeProgress = 100 / quete.etapes.length
    const newProgress = Math.min(100, currentProgress + etapeProgress)
    
    setProgress(prev => ({ ...prev, [queteId]: newProgress }))
    
    if (newProgress >= 100) {
      setCompleted(prev => ({ ...prev, [queteId]: true }))
    }
  }

  const getDifficulteColor = (difficulte: string) => {
    switch (difficulte) {
      case 'Facile': return 'bg-forest-green-100 text-forest-green-800'
      case 'Moyen': return 'bg-warm-orange-100 text-warm-orange-800'
      case 'Difficile': return 'bg-trust-blue-100 text-trust-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-green-50 via-trust-blue-50 to-warm-orange-50 pb-4 lg:pb-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-green-600 to-forest-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-handwritten font-bold mb-4">
            Quêtes - Défis de Résistance
          </h1>
          <p className="text-xl opacity-90">
            Parcours gamifié pour passer à l'action et rejoindre la résistance
          </p>
        </div>
      </div>

      {/* Statistiques globales */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-8 h-8 text-trust-blue-600" />
              <div className="text-3xl font-bold text-trust-blue-700">
                {totalProgress.toFixed(0)}%
              </div>
            </div>
            <div className="text-gray-600">Progression globale</div>
            <div className="mt-3 bg-gray-200 rounded-full h-2">
              <div
                className="bg-trust-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${totalProgress}%` }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              <Award className="w-8 h-8 text-warm-orange-600" />
              <div className="text-3xl font-bold text-warm-orange-700">
                {badgesUnlocked}
              </div>
            </div>
            <div className="text-gray-600">Badges débloqués</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-8 h-8 text-forest-green-600" />
              <div className="text-3xl font-bold text-forest-green-700">
                {quetes.length}
              </div>
            </div>
            <div className="text-gray-600">Quêtes disponibles</div>
          </motion.div>
        </div>
      </div>

      {/* Liste des quêtes */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          {quetes.map((quete, index) => {
            const queteProgress = progress[quete.id] || 0
            const isCompleted = completed[quete.id]

            return (
              <motion.div
                key={quete.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all ${
                  isCompleted
                    ? 'border-warm-orange-400 bg-warm-orange-50'
                    : 'border-transparent hover:border-forest-green-300'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-forest-green-800">
                      {quete.titre}
                    </h3>
                    <span className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold ${getDifficulteColor(quete.difficulte)}`}>
                      {quete.difficulte}
                    </span>
                  </div>
                  {isCompleted && (
                    <Trophy className="w-8 h-8 text-warm-orange-600" />
                  )}
                </div>

                <p className="text-gray-700 mb-4">{quete.description}</p>

                {/* Barre de progression */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progression</span>
                    <span className="text-sm font-semibold text-forest-green-700">
                      {queteProgress.toFixed(0)}%
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all ${
                        isCompleted ? 'bg-warm-orange-500' : 'bg-forest-green-500'
                      }`}
                      style={{ width: `${queteProgress}%` }}
                    />
                  </div>
                </div>

                {/* Étapes */}
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Étapes :</h4>
                  {quete.etapes.map((etape, etapeIndex) => {
                    const etapeProgress = (etapeIndex + 1) * (100 / quete.etapes.length)
                    const isEtapeCompleted = queteProgress >= etapeProgress

                    return (
                      <div
                        key={etapeIndex}
                        onClick={() => toggleEtape(quete.id, etapeIndex)}
                        className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all ${
                          isEtapeCompleted
                            ? 'bg-forest-green-100'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        {isEtapeCompleted ? (
                          <CheckCircle2 className="w-5 h-5 text-forest-green-600 flex-shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                        <span
                          className={`text-sm ${
                            isEtapeCompleted
                              ? 'text-forest-green-800 line-through'
                              : 'text-gray-700'
                          }`}
                        >
                          {etape}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* Récompense */}
                {isCompleted && (
                  <div className="bg-gradient-to-r from-warm-orange-100 to-warm-orange-200 rounded-lg p-3 mt-4">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-warm-orange-700" />
                      <span className="font-semibold text-warm-orange-800">
                        {quete.recompense} débloqué !
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

