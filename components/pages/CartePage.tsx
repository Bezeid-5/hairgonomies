'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Euro, Users, CheckCircle2, X } from 'lucide-react'

interface Etablissement {
  id: number
  nom: string
  ville: string
  departement: string
  lat: number
  lng: number
  economie: number
  ordinateurs: number
  alternatives: string[]
}

// Données fictives pour la démo
const etablissements: Etablissement[] = [
  {
    id: 1,
    nom: 'Collège Jules Verne',
    ville: 'Paris',
    departement: '75',
    lat: 48.8566,
    lng: 2.3522,
    economie: 45000,
    ordinateurs: 150,
    alternatives: ['Linux Édu', 'LibreOffice', 'Nextcloud'],
  },
  {
    id: 2,
    nom: 'Lycée Victor Hugo',
    ville: 'Lyon',
    departement: '69',
    lat: 45.7640,
    lng: 4.8357,
    economie: 62000,
    ordinateurs: 200,
    alternatives: ['Linux Édu', 'LibreOffice', 'BigBlueButton'],
  },
  {
    id: 3,
    nom: 'École Primaire Marie Curie',
    ville: 'Marseille',
    departement: '13',
    lat: 43.2965,
    lng: 5.3698,
    economie: 28000,
    ordinateurs: 80,
    alternatives: ['Linux Édu', 'LibreOffice'],
  },
  // Ajoutez plus d'établissements...
]

export default function CartePage() {
  const [selectedEtablissement, setSelectedEtablissement] = useState<Etablissement | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  // Carte stylisée de la France (simplifiée)
  const totalEconomie = etablissements.reduce((sum, e) => sum + e.economie, 0)
  const totalOrdinateurs = etablissements.reduce((sum, e) => sum + e.ordinateurs, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-green-50 via-trust-blue-50 to-warm-orange-50 pb-4 lg:pb-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-green-600 to-forest-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-handwritten font-bold mb-4">
            🗺️ La Gaule Résistante
          </h1>
          <p className="text-xl opacity-90">
            Découvrez les établissements qui ont rejoint la résistance numérique
          </p>
        </div>
      </div>

      {/* Statistiques globales */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="text-3xl font-bold text-forest-green-700 mb-2">
              {etablissements.length}
            </div>
            <div className="text-gray-600">Villages Résistants</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="text-3xl font-bold text-trust-blue-700 mb-2">
              {(totalEconomie / 1000).toFixed(0)}k€
            </div>
            <div className="text-gray-600">Économies totales</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="text-3xl font-bold text-warm-orange-700 mb-2">
              {totalOrdinateurs.toLocaleString()}
            </div>
            <div className="text-gray-600">Ordinateurs libérés</div>
          </motion.div>
        </div>
      </div>

      {/* Carte interactive */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-forest-green-800 mb-6">
            Carte de France - Villages Résistants
          </h2>
          
          {/* Carte simplifiée avec points */}
          <div className="relative bg-gradient-to-br from-forest-green-100 to-trust-blue-100 rounded-xl h-96 md:h-[500px] overflow-hidden">
            {/* Points lumineux pour chaque établissement */}
            {etablissements.map((etab) => (
              <motion.button
                key={etab.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: etab.id * 0.1 }}
                whileHover={{ scale: 1.2 }}
                onClick={() => setSelectedEtablissement(etab)}
                onMouseEnter={() => setHoveredId(etab.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`absolute rounded-full transition-all ${
                  hoveredId === etab.id || selectedEtablissement?.id === etab.id
                    ? 'w-6 h-6 bg-warm-orange-500 ring-4 ring-warm-orange-200'
                    : 'w-4 h-4 bg-forest-green-500 ring-2 ring-forest-green-200'
                }`}
                style={{
                  left: `${20 + (etab.lng - 2) * 15}%`,
                  top: `${30 + (48.8 - etab.lat) * 10}%`,
                }}
                title={etab.nom}
              >
                <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-75" />
              </motion.button>
            ))}
            
            {/* Légende */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-forest-green-500 rounded-full" />
                <span>Village résistant</span>
              </div>
              <div className="text-gray-600 text-xs">
                Cliquez sur un point pour voir les détails
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Liste des établissements */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-forest-green-800 mb-6">
          Tous les Villages Résistants
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {etablissements.map((etab) => (
            <motion.div
              key={etab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedEtablissement(etab)}
              className="bg-white rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-all border-2 border-transparent hover:border-forest-green-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg text-forest-green-800">
                    {etab.nom}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {etab.ville} ({etab.departement})
                  </p>
                </div>
                <MapPin className="w-5 h-5 text-forest-green-600" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-trust-blue-700">
                  <Euro className="w-4 h-4" />
                  <span className="font-semibold">
                    {(etab.economie / 1000).toFixed(0)}k€ économisés
                  </span>
                </div>
                <div className="flex items-center gap-2 text-warm-orange-700">
                  <Users className="w-4 h-4" />
                  <span>{etab.ordinateurs} ordinateurs</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal fiche établissement */}
      <AnimatePresence>
        {selectedEtablissement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEtablissement(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-handwritten font-bold text-forest-green-800 mb-2">
                    {selectedEtablissement.nom}
                  </h2>
                  <p className="text-gray-600">
                    {selectedEtablissement.ville} ({selectedEtablissement.departement})
                  </p>
                </div>
                <button
                  onClick={() => setSelectedEtablissement(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-trust-blue-50 to-forest-green-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Euro className="w-6 h-6 text-trust-blue-600" />
                    <span className="text-2xl font-bold text-trust-blue-700">
                      {(selectedEtablissement.economie / 1000).toFixed(0)}k€
                    </span>
                  </div>
                  <p className="text-gray-700">
                    Économies réalisées grâce à la migration vers le libre
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-warm-orange-600" />
                    Infrastructure
                  </h3>
                  <p className="text-gray-700">
                    <strong>{selectedEtablissement.ordinateurs} ordinateurs</strong> migrés vers 
                    des solutions libres
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-forest-green-600" />
                    Alternatives adoptées
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEtablissement.alternatives.map((alt) => (
                      <span
                        key={alt}
                        className="bg-forest-green-100 text-forest-green-800 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {alt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

