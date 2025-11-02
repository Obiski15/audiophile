import BestAudio from "@/components/BestAudio"
import CategoriesMini from "@/components/categories/CategoriesMini"
import Container from "@/components/Container"
import GoBack from "@/components/GoBack"
import ProductDetail from "@/components/products/ProductDetail"

interface Props {
  params: Promise<{ productId: string }>
}

async function ProductDetailsPage({ params }: Props) {
  const { productId } = await params

  return (
    <div>
      <Container className="pt:4 space-y-6 md:pt-8 lg:space-y-14 lg:pt-20">
        <GoBack />

        <div className="space-y-[120px] lg:space-y-40">
          <ProductDetail productId={productId} />
          <CategoriesMini />
        </div>
      </Container>

      <BestAudio />
    </div>
  )
}

export default ProductDetailsPage
