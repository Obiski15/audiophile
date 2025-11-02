import Checkout from "@/components/checkout/Checkout"
import Container from "@/components/Container"

function CheckoutPage() {
  return (
    <Container className="bg-secondary -mb-24 pt-4 pb-24 md:pt-12 md:pb-32 lg:pt-20 lg:pb-[140px]">
      <Checkout />
    </Container>
  )
}

export default CheckoutPage
