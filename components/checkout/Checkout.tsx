"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"

import { OrderInput, orderSchema } from "@/schema/order.schema"

import GoBack from "../GoBack"
import { Form } from "../ui/form"
import CartSummary from "./CartSummary"
import CheckoutForm from "./CheckoutForm"

function Checkout() {
  const form = useForm<OrderInput>({
    mode: "onChange",
    defaultValues: {
      payment: {
        method: "cash",
      },
    },
    resolver: zodResolver(orderSchema),
  })

  return (
    <div className="space-y-10">
      <GoBack />

      <Form {...form}>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-start justify-between gap-8 md:gap-[30px] lg:flex-row"
        >
          <CheckoutForm />
          <CartSummary />
        </motion.form>
      </Form>
    </div>
  )
}

export default Checkout
