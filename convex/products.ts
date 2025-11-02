import { v } from "convex/values"

import { query } from "./_generated/server"

export const getProducts = query({
  args: { id: v.id("products"), limit: v.number() },
  handler: async ({ db }, { id, limit }) => {
    return await db
      .query("products")
      .filter(q => q.neq(q.field("_id"), id))
      .take(limit)
  },
})

export const getCategoryProducts = query({
  args: { category: v.string() },
  handler: async ({ db }, { category }) => {
    return await db
      .query("products")
      .filter(q => q.eq(q.field("category"), category))
      .collect()
  },
})

export const getProduct = query({
  args: { id: v.id("products") },
  handler: async ({ db }, { id }) => {
    return await db.get(id)
  },
})
