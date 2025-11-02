import { v } from "convex/values"

import { mutation } from "./_generated/server"

export const createOrder = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const newOrderId = await ctx.db.insert("orders", { ...args })
    return newOrderId
  },
})
