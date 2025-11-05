"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { render } from "@react-email/components"
import { useAction, useMutation } from "convex/react"
import { AnimatePresence, motion } from "framer-motion"

import OrderConfirmationEmail from "@/templates/OrderConfirmationEmail"
import { OrderInput } from "@/schema/order.schema"
import { api } from "@/convex/_generated/api"

import { formatCurrency } from "@/lib/utils"
import { useCart } from "@/hooks/useCart"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog"
import { Button } from "../ui/button"
import { useFormField } from "../ui/form"

const SHIPPING_COST = 50
const VAT_RATE = 0.07

function CartSummary() {
  const dialogTriggerRef = useRef<HTMLButtonElement | null>(null)
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)
  const { cartItems, totalPrice, clearCart } = useCart()
  const placeOrder = useMutation(api.orders.createOrder)
  const { trigger, getValues, reset } = useFormField()
  const sendMail = useAction(api.actions.sendMail)
  const router = useRouter()

  const VAT_AMOUNT = Math.round(totalPrice * VAT_RATE)
  const GRAND_TOTAL = totalPrice + SHIPPING_COST + VAT_AMOUNT

  const handleContinueAndPay = async () => {
    const isValid = await trigger()

    if (isValid) {
      try {
        setIsPlacingOrder(true)
        const { shipping, billing, payment } = getValues() as OrderInput

        const id = await placeOrder({
          shipping,
          billing,
          payment: { method: payment.method },
          items: cartItems.map(item => item._id),
        })

        const html = await render(
          <OrderConfirmationEmail
            paymentMethod={payment.method}
            name={billing.name}
            shipping={shipping}
            orderId={id}
            orderDate={new Date().toLocaleDateString()}
            items={cartItems}
            subtotal={totalPrice}
            tax={VAT_AMOUNT}
            shippingFee={SHIPPING_COST}
            total={GRAND_TOTAL}
            estimatedDelivery={new Date(
              new Date().setDate(new Date().getDate() + 7)
            ).toLocaleDateString()}
            orderUrl={"/"}
          />
        )

        await sendMail({
          to: billing.email,
          subject: "Order Confirmation",
          html,
          from: "Audiophile <noreply@autophile.com>",
        })

        dialogTriggerRef.current?.click()
      } catch (error) {
        window.alert(
          `Failed to place order: ${(error as unknown as Error).message}` ||
            "Something went wrong"
        )
      } finally {
        setIsPlacingOrder(false)
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-background py:8 w-full space-y-8 rounded-xl px-6 py-8 uppercase md:p-8 lg:basis-[40%]"
    >
      <h3 className="text-lg font-bold tracking-[1.29px]">summary</h3>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center justify-start gap-4"
                >
                  <div className="bg-secondary aspect-square rounded-xl p-3">
                    <Image
                      width={36}
                      height={40}
                      src={item.image}
                      alt={item.name}
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 items-center justify-between">
                    <div>
                      <p className="text-[15px] leading-[25px] font-bold">
                        {item.name}
                      </p>
                      <p className="text-sm leading-[25px] font-bold opacity-50">
                        {formatCurrency(item.price)}
                      </p>
                    </div>

                    <p className="text-sm leading-[25px] font-bold opacity-50">
                      x{item.quantity}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm leading-[25px] font-bold opacity-50">
                  total
                </p>
                <p className="text-lg font-bold">
                  {formatCurrency(totalPrice)}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm leading-[25px] font-bold opacity-50">
                  shipping
                </p>
                <p className="text-lg font-bold">
                  {formatCurrency(SHIPPING_COST)}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm leading-[25px] font-bold opacity-50">
                  vat (included)
                </p>
                <p className="text-lg font-bold">
                  {formatCurrency(VAT_AMOUNT)}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm leading-[25px] font-bold opacity-50">
                grand total
              </p>
              <p className="text-primary text-lg font-bold">
                {formatCurrency(GRAND_TOTAL)}
              </p>
            </div>
          </motion.div>

          <AlertDialog>
            <AlertDialogTrigger
              className="hidden"
              ref={dialogTriggerRef}
            ></AlertDialogTrigger>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                disabled={isPlacingOrder}
                onClick={handleContinueAndPay}
                type="button"
                className="w-full uppercase"
              >
                Continue & Pay
              </Button>
            </motion.div>

            <AlertDialogContent className="border-none p-12">
              <AlertDialogTitle className="hidden"></AlertDialogTitle>
              <AlertDialogDescription className="hidden"></AlertDialogDescription>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 md:space-y-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <Image
                    src="/icons/check.svg"
                    width={64}
                    height={64}
                    alt="check"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-4 md:space-y-6"
                >
                  <h2 className="text-2xl leading-7 font-bold tracking-[1.14px] uppercase md:text-[32px] md:leading-9">
                    THANK YOU
                    <br />
                    FOR YOUR ORDER
                  </h2>
                  <p className="text-[15px] leading-[25px] font-normal opacity-50">
                    You will receive an email confirmation shortly.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col items-stretch justify-center md:flex-row"
                >
                  <div className="bg-secondary flex-1 space-y-3 rounded-t-xl p-6 md:rounded-l-xl">
                    <div className="flex items-start justify-start gap-2">
                      <div className="shrink-0 p-2">
                        <Image
                          src={cartItems[0].image}
                          alt={cartItems[0].name}
                          width={28}
                          height={32}
                        />
                      </div>

                      <div className="flex flex-1 items-start justify-between">
                        <div>
                          <h3 className="w-[95%] overflow-hidden text-[15px] leading-[25px] font-bold text-ellipsis whitespace-nowrap">
                            {cartItems[0].name}
                          </h3>
                          <p className="text-sm leading-[25px] font-bold opacity-50">
                            {formatCurrency(cartItems[0].price)}
                          </p>
                        </div>

                        <p className="text-[15px] leading-[25px] font-bold opacity-50">
                          x{cartItems[0].quantity}
                        </p>
                      </div>
                    </div>

                    {cartItems.length > 1 && (
                      <>
                        <div className="bg-foreground/10 h-px rounded-xl"></div>

                        <p className="text-center text-[12px] font-bold tracking-[-0.21px] opacity-50">
                          and {cartItems.length - 1} other item(s)
                        </p>
                      </>
                    )}
                  </div>

                  <div className="bg-foreground flex-1 rounded-b-xl border-2 pt-4 pb-5 pl-6 md:rounded-r-xl md:py-10 md:pl-8">
                    <div className="text-background uppercase">
                      <p className="py-2 text-[15px] leading-[25px] font-normal opacity-50">
                        grand total
                      </p>
                      <p className="text-lg font-bold">
                        {formatCurrency(GRAND_TOTAL)}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <AlertDialogAction asChild>
                  <Button
                    onClick={() => {
                      router.push("/")

                      // Reset form fields
                      reset({
                        billing: {
                          name: "",
                          email: "",
                          phone: "",
                        },
                        shipping: {
                          address: "",
                          city: "",
                          country: "",
                          zipCode: "",
                        },
                        payment: {
                          eMoneyPin: "",
                          method: "cash",
                          eMoneyNumber: "",
                        },
                      })
                      clearCart()
                    }}
                    type="button"
                    size="lg"
                    className="w-full rounded-none uppercase"
                  >
                    Back to Home
                  </Button>
                </AlertDialogAction>
              </motion.div>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )}
    </motion.div>
  )
}

export default CartSummary
