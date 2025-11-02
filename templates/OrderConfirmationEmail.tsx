import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

import { OrderInput } from "@/schema/order.schema"

import { formatCurrency } from "@/lib/utils"

interface OrderItem {
  name: string
  quantity: number
  price: number
}

interface OrderConfirmationEmailProps {
  orderId: string
  orderDate: string
  items: OrderItem[]
  subtotal: number
  paymentMethod: string
  name: string
  tax: number
  shippingFee: number
  total: number
  shipping: OrderInput["shipping"]
  estimatedDelivery: string
  orderUrl: string
}

const OrderConfirmationEmail = ({
  orderId,
  paymentMethod,
  orderDate,
  name,
  items,
  subtotal,
  shipping,
  shippingFee,
  tax,
  total,
  estimatedDelivery,
  orderUrl,
}: OrderConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Your order has been confirmed - Order {orderId}</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          <Container className="mx-auto my-5 max-w-[600px] rounded-lg bg-white shadow-md">
            {/* Header */}
            <Section className="rounded-t-lg bg-[#d87d4a] px-8 py-10 text-center text-white">
              <Heading className="m-0 mb-2 text-3xl font-semibold">
                ✓ Order Confirmed!
              </Heading>
              <Text className="m-0 text-base opacity-95">
                Thank you for your purchase
              </Text>
            </Section>

            {/* Content */}
            <Section className="px-8 py-10 text-gray-800">
              {/* Greeting */}
              <Text className="mb-5 text-lg font-medium">Hi {name},</Text>

              <Text className="mb-5 text-sm leading-relaxed text-gray-600">
                We&apos;re excited to let you know that your order has been
                confirmed and is being prepared for shipment. You&apos;ll
                receive another email with tracking information once your items
                are on their way.
              </Text>

              {/* Order Info */}
              <Section className="my-6 rounded-lg border-l-4 border-[#d87d4a] bg-gray-50 p-5">
                <Text className="m-0 mb-2 text-xs font-semibold tracking-wide text-[#d87d4a] uppercase">
                  ORDER DETAILS
                </Text>
                <Text className="m-0 mb-1 text-xl font-bold text-gray-800">
                  {orderId}
                </Text>
                <Text className="m-0 mb-2 text-sm text-gray-600">
                  Placed on {orderDate}
                </Text>
                <Text className="m-0 text-sm text-gray-600">
                  Payment Method:{" "}
                  <strong className="font-semibold text-gray-800">
                    {paymentMethod}
                  </strong>
                </Text>
              </Section>

              {/* Order Summary */}
              <Heading className="mt-6 mb-4 text-lg font-semibold text-gray-800">
                Order Summary
              </Heading>

              {/* Items Table */}
              <Section className="my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border-b-2 border-gray-300 p-3 text-left text-sm font-semibold text-gray-600">
                        Item
                      </th>
                      <th className="border-b-2 border-gray-300 p-3 text-center text-sm font-semibold text-gray-600">
                        Qty
                      </th>
                      <th className="border-b-2 border-gray-300 p-3 text-right text-sm font-semibold text-gray-600">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={index}>
                        <td className="border-b border-gray-100 p-3 text-sm text-gray-800">
                          {item.name}
                        </td>
                        <td className="border-b border-gray-100 p-3 text-center text-sm text-gray-800">
                          {item.quantity}
                        </td>
                        <td className="border-b border-gray-100 p-3 text-right text-sm text-gray-800">
                          ${formatCurrency(item.price)}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td
                        colSpan={2}
                        className="border-b border-gray-100 p-3 text-sm text-gray-800"
                      >
                        Subtotal
                      </td>
                      <td className="border-b border-gray-100 p-3 text-right text-sm text-gray-800">
                        ${formatCurrency(subtotal)}
                      </td>
                    </tr>
                    <tr>
                      <td
                        colSpan={2}
                        className="border-b border-gray-100 p-3 text-sm text-gray-800"
                      >
                        Shipping
                      </td>
                      <td className="border-b border-gray-100 p-3 text-right text-sm text-gray-800">
                        ${formatCurrency(shippingFee)}
                      </td>
                    </tr>
                    <tr>
                      <td
                        colSpan={2}
                        className="border-b border-gray-100 p-3 text-sm text-gray-800"
                      >
                        Tax
                      </td>
                      <td className="border-b border-gray-100 p-3 text-right text-sm text-gray-800">
                        ${formatCurrency(tax)}
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td
                        colSpan={2}
                        className="p-3 text-base font-bold text-gray-800"
                      >
                        Total
                      </td>
                      <td className="p-3 text-right text-base font-bold text-gray-800">
                        ${formatCurrency(total)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Section>

              {/* Shipping Section */}
              <Section className="my-8 rounded-lg bg-gray-50 p-5">
                <Text className="m-0 mb-4 text-base font-semibold text-gray-800">
                  📦 Shipping Address
                </Text>
                <Text className="m-0 text-sm leading-relaxed text-gray-600">
                  {name}
                  <br />
                  {shipping.address}
                  <br />
                  {shipping.city}, {shipping.zipCode}
                  <br />
                  {shipping.country}
                </Text>
                <Text className="mt-4 mb-0 text-sm text-gray-600">
                  <strong className="font-semibold">Estimated Delivery:</strong>{" "}
                  {estimatedDelivery}
                </Text>
              </Section>

              {/* CTA Button */}
              <Section className="my-6 text-center">
                <Link
                  href={orderUrl}
                  className="inline-block rounded-lg bg-[#d87d4a] px-10 py-4 text-base font-semibold text-white no-underline"
                >
                  View Your Order
                </Link>
              </Section>

              {/* Support Section */}
              <Section className="mt-8 border-t border-gray-100 pt-8 text-center">
                <Heading className="mb-2 text-base font-semibold text-gray-800">
                  Need Help?
                </Heading>
                <Text className="mb-4 text-sm text-gray-600">
                  Our customer support team is here to assist you with any
                  questions.
                </Text>
                <Text className="m-0 text-sm leading-relaxed font-semibold text-[#d87d4a]">
                  Email:{" "}
                  <Link
                    href="mailto:support@audiophile.com"
                    className="text-[#d87d4a] no-underline"
                  >
                    support@audiophile.com
                  </Link>
                  <br />
                  Phone: +234-905-642-0820
                  <br />
                  Hours: Mon-Fri, 9AM-6PM EST
                </Text>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="rounded-b-lg bg-gray-800 px-8 py-8 text-center text-white">
              <Text className="m-0 mb-4 text-xs leading-relaxed">
                <strong className="font-semibold">Audiophile</strong>
                <br />
                456 Business Ave, Suite 100
                <br />
                Lagos, Nigeria
              </Text>
              <Text className="m-0 mb-4 text-xs">
                <Link href="#" className="text-[#f0b07a] no-underline">
                  Privacy Policy
                </Link>{" "}
                |{" "}
                <Link href="#" className="text-[#f0b07a] no-underline">
                  Terms of Service
                </Link>{" "}
                |{" "}
                <Link href="#" className="text-[#f0b07a] no-underline">
                  Unsubscribe
                </Link>
              </Text>
              <Text className="m-0 text-xs">
                © {new Date().getFullYear()} Audiophile. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default OrderConfirmationEmail
