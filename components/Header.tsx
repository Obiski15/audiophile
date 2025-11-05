"use client"

import { useState } from "react"
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
      <header className="border-b-border/10 text-background flex items-center justify-between border-b py-8">
        <div className="flex flex-1 items-center justify-start sm:gap-10">
          <button className="lg:hidden" onClick={() => setShowMenu(s => !s)}>
            <Menu />
          </button>

          <div className="max-sm:flex max-sm:flex-1 max-sm:items-center max-sm:justify-center">
            <Logo />
          </div>
        </div>

        <Nav className="hidden" />

        <Cart />
      </header>

      <div className="border-t-border/10 border-t">
        {showMenu && !isMobile && (
          <div className="bg-background rounded-xl px-6 py-8 md:px-10 md:py-12">
            <CategoriesMini />
          </div>
        )}
      </div>
    </Container>
  )
}

export default Header
