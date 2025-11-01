import BestAudio from "@/components/BestAudio"
import CategoriesLarge from "@/components/categories/CategoriesLarge"
import CategoriesMini from "@/components/categories/CategoriesMini"
import Container from "@/components/Container"

interface Props {
  params: Promise<{ categoryName: string }>
}

async function ProductsCategoryPage({ params }: Props) {
  const { categoryName } = await params

  return (
    <div>
      <div className="bg-foreground text-background flex items-center justify-center py-24">
        <h2 className="text-[28px] leading-11 font-bold tracking-[2px] uppercase md:text-[40px] md:tracking-[1.43px]">
          {categoryName}
        </h2>
      </div>

      <Container className="mt-16 space-y-[120px] md:pt-[120px] lg:space-y-40 lg:pt-40">
        <CategoriesLarge categoryName={categoryName} />
        <CategoriesMini />
      </Container>

      <BestAudio />
    </div>
  )
}

export default ProductsCategoryPage
