"use client"

import Image from "next/image"

import { formatCurrency } from "@/lib/utils"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog"
import { Button } from "../ui/button"

function CartSummary() {
  // const { errors } = useFormField()

  return (
    <div className="bg-background py:8 w-full space-y-8 rounded-xl px-6 py-8 uppercase md:p-8 lg:basis-[40%]">
      <h3 className="text-lg font-bold tracking-[1.29px]">summary</h3>

      <div className="space-y-6">
        <div className="flex items-center justify-start gap-4">
          <div className="bg-secondary aspect-square rounded-xl p-3">
            <Image
              width={36}
              height={40}
              src="/images/yx1-earphone.png"
              alt="item"
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 items-center justify-between">
            <div>
              <p className="text-[15px] leading-[25px] font-bold">XX99 MK II</p>
              <p className="text-sm leading-[25px] font-bold opacity-50">
                {formatCurrency(2999)}
              </p>
            </div>

            <p className="text-sm leading-[25px] font-bold opacity-50">x1</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm leading-[25px] font-bold opacity-50">total</p>
            <p className="text-lg font-bold">{formatCurrency(3030)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm leading-[25px] font-bold opacity-50">
              shipping
            </p>
            <p className="text-lg font-bold">{formatCurrency(33)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm leading-[25px] font-bold opacity-50">
              vat (included)
            </p>
            <p className="text-lg font-bold">{formatCurrency(1233)}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm leading-[25px] font-bold opacity-50">
            grand total
          </p>
          <p className="text-primary text-lg font-bold">
            {formatCurrency(9033)}
          </p>
        </div>
      </div>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            type="submit"
            // todo: submit handling
            // disabled={!!Object.keys(errors).length}
            className="w-full uppercase"
          >
            Continue & Pay
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent className="border-none p-12">
          <AlertDialogTitle className="hidden"></AlertDialogTitle>
          <AlertDialogDescription className="hidden"></AlertDialogDescription>
          <div className="space-y-8">
            <Image src="/icons/check.svg" width={64} height={64} alt="check" />

            <div className="space-y-6">
              <h2 className="text-[32px] leading-9 font-bold tracking-[1.14px] uppercase">
                THANK YOU
                <br />
                FOR YOUR ORDER
              </h2>
              <p className="text-[15px] leading-[25px] font-normal opacity-50">
                You will receive an email confirmation shortly.
              </p>
            </div>

            <div className="flex items-stretch justify-center">
              <div className="bg-secondary flex-1 space-y-3 rounded-l-xl p-6">
                <div className="flex items-start justify-start gap-4">
                  <div className="p-2">
                    <Image
                      src="/images/zx9-speaker.png"
                      alt="speaker"
                      width={28}
                      height={32}
                    />
                  </div>

                  <div className="flex flex-1 items-start justify-between">
                    <div>
                      <h3 className="text-[15px] leading-[25px] font-bold">
                        XX99 MK II
                      </h3>
                      <p className="text-sm leading-[25px] font-bold opacity-50">
                        {formatCurrency(3333)}
                      </p>
                    </div>

                    <p className="text-[15px] leading-[25px] font-bold opacity-50">
                      x1
                    </p>
                  </div>
                </div>

                <div className="bg-foreground/10 h-px rounded-xl"></div>

                <p className="text-center text-[12px] font-bold tracking-[-0.21px] opacity-50">
                  and 2 other item(s)
                </p>
              </div>

              <div className="bg-foreground flex-1 rounded-r-xl border-2 py-10 pl-8">
                <div className="text-background uppercase">
                  <p className="py-2 text-[15px] leading-[25px] font-normal opacity-50">
                    grand total
                  </p>
                  <p className="text-lg font-bold">{formatCurrency(333)}</p>
                </div>
              </div>
            </div>

            <AlertDialogAction asChild>
              <Button
                type="button"
                size="lg"
                className="w-full rounded-none uppercase"
              >
                Back to Home
              </Button>
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default CartSummary
