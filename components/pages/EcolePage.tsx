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
  const [showPlanGenerator, setShowPlanGenerator] = useState(false)
  const [checklistItems, setChecklistItems] = useState<Record<number, boolean>>({})
  
  // États pour le générateur de plan
  const [nomEtablissement, setNomEtablissement] = useState('')
  const [nombrePCPlan, setNombrePCPlan] = useState('')
  const [dateDebut, setDateDebut] = useState('')
  const [priorites, setPriorites] = useState<Record<string, boolean>>({})
  const [planGenere, setPlanGenere] = useState<any>(null)

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

  const genererPlan = () => {
    const pc = parseInt(nombrePCPlan) || 0
    const prioritesSelectionnees = Object.keys(priorites).filter(p => priorites[p])
    
    // Calculer les économies estimées
    const economieParPC = 150
    const economieAnnuelle = pc * economieParPC
    const economie5Ans = economieAnnuelle * 5

    // Générer les étapes du plan selon les priorités
    const etapes: string[] = []
    
    if (prioritesSelectionnees.includes('Système d\'exploitation')) {
      etapes.push('Phase 1 : Migration vers Linux Édu (2-3 mois)')
      etapes.push('  • Installation sur une salle pilote')
      etapes.push('  • Formation des utilisateurs')
      etapes.push('  • Déploiement progressif')
    }
    
    if (prioritesSelectionnees.includes('Bureautique')) {
      etapes.push('Phase 2 : Migration vers LibreOffice (1-2 mois)')
      etapes.push('  • Conversion des documents existants')
      etapes.push('  • Formation aux alternatives')
      etapes.push('  • Support et documentation')
    }
    
    if (prioritesSelectionnees.includes('Cloud/Stockage')) {
      etapes.push('Phase 3 : Déploiement Nextcloud (2-3 mois)')
      etapes.push('  • Installation du serveur')
      etapes.push('  • Migration des données')
      etapes.push('  • Configuration de la sécurité')
    }
    
    if (prioritesSelectionnees.includes('Communication')) {
      etapes.push('Phase 4 : Migration vers BigBlueButton (1 mois)')
      etapes.push('  • Installation et configuration')
      etapes.push('  • Formation des enseignants')
      etapes.push('  • Intégration avec Moodle')
    }
    
    if (prioritesSelectionnees.includes('Graphisme')) {
      etapes.push('Phase 5 : Migration vers GIMP/Inkscape (1 mois)')
      etapes.push('  • Installation des logiciels')
      etapes.push('  • Formation aux outils')
      etapes.push('  • Support continu')
    }

    const plan = {
      etablissement: nomEtablissement || 'Votre établissement',
      nombrePC: pc,
      dateDebut: dateDebut || new Date().toISOString().split('T')[0],
      priorites: prioritesSelectionnees,
      economieAnnuelle,
      economie5Ans,
      etapes,
      dureeTotale: `${Math.ceil(etapes.length / 3)}-${Math.ceil(etapes.length / 3) + 2} mois`
    }

    setPlanGenere(plan)
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
            <h3 className="font-bold text-lg mb-2">Calculateur d&apos;économies</h3>
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

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowPlanGenerator(!showPlanGenerator)}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-warm-orange-300"
          >
            <Download className="w-8 h-8 text-warm-orange-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Générateur de plan</h3>
            <p className="text-gray-600 text-sm">
              Créez votre plan de migration personnalisé
            </p>
          </motion.button>
        </div>
      </div>

      {/* Calculateur d&apos;économies */}
      {showCalculator && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto px-4 py-8"
        >
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-forest-green-800 mb-6">
              Calculateur d&apos;économies
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nombre d&apos;ordinateurs
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
              <button
                onClick={() => setShowCalculator(false)}
                className="mt-4 w-full bg-forest-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-forest-green-700 transition-all"
              >
                Fermer
              </button>
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
                  <input
                    type="checkbox"
                    id={`checklist-${index}`}
                    checked={checklistItems[index] || false}
                    onChange={(e) => setChecklistItems(prev => ({ ...prev, [index]: e.target.checked }))}
                    className="w-5 h-5 cursor-pointer"
                    aria-label={etape}
                  />
                  <span className={`text-gray-700 ${checklistItems[index] ? 'line-through opacity-60' : ''}`}>
                    {etape}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowChecklist(false)}
              className="mt-6 w-full bg-forest-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-forest-green-700 transition-all"
            >
              Fermer
            </button>
          </div>
        </motion.div>
      )}

      {/* Générateur de plan */}
      {showPlanGenerator && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto px-4 py-8"
        >
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-forest-green-800 mb-6">
              Générateur de plan de migration
            </h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="nom-etablissement" className="block text-gray-700 font-semibold mb-2">
                  Nom de l&apos;établissement
                </label>
                <input
                  id="nom-etablissement"
                  type="text"
                  value={nomEtablissement}
                  onChange={(e) => setNomEtablissement(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green-500 focus:border-transparent"
                  placeholder="Ex: Collège Jules Verne"
                />
              </div>
              <div>
                <label htmlFor="nombre-pc" className="block text-gray-700 font-semibold mb-2">
                  Nombre d&apos;ordinateurs
                </label>
                <input
                  id="nombre-pc"
                  type="number"
                  value={nombrePCPlan}
                  onChange={(e) => setNombrePCPlan(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green-500 focus:border-transparent"
                  placeholder="100"
                />
              </div>
              <div>
                <label htmlFor="date-debut" className="block text-gray-700 font-semibold mb-2">
                  Date de début prévue
                </label>
                <input
                  id="date-debut"
                  type="date"
                  value={dateDebut}
                  onChange={(e) => setDateDebut(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Priorités (sélectionnez plusieurs)
                </label>
                <div className="space-y-2">
                  {['Système d\'exploitation', 'Bureautique', 'Cloud/Stockage', 'Communication', 'Graphisme'].map((priorite) => (
                    <label key={priorite} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={priorites[priorite] || false}
                        onChange={(e) => setPriorites(prev => ({ ...prev, [priorite]: e.target.checked }))}
                        className="w-4 h-4"
                        aria-label={priorite}
                      />
                      <span className="text-gray-700">{priorite}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button
                onClick={genererPlan}
                className="w-full bg-warm-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-warm-orange-600 transition-all"
              >
                Générer le plan
              </button>
              <button
                onClick={() => {
                  setShowPlanGenerator(false)
                  setPlanGenere(null)
                  setNomEtablissement('')
                  setNombrePCPlan('')
                  setDateDebut('')
                  setPriorites({})
                }}
                className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all"
              >
                Annuler
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Plan généré */}
      {planGenere && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-4 py-8"
        >
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-forest-green-800">
                Plan de migration généré
              </h2>
              <button
                onClick={() => setPlanGenere(null)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-trust-blue-50 to-forest-green-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 text-forest-green-800">Informations générales</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-600">Établissement :</span>
                    <span className="font-semibold ml-2">{planGenere.etablissement}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Nombre de PC :</span>
                    <span className="font-semibold ml-2">{planGenere.nombrePC}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Date de début :</span>
                    <span className="font-semibold ml-2">{new Date(planGenere.dateDebut).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Durée estimée :</span>
                    <span className="font-semibold ml-2">{planGenere.dureeTotale}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-warm-orange-50 to-trust-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 text-warm-orange-800">Économies estimées</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-600">Économie annuelle :</span>
                    <span className="font-bold text-xl text-trust-blue-700 ml-2">
                      {planGenere.economieAnnuelle.toLocaleString()}€
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Économie sur 5 ans :</span>
                    <span className="font-bold text-xl text-forest-green-700 ml-2">
                      {planGenere.economie5Ans.toLocaleString()}€
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-forest-green-800">Plan d&apos;action</h3>
                <div className="space-y-2">
                  {planGenere.etapes.map((etape: string, index: number) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg ${
                        etape.startsWith('Phase') 
                          ? 'bg-forest-green-100 text-forest-green-800 font-semibold' 
                          : 'bg-gray-50 text-gray-700 ml-4'
                      }`}
                    >
                      {etape}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    const planText = `Plan de migration - ${planGenere.etablissement}\n\n` +
                      `Nombre de PC: ${planGenere.nombrePC}\n` +
                      `Date de début: ${new Date(planGenere.dateDebut).toLocaleDateString('fr-FR')}\n` +
                      `Durée: ${planGenere.dureeTotale}\n\n` +
                      `Économies estimées:\n` +
                      `- Annuelle: ${planGenere.economieAnnuelle.toLocaleString()}€\n` +
                      `- 5 ans: ${planGenere.economie5Ans.toLocaleString()}€\n\n` +
                      `Plan d'action:\n${planGenere.etapes.join('\n')}`
                    
                    const blob = new Blob([planText], { type: 'text/plain' })
                    const url = URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.href = url
                    a.download = `plan-migration-${planGenere.etablissement}.txt`
                    a.click()
                    URL.revokeObjectURL(url)
                  }}
                  className="flex-1 bg-forest-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-forest-green-700 transition-all"
                >
                  Télécharger le plan
                </button>
                <button
                  onClick={() => setPlanGenere(null)}
                  className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all"
                >
                  Fermer
                </button>
              </div>
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

