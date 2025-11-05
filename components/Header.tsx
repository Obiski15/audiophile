"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu } from "lucide-react"

import { useIsDesktop } from "@/hooks/useMediaQuery"

import CategoriesMini from "./categories/CategoriesMini"
import Container from "./Container"
import Cart from "./header/Cart"
import Logo from "./Logo"
import Nav from "./Nav"

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const isMobile = useIsDesktop()

  return (
    <Container className="bg-foreground">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-b-border/10 text-background relative flex items-center justify-between border-b py-8"
      >
        <div className="flex flex-1 items-center justify-start sm:gap-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden"
            onClick={() => setShowMenu(s => !s)}
          >
            <Menu />
          </motion.button>

          <div className="max-sm:flex max-sm:flex-1 max-sm:items-center max-sm:justify-center">
            <Logo />
          </div>
        </div>

        <Nav className="hidden" />

        <Cart />
      </motion.header>

      <AnimatePresence>
        {showMenu && !isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-background absolute left-1/2 z-50 w-full -translate-x-1/2 overflow-hidden rounded-xl px-6 py-8 md:px-10 md:py-12"
          >
            <CategoriesMini />
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  )
}

export default Header
