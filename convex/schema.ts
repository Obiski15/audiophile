import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  orders: defineTable({
    billing: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
    }),
    shipping: v.object({
      address: v.string(),
      city: v.string(),
      zipCode: v.string(),
      country: v.string(),
    }),
    payment: v.object({
      method: v.string(),
    }),
    items: v.array(v.string()),
  }),

  products: defineTable({
    name: v.string(),
    category: v.string(),
    description: v.string(),
    price: v.number(),
    new: v.boolean(),
    image: v.string(),
    images: v.array(v.string()),
    features: v.array(v.string()),
    includes: v.array(
      v.object({
        quantity: v.number(),
        item: v.string(),
      })
    ),
  }),

  categories: defineTable({
    speakers: v.array(
      v.object({
        name: v.string(),
        image: v.string(),
        _id: v.string(),
        description: v.string(),
      })
    ),
  }),
})
