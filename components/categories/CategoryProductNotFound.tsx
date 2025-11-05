import { motion } from "framer-motion"
import { PackageOpen } from "lucide-react"

import { Button } from "../ui/button"

function CategoryProductNotFound({ categoryName }: { categoryName: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[400px] flex-col items-center justify-center text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
        className="bg-secondary mb-6 flex size-20 items-center justify-center rounded-full"
      >
        <PackageOpen className="text-muted-foreground size-10" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-4 text-2xl font-bold tracking-tight md:text-3xl"
      >
        No Products Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-muted-foreground mb-8 max-w-md text-[15px] leading-[25px]"
      >
        We couldn&apos;t find any products in the &quot;{categoryName}&quot;
        category. Please check back later or explore other categories.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button onClick={() => window.history.back()} size="lg">
          Go Back
        </Button>
      </motion.div>
    </motion.div>
  )
}

export default CategoryProductNotFound
