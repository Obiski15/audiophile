import BestAudio from "@/components/BestAudio"
import CategoriesMini from "@/components/categories/CategoriesMini"
import Container from "@/components/Container"
import ProductDetail from "@/components/products/ProductDetail"

function ProductDetailsPage() {
  return (
    <div>
      <Container className="mt-16 space-y-[120px] md:pt-[120px] lg:space-y-40 lg:pt-40">
        <ProductDetail />
        <CategoriesMini />
      </Container>

      <BestAudio />
    </div>
  )
}

export default ProductDetailsPage
