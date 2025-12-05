'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageId } from '@/app/page'

interface Page {
  id: PageId
  title: string
  icon: string
  shortTitle?: string
}

interface OSNavigatorProps {
  currentPage: PageId
  setCurrentPage: (page: PageId) => void
  viewMode: 'normal' | 'alt-tab' | 'overview'
  setViewMode: (mode: 'normal' | 'alt-tab' | 'overview') => void
  pages: Page[]
  children: React.ReactNode
}

export default function OSNavigator({
  currentPage,
  setCurrentPage,
  viewMode,
  setViewMode,
  pages,
  children,
}: OSNavigatorProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Navigation tactile (swipe)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && viewMode === 'normal') {
      const currentIndex = pages.findIndex(p => p.id === currentPage)
      if (currentIndex < pages.length - 1) {
        setCurrentPage(pages[currentIndex + 1].id)
      }
    }
    if (isRightSwipe && viewMode === 'normal') {
      const currentIndex = pages.findIndex(p => p.id === currentPage)
      if (currentIndex > 0) {
        setCurrentPage(pages[currentIndex - 1].id)
      }
    }
  }

  // Navigation clavier horizontale
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'normal') return
      
      if (e.key === 'ArrowLeft') {
        const currentIndex = pages.findIndex(p => p.id === currentPage)
        if (currentIndex > 0) {
          setCurrentPage(pages[currentIndex - 1].id)
        }
      }
      if (e.key === 'ArrowRight') {
        const currentIndex = pages.findIndex(p => p.id === currentPage)
        if (currentIndex < pages.length - 1) {
          setCurrentPage(pages[currentIndex + 1].id)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPage, pages, setCurrentPage, viewMode])

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-forest-green-50 via-trust-blue-50 to-warm-orange-50"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Mode Normal - Page active */}
      {viewMode === 'normal' && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Mode Alt+A - Vue horizontale */}
      {viewMode === 'alt-tab' && (
        <div className="min-h-screen p-8 bg-black/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white text-2xl mb-6 font-handwritten">
              Navigation Alt+A
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {pages.map((page) => (
                <motion.div
                  key={page.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setCurrentPage(page.id)
                    setViewMode('normal')
                  }}
                  className={`flex-shrink-0 w-64 h-48 rounded-lg p-4 cursor-pointer transition-all ${
                    page.id === currentPage
                      ? 'ring-4 ring-trust-blue-400 bg-trust-blue-500'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <div className="text-4xl mb-2">{page.icon}</div>
                  <div className="text-white font-semibold">{page.title}</div>
                  {page.id === currentPage && (
                    <div className="text-white/80 text-sm mt-2">Page active</div>
                  )}
                </motion.div>
              ))}
            </div>
            <p className="text-white/60 text-sm mt-4">
              Appuyez sur Échap pour revenir
            </p>
          </div>
        </div>
      )}

      {/* Mode Vue d'ensemble - Grille 3x2 */}
      {viewMode === 'overview' && (
        <div className="min-h-screen relative">
          {/* Fond avec overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-forest-green-900 via-trust-blue-900 to-warm-orange-900" />
          <div className="absolute inset-0 bg-black/35" />
          
          <div className="relative min-h-screen p-8 pb-24">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-white text-3xl mb-8 font-handwritten text-center">
                Vue d'ensemble - La Carte des Villages Résistants
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pages.map((page) => (
                  <motion.div
                    key={page.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setCurrentPage(page.id)
                      setViewMode('normal')
                    }}
                    className={`relative rounded-xl p-6 cursor-pointer transition-all shadow-2xl ${
                      page.id === currentPage
                        ? 'bg-white/20 backdrop-blur-sm border-2 border-[#3BAFDA]'
                        : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                    }`}
                    style={
                      page.id === currentPage
                        ? { boxShadow: '0 0 0 2px #3BAFDA, 0 4px 20px rgba(59, 175, 218, 0.3)' }
                        : {}
                    }
                  >
                    {page.icon && <div className="text-5xl mb-3">{page.icon}</div>}
                    <div className="text-white font-bold text-xl mb-2">
                      {page.title}
                    </div>
                    {page.id === currentPage && (
                      <div className="absolute top-2 right-2 bg-[#3BAFDA] text-white text-xs px-2 py-1 rounded-full">
                        Actif
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Indicateur de navigation desktop */}
      <div className="hidden md:flex fixed top-4 right-4 gap-2 z-50">
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => setCurrentPage(page.id)}
            className={`w-3 h-3 rounded-full transition-all ${
              page.id === currentPage
                ? 'bg-forest-green-600 w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            title={page.title}
          />
        ))}
      </div>

      {/* Barre d'état avec raccourcis clavier - Desktop uniquement */}
      {viewMode === 'normal' && (
        <div className="fixed bottom-0 left-0 right-0 hidden lg:flex items-center justify-center h-8 bg-black/80 backdrop-blur-sm border-t border-[#3BAFDA]/30 z-40">
          <div className="flex items-center gap-4 lg:gap-6 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-[#3BAFDA]/20 text-[#3BAFDA] rounded border border-[#3BAFDA]/40 font-mono">
                Alt
              </kbd>
              <span className="text-white/50">+</span>
              <kbd className="px-2 py-1 bg-[#3BAFDA]/20 text-[#3BAFDA] rounded border border-[#3BAFDA]/40 font-mono">
                A
              </kbd>
              <span className="ml-1 text-white/60">Page suivante</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-[#3BAFDA]/20 text-[#3BAFDA] rounded border border-[#3BAFDA]/40 font-mono">
                W
              </kbd>
              <span className="ml-1 text-white/60">Vue d'ensemble</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-[#3BAFDA]/20 text-[#3BAFDA] rounded border border-[#3BAFDA]/40 font-mono">
                Échap
              </kbd>
              <span className="ml-1 text-white/60">Revenir</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

