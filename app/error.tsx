"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { AlertCircle, Home, RefreshCcw } from "lucide-react"

import Container from "@/components/Container"
import { Button } from "@/components/ui/button"

export default function Error({
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

  return (
    <Container className="flex min-h-[60vh] items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-md text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          className="bg-destructive/10 mx-auto mb-6 flex size-20 items-center justify-center rounded-full"
        >
          <AlertCircle className="text-destructive size-10" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
        >
          Something went wrong!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground mb-8 text-[15px] leading-[25px]"
        >
          We apologize for the inconvenience. An unexpected error has occurred.
          Please try again or return to the homepage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => reset()}
              className="flex items-center gap-2"
              size="lg"
            >
              <RefreshCcw className="size-4" />
              Try Again
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => router.push("/")}
              variant="outline"
              className="flex items-center gap-2"
              size="lg"
            >
              <Home className="size-4" />
              Go Home
            </Button>
          </motion.div>
        </motion.div>

        {process.env.NODE_ENV === "development" && error.message && (
          <motion.details
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-muted mt-8 rounded-lg p-4 text-left"
          >
            <summary className="text-muted-foreground cursor-pointer text-sm font-semibold">
              Error Details (Development Only)
            </summary>
            <pre className="text-destructive mt-2 overflow-auto text-xs">
              {error.message}
            </pre>
          </motion.details>
        )}
      </motion.div>
    </Container>
  )
}
