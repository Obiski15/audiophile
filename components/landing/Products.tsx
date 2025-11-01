import CategoriesMini from "../categories/CategoriesMini"
import Container from "../Container"
import { Button } from "../ui/button"

function Products() {
  return (
    <Container className="pt-10 md:pt-24 lg:pt-[120px]">
      <div className="space-y-[120px] md:space-y-24 lg:space-y-[168px]">
        <CategoriesMini />

        <div className="space-y-12">
          {/* todo: add product cards */}
          <div className="bg-primary flex items-center justify-between">
            <div>image</div>
            <div>text</div>
          </div>

          <div className="rotate-180 border-2 border-red-500 bg-[url('/images/zx7-speaker.png')] bg-cover bg-right bg-no-repeat before:inset-0 before:translate-x-[1000px] before:-translate-y-[100px]">
            <div className="h-full rounded-xl py-[100px] pl-[95px]">
              <div className="space-y-8 uppercase">
                <h3 className="text-[28px] font-bold tracking-[2px]">
                  yx1 earphone
                </h3>
                <Button variant="outline">see product</Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 grid-rows-2 justify-between gap-5 md:grid-cols-2 md:grid-rows-1">
            <div className="h-full rounded-xl bg-[url('/images/yx1-earphone.png')] bg-cover bg-center bg-no-repeat"></div>

            <div className="bg-secondary h-full rounded-xl py-[100px] pl-[95px]">
              <div className="space-y-8 uppercase">
                <h3 className="text-[28px] font-bold tracking-[2px]">
                  yx1 earphone
                </h3>
                <Button variant="outline">see product</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Products
