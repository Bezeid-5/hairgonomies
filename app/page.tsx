'use client'

import { useState, useEffect } from 'react'
import OSNavigator from '@/components/OSNavigator'
import AccueilPage from '@/components/pages/AccueilPage'
import CartePage from '@/components/pages/CartePage'
import ArmureriePage from '@/components/pages/ArmureriePage'
import ConseilPage from '@/components/pages/ConseilPage'
import EcolePage from '@/components/pages/EcolePage'
import QuetesPage from '@/components/pages/QuetesPage'

export type PageId = 'accueil' | 'carte' | 'armurerie' | 'conseil' | 'ecole' | 'quetes'

const pages: { id: PageId; title: string; icon: string; shortTitle?: string }[] = [
  { id: 'accueil', title: 'Village Gaulois', icon: '', shortTitle: 'Village' },
  { id: 'carte', title: 'La Gaule Résistante', icon: '', shortTitle: 'Carte' },
  { id: 'armurerie', title: 'L\'Arsenal Libre', icon: '', shortTitle: 'Arsenal' },
  { id: 'conseil', title: 'Conseil du Village', icon: '', shortTitle: 'Conseil' },
  { id: 'ecole', title: 'École des Druides', icon: '', shortTitle: 'École' },
  { id: 'quetes', title: 'Quêtes', icon: '', shortTitle: 'Quêtes' },
]

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageId>('accueil')
  const [viewMode, setViewMode] = useState<'normal' | 'alt-tab' | 'overview'>('normal')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt+A pour naviguer vers la page suivante
      if (e.altKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault()
        if (viewMode === 'normal') {
          const currentIndex = pages.findIndex(p => p.id === currentPage)
          if (currentIndex < pages.length - 1) {
            setCurrentPage(pages[currentIndex + 1].id)
          } else {
            // Si on est à la dernière page, revenir à la première
            setCurrentPage(pages[0].id)
          }
        }
      }
      
      // Échap pour revenir à la vue normale
      if (e.key === 'Escape') {
        setViewMode('normal')
      }
      
      // Vue d'ensemble (W ou Ctrl+Shift+Up)
      if ((e.key === 'w' || e.key === 'W') && !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
        e.preventDefault()
        setViewMode('overview')
      }
      if (e.ctrlKey && e.shiftKey && e.key === 'ArrowUp') {
        e.preventDefault()
        setViewMode('overview')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [viewMode, currentPage])

  return (
    <OSNavigator
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      viewMode={viewMode}
      setViewMode={setViewMode}
      pages={pages}
    >
      {viewMode === 'normal' && (
        <>
          {currentPage === 'accueil' && <AccueilPage setCurrentPage={setCurrentPage} />}
          {currentPage === 'carte' && <CartePage />}
          {currentPage === 'armurerie' && <ArmureriePage />}
          {currentPage === 'conseil' && <ConseilPage />}
          {currentPage === 'ecole' && <EcolePage />}
          {currentPage === 'quetes' && <QuetesPage />}
        </>
      )}
    </OSNavigator>
  )
}

