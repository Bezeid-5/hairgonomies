'use client'

import { motion } from 'framer-motion'
import { Shield, TrendingDown, Users, Zap } from 'lucide-react'
import { PageId } from '@/app/page'

interface AccueilPageProps {
  setCurrentPage: (page: PageId) => void
}

export default function AccueilPage({ setCurrentPage }: AccueilPageProps) {
  const stats = [
    { icon: Shield, value: '47', label: 'Villages Résistants', color: 'forest-green' },
    { icon: TrendingDown, value: '1,2M€', label: 'Économies réalisées', color: 'trust-blue' },
    { icon: Users, value: '12 500', label: 'Ordinateurs libérés', color: 'warm-orange' },
    { icon: Zap, value: '15', label: 'Témoignages', color: 'forest-green' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-green-50 via-trust-blue-50 to-warm-orange-50 pb-4 lg:pb-10">
      {/* Header avec illustration Astérix */}
      <div className="relative overflow-hidden bg-gradient-to-r from-forest-green-600 to-forest-green-800 text-white">
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-handwritten font-bold mb-4">
              La Carte des Villages Résistants
            </h1>
            <p className="text-2xl md:text-3xl font-handwritten mb-6">
              &quot;Ils sont fous ces Romains (numériques) !&quot;
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Rejoignez la communauté NIRD et découvrez comment les établissements scolaires 
              résistent à l&apos;empire des Big Tech
            </p>
          </motion.div>
        </div>
      </div>

      {/* Statistiques choc */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-white rounded-xl p-6 shadow-lg border-2 border-${stat.color}-200 hover:border-${stat.color}-400 transition-all`}
              >
                <Icon className={`w-8 h-8 mb-3 text-${stat.color}-600`} />
                <div className={`text-3xl font-bold text-${stat.color}-700 mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Message principal */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-handwritten font-bold text-forest-green-800 mb-6">
            Le Problème : L&apos;Empire Numérique
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Les établissements scolaires français dépensent des millions d&apos;euros chaque année 
              en licences Microsoft, Google, Adobe et autres géants du numérique. 
              <strong className="text-warm-orange-600"> Nos données éducatives sont hébergées 
              à l&apos;étranger</strong>, nos élèves apprennent à dépendre de logiciels propriétaires, 
              et nos budgets sont engloutis par des abonnements récurrents.
            </p>
            <p>
              <strong className="text-forest-green-700">Mais la résistance s&apos;organise !</strong> 
              Des dizaines d&apos;établissements ont déjà migré vers des solutions libres et open source, 
              réalisant des économies considérables tout en reprenant le contrôle de leurs données.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Appel à l'action */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-trust-blue-500 to-forest-green-500 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-handwritten font-bold mb-4">
            Rejoins la Résistance Numérique !
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Ton établissement peut être le prochain village gaulois à tenir tête à l&apos;empire.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('carte')}
              className="bg-white text-forest-green-700 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Explorer la Carte
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('armurerie')}
              className="bg-warm-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Découvrir l&apos;Arsenal
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Messages clés */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Linux redonne vie',
              text: 'Ton vieil ordinateur fonctionne encore ? Linux le redonne vie !',
            },
            {
              title: 'Pourquoi payer ?',
              text: 'Pourquoi payer Microsoft quand l\'Éducation peut créer ses outils ?',
            },
            {
              title: 'Données en France',
              text: 'Nos données éducatives restent en France avec Nextcloud',
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-forest-green-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

