"use node"

import { v } from "convex/values"
import nodemailer, { SendMailOptions, Transporter } from "nodemailer"

import { action } from "./_generated/server"

let transporter: Transporter

const NODE_ENV = process.env.NODE_ENV || "development"

function createTransporter(): Transporter {
  if (NODE_ENV === "development") {
    return nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    })
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GOOGLE_USER,
      pass: process.env.GOOGLE_PASS,
    },
  })
}

function getTransporter(): Transporter {
  if (!transporter) {
    transporter = createTransporter()
  }
  return transporter
}

async function handleMail({
  from,
  to,
  html,
  subject,
  ...rest
}: SendMailOptions) {
  try {
    const result = await getTransporter().sendMail({
      from,
      to,
      subject,
      html,
      ...rest,
    })

    return result
  } catch (e) {
    console.error(e)
    throw e
  }
}

export const sendMail = action({
  args: {
    from: v.string(),
    to: v.string(),
    subject: v.string(),
    html: v.string(),
  },
  handler: async (_, { from, to, subject, html }) => {
    await handleMail({ from, to, subject, html })
  },
})
