import { Menu } from "lucide-react"

import Container from "./Container"
import Cart from "./header/Cart"
import Logo from "./Logo"
import Nav from "./Nav"

function Header() {
  return (
    <Container className="bg-foreground text-background">
      <header className="border-b-border/10 flex items-center justify-between border-b py-8">
        <div className="flex flex-1 items-center justify-start sm:gap-10">
          <Menu className="lg:hidden" />

          <div className="max-sm:flex max-sm:flex-1 max-sm:items-center max-sm:justify-center">
            <Logo />
          </div>
        </div>

        <Nav className="hidden" />

        <Cart />
      </header>
    </Container>
  )
}

export default Header
