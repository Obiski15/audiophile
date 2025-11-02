import { useWatch } from "react-hook-form"

import { cn } from "@/lib/utils"

import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "../ui/form"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

function CheckoutForm() {
  const { control } = useFormField()

  const paymentMethod = useWatch({
    name: "payment.method",
    control,
  })

  return (
    <div className="bg-background w-full space-y-10 rounded-xl px-6 py-8 md:px-8 lg:basis-[70%] lg:p-12">
      <h2 className="text-[32px] leading-9 font-bold tracking-[1.14px] uppercase">
        Checkout
      </h2>

      <div className="space-y-[53px]">
        <div className="space-y-4">
          <h3 className="text-primary text-[13px] leading-[25px] font-bold uppercase">
            billing details
          </h3>

          <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-6">
            <FormField
              control={control}
              name="billing.name"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-full space-y-2 md:basis-[calc(50%-0.5rem)]">
                  <div className="flex items-center justify-between gap-1">
                    <FormLabel
                      htmlFor="name"
                      className="text-[12px] font-bold tracking-[-0.21px]"
                    >
                      Name
                    </FormLabel>
                    <FormMessage className="text-[12px] font-bold tracking-[-0.21px]">
                      {error?.message}
                    </FormMessage>
                  </div>
                  <Input id="name" placeholder="Alexei Ward" {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="billing.email"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-full space-y-2 md:basis-[calc(50%-0.5rem)]">
                  <div className="flex items-center justify-between gap-1">
                    <FormLabel
                      htmlFor="email"
                      className="text-[12px] font-bold tracking-[-0.21px]"
                    >
                      Email Address
                    </FormLabel>
                    <FormMessage className="text-[12px] font-bold tracking-[-0.21px]">
                      {error?.message}
                    </FormMessage>
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="alexei@mail.com"
                    {...field}
                  />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="billing.phone"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-full space-y-2 md:basis-[calc(50%-0.5rem)]">
                  <div className="flex items-center justify-between gap-1">
                    <FormLabel
                      htmlFor="phone"
                      className="text-[12px] font-bold tracking-[-0.21px]"
                    >
                      Phone Number
                    </FormLabel>
                    <FormMessage className="text-[12px] font-bold tracking-[-0.21px]">
                      {error?.message}
                    </FormMessage>
                  </div>
                  <Input id="phone" placeholder="+1 202-555-0136" {...field} />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-primary text-[13px] leading-[25px] font-bold uppercase">
            Shipping info
          </h3>

          <div className="space-y-6">
            <FormField
              control={control}
              name="shipping.address"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-full space-y-2 md:basis-[calc(50%-0.5rem)]">
                  <div className="flex items-center justify-between gap-1">
                    <FormLabel
                      htmlFor="address"
                      className="text-[12px] font-bold tracking-[-0.21px]"
                    >
                      Address
                    </FormLabel>
                    <FormMessage className="text-[12px] font-bold tracking-[-0.21px]">
                      {error?.message}
                    </FormMessage>
                  </div>

                  <Input
                    id="address"
                    placeholder="1137 Williams Avenue"
                    {...field}
                  />
                </FormItem>
              )}
            />

            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-6">
              <FormField
                control={control}
                name="shipping.zipCode"
                render={({ field, fieldState: { error } }) => (
                  <FormItem className="w-full space-y-2 md:basis-[calc(50%-0.5rem)]">
                    <div className="flex items-center justify-between gap-1">
                      <FormLabel
                        htmlFor="zipCode"
                        className="text-[12px] font-bold tracking-[-0.21px]"
                      >
                        Zip Code
                      </FormLabel>
                      <FormMessage className="text-[12px] font-bold tracking-[-0.21px]">
                        {error?.message}
                      </FormMessage>
                    </div>
                    <Input
                      type="number"
                      id="zipCode"
                      placeholder="10001"
                      {...field}
                    />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="shipping.city"
                render={({ field, fieldState: { error } }) => (
                  <FormItem className="w-full space-y-2 md:basis-[calc(50%-0.5rem)]">
                    <div className="flex items-center justify-between gap-1">
                      <FormLabel
                        htmlFor="city"
                        className="text-[12px] font-bold tracking-[-0.21px]"
                      >
                        City
                      </FormLabel>
                      <FormMessage className="text-[12px] font-bold tracking-[-0.21px]">
                        {error?.message}
                      </FormMessage>
                    </div>
                    <Input id="city" placeholder="New York" {...field} />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="shipping.country"
                render={({ field, fieldState: { error } }) => (
                  <FormItem className="w-full space-y-2 md:basis-[calc(50%-0.5rem)]">
                    <div className="flex items-center justify-between gap-1">
                      <FormLabel
                        htmlFor="country"
                        className="text-[12px] font-bold tracking-[-0.21px]"
                      >
                        Country
                      </FormLabel>
                      <FormMessage className="text-[12px] font-bold tracking-[-0.21px]">
                        {error?.message}
                      </FormMessage>
                    </div>
                    <Input
                      id="country"
                      placeholder="United States"
                      {...field}
                    />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-primary text-[13px] leading-[25px] font-bold uppercase">
            payment details
          </h3>

          <FormField
            control={control}
            name="payment.method"
            render={({ field, fieldState: { error } }) => (
              <FormItem className="flex w-full flex-col items-start justify-between space-y-2 md:basis-[calc(50%-0.5rem)] md:flex-row">
                <div className="flex w-full items-center justify-between gap-1 md:flex-1">
                  <FormLabel
                    htmlFor="name"
                    className="text-[12px] font-bold tracking-[-0.21px]"
                  >
                    Payment Method
                  </FormLabel>
                  <FormMessage className="text-[12px] font-bold tracking-[-0.21px]">
                    {error?.message}
                  </FormMessage>
                </div>

                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue="cash"
                  className="w-full space-y-4 md:flex-1"
                >
                  <div
                    className={cn(
                      "border-input flex items-center justify-start gap-4 rounded-xl border px-4 py-[18px]"
                    )}
                  >
                    <RadioGroupItem value="eMoney" id="eMoney" />
                    <Label htmlFor="eMoney">e-Money</Label>
                  </div>

                  <div className="border-input flex items-center justify-start gap-4 rounded-xl border px-4 py-[18px]">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash">Cash on Delivery</Label>
                  </div>
                </RadioGroup>
              </FormItem>
            )}
          />

          {paymentMethod === "eMoney" && (
            <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-6">
              <FormField
                control={control}
                name="payment.eMoneyNumber"
                render={({ field, fieldState: { error } }) => (
                  <FormItem className="w-full space-y-2 md:basis-[calc(50%-0.5rem)]">
                    <div className="flex items-center justify-between gap-1">
                      <FormLabel
                        htmlFor="eMoneyNumber"
                        className="text-[12px] font-bold tracking-[-0.21px]"
                      >
                        e-Money Number
                      </FormLabel>
                      <FormMessage className="text-[12px] font-bold tracking-[-0.21px]">
                        {error?.message}
                      </FormMessage>
                    </div>
                    <Input
                      id="eMoneyNumber"
                      placeholder="238521993"
                      {...field}
                    />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="payment.eMoneyPin"
                render={({ field, fieldState: { error } }) => (
                  <FormItem className="w-full space-y-2 md:basis-[calc(50%-0.5rem)]">
                    <div className="flex items-center justify-between gap-1">
                      <FormLabel
                        htmlFor="eMoneyPin"
                        className="text-[12px] font-bold tracking-[-0.21px]"
                      >
                        e-Money Pin
                      </FormLabel>
                      <FormMessage className="text-[12px] font-bold tracking-[-0.21px]">
                        {error?.message}
                      </FormMessage>
                    </div>
                    <Input id="eMoneyPin" placeholder="6891" {...field} />
                  </FormItem>
                )}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CheckoutForm
