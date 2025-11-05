"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { AlertCircle, ArrowLeft, Home } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ProductError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  const isNotFound =
    error.message.includes("ArgumentValidationError") ||
    error.message.includes("products:getProduct")

  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex w-full max-w-md flex-col items-center gap-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1,
          }}
          className="bg-destructive/10 flex h-24 w-24 items-center justify-center rounded-full"
        >
          <AlertCircle className="text-destructive h-12 w-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-bold tracking-tight">
            {isNotFound ? "Product Not Found" : "Something Went Wrong!"}
          </h1>
          <p className="text-muted-foreground text-base">
            {isNotFound
              ? "The product you're looking for doesn't exist or has been removed from our catalog."
              : "We encountered an error while loading this product. Please try again."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row"
        >
          {!isNotFound && (
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button onClick={reset} className="w-full">
                Try Again
              </Button>
            </motion.div>
          )}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              onClick={() => router.back()}
              className="w-full"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              onClick={() => router.push("/")}
              className="w-full"
            >
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
          </motion.div>
        </motion.div>

        {process.env.NODE_ENV === "development" && error.message && (
          <motion.details
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-muted mt-8 w-full rounded-lg p-4 text-left text-sm"
          >
            <summary className="cursor-pointer font-semibold">
              Error Details (Development Only)
            </summary>
            <pre className="text-destructive mt-2 overflow-auto text-xs">
              {error.message}
            </pre>
          </motion.details>
        )}
      </motion.div>
    </div>
  )
}
