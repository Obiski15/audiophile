"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"

import { OrderInput, orderSchema } from "@/schema/order.schema"

import GoBack from "../GoBack"
import { Form } from "../ui/form"
import CartSummary from "./CartSummary"
import CheckoutForm from "./CheckoutForm"

function Checkout() {
  const form = useForm<OrderInput>({
    mode: "onBlur",
    resolver: zodResolver(orderSchema),
  })

  const _onSubmit: SubmitHandler<OrderInput> = values => {
    console.log(values)
  }

  return (
    <div className="space-y-10">
      <GoBack />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(_onSubmit)}
          className="flex flex-col items-start justify-between gap-8 md:gap-[30px] lg:flex-row"
        >
          <CheckoutForm />
          <CartSummary />
        </form>
      </Form>
    </div>
  )
}

export default Checkout
