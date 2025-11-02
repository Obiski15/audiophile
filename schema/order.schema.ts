import * as z from "zod"

export const orderSchema = z.object({
  billing: z.object({
    name: z.string({ error: "Name is required" }).min(1, "Name is required"),
    email: z.email("Invalid email address"),
    phone: z
      .string()
      .length(10, "Enter a 10 digit phone number")
      .regex(/^\d+$/, "Enter a 10 digit number"),
  }),
  shipping: z.object({
    address: z
      .string({ error: "Address is required" })
      .min(1, "Address is required"),
    city: z.string({ error: "City is required" }).min(1, "City is required"),
    zipCode: z
      .string({ error: "Zip Code is required" })
      .min(1, "Zip Code is required"),
    country: z
      .string({ error: "Country is required" })
      .min(1, "Country is required"),
  }),
  payment: z
    .object({
      method: z.enum(["eMoney", "cash"]).default("cash").nonoptional(),
      eMoneyNumber: z
        .string()
        .length(9, "Enter your 9 digit e-Money number")
        .regex(/^\d+$/, "Enter a 9 digit pin")
        .optional(),
      eMoneyPin: z
        .string()
        .length(4, "Enter your 4 digit PIN")
        .regex(/^\d+$/, "Enter a 4 digit number")
        .optional(),
    })
    .superRefine((data, ctx) => {
      if (data.method === "eMoney") {
        if (data.eMoneyNumber === undefined) {
          ctx.addIssue({
            code: "custom",
            message: "Missing e-Money number",
            path: ["eMoneyNumber"],
          })
        }
        if (data.eMoneyPin === undefined) {
          ctx.addIssue({
            code: "custom",
            message: "Missing e-Money PIN",
            path: ["eMoneyPin"],
          })
        }
      }
    }),
})

export type OrderInput = z.infer<typeof orderSchema>
