'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'

interface Temoignage {
  id: number
  auteur: string
  etablissement: string
  ville: string
  type: 'video' | 'texte'
  titre: string
  contenu: string
  economie: number
  ordinateurs: number
  date: string
  image?: string
}

const temoignages: Temoignage[] = [
  {
    id: 1,
    auteur: 'Marie Dubois',
    etablissement: 'Collège Jules Verne',
    ville: 'Paris',
    type: 'texte',
    titre: 'Comment on a migré 200 PC vers Linux',
    contenu: 'Nous avons commencé par une salle pilote avec 20 ordinateurs. Après 3 mois de test, les enseignants étaient convaincus. La migration complète a pris 6 mois, mais nous avons économisé 45 000€ la première année. Les élèves adorent la stabilité et la rapidité de Linux Édu.',
    economie: 45000,
    ordinateurs: 200,
    date: '2023-09-15',
  },
  {
    id: 2,
    auteur: 'Jean Martin',
    etablissement: 'Lycée Victor Hugo',
    ville: 'Lyon',
    type: 'texte',
    titre: 'Économie de 15 000€ avec le libre',
    contenu: 'En remplaçant Office par LibreOffice et en déployant Nextcloud, nous avons réduit nos coûts de 15 000€ par an. Nos données sont maintenant hébergées en France, ce qui rassure les parents. La formation des enseignants a été plus simple que prévu.',
    economie: 15000,
    ordinateurs: 150,
    date: '2023-11-20',
  },
  {
    id: 3,
    auteur: 'Sophie Bernard',
    etablissement: 'École Primaire Marie Curie',
    ville: 'Marseille',
    type: 'texte',
    titre: 'Nos élèves créent leurs outils maintenant',
    contenu: 'Avec les logiciels libres, nos élèves de CM2 ont appris à modifier et adapter les outils à leurs besoins. C\'est une vraie révolution pédagogique ! Ils comprennent mieux comment fonctionnent les ordinateurs.',
    economie: 28000,
    ordinateurs: 80,
    date: '2024-01-10',
  },
  {
    id: 4,
    auteur: 'Pierre Leroy',
    etablissement: 'Collège Albert Einstein',
    ville: 'Toulouse',
    type: 'video',
    titre: 'Témoignage vidéo : Migration complète en 4 mois',
    contenu: 'Dans cette vidéo de 15 minutes, je partage notre expérience de migration complète vers le libre. Retour d\'expérience, difficultés rencontrées, solutions trouvées.',
    economie: 62000,
    ordinateurs: 250,
    date: '2023-12-05',
  },
  {
    id: 5,
    auteur: 'Claire Moreau',
    etablissement: 'Lycée Technique Paul Langevin',
    ville: 'Nantes',
    type: 'texte',
    titre: 'BigBlueButton : la solution pour nos cours à distance',
    contenu: 'Nous avons remplacé Teams par BigBlueButton. Plus de contrôle sur nos données, intégration parfaite avec Moodle, et des économies significatives. Les enseignants apprécient la simplicité.',
    economie: 12000,
    ordinateurs: 100,
    date: '2024-02-18',
  },
]

export default function ConseilPage() {
  const [selectedTemoignage, setSelectedTemoignage] = useState<Temoignage | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-green-50 via-trust-blue-50 to-warm-orange-50 pb-4 lg:pb-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-green-600 to-forest-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-handwritten font-bold mb-4">
            Conseil du Village
          </h1>
          <p className="text-xl opacity-90">
            Témoignages des Druides - Retours d'expérience de la résistance numérique
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-lg text-center"
        >
          <p className="text-lg text-gray-700">
            Découvrez comment d'autres établissements ont réussi leur migration vers le libre. 
            Leurs expériences, leurs conseils, leurs économies réalisées.
          </p>
        </motion.div>
      </div>

      {/* Grille des témoignages */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {temoignages.map((temoignage, index) => (
            <motion.div
              key={temoignage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedTemoignage(temoignage)}
              className="bg-white rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-all border-2 border-transparent hover:border-forest-green-300"
            >
              <div className="flex items-start justify-between mb-4">
                {temoignage.type === 'video' && (
                  <div className="w-10 h-10 bg-trust-blue-100 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-trust-blue-600" />
                  </div>
                )}
                <span className="text-xs text-gray-500">
                  {new Date(temoignage.date).toLocaleDateString('fr-FR')}
                </span>
              </div>

              <h3 className="text-xl font-bold text-forest-green-800 mb-3">
                {temoignage.titre}
              </h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {temoignage.contenu}
              </p>

              <div className="space-y-1 mb-4">
                <div className="text-sm font-semibold text-forest-green-800">
                  {temoignage.auteur}
                </div>
                <div className="text-sm text-gray-600">
                  {temoignage.etablissement}, {temoignage.ville}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="text-trust-blue-700 font-semibold text-sm">
                  {(temoignage.economie / 1000).toFixed(0)}k€ économisés
                </div>
                <div className="text-warm-orange-700 text-sm">
                  {temoignage.ordinateurs} PC
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal détail témoignage */}
      <AnimatePresence>
        {selectedTemoignage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTemoignage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    {selectedTemoignage.type === 'video' && (
                      <div className="w-10 h-10 bg-trust-blue-100 rounded-full flex items-center justify-center">
                        <Play className="w-5 h-5 text-trust-blue-600" />
                      </div>
                    )}
                    <h2 className="text-3xl font-handwritten font-bold text-forest-green-800">
                      {selectedTemoignage.titre}
                    </h2>
                  </div>
                  <div className="text-gray-600">
                    Par <strong>{selectedTemoignage.auteur}</strong> - {selectedTemoignage.etablissement}, {selectedTemoignage.ville}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {new Date(selectedTemoignage.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTemoignage(null)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Fermer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {selectedTemoignage.type === 'video' && (
                <div className="bg-gray-100 rounded-xl p-8 mb-6 text-center">
                  <Play className="w-16 h-16 text-trust-blue-600 mx-auto mb-4" />
                  <p className="text-gray-700">
                    Vidéo de témoignage disponible sur la chaîne NIRD
                  </p>
                  <button className="mt-4 bg-trust-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-trust-blue-700 transition-all">
                    Voir la vidéo
                  </button>
                </div>
              )}

              <div className="prose max-w-none mb-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {selectedTemoignage.contenu}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-gradient-to-r from-trust-blue-50 to-forest-green-50 rounded-xl p-6">
                <div>
                  <div className="font-bold text-trust-blue-700 text-lg mb-1">
                    {(selectedTemoignage.economie / 1000).toFixed(0)}k€ économisés
                  </div>
                  <p className="text-sm text-gray-600">Économies annuelles réalisées</p>
                </div>
                <div>
                  <div className="font-bold text-warm-orange-700 text-lg mb-1">
                    {selectedTemoignage.ordinateurs} ordinateurs
                  </div>
                  <p className="text-sm text-gray-600">Infrastructure migrée</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

