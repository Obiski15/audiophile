import { Minus, Plus } from "lucide-react"

function IncDecButton() {
  return (
    <div className="bg-secondary flex items-center justify-between gap-3 p-1.5">
      <button className="cursor-pointer">
        <Plus size={16} className="opacity-25" />
      </button>

      <p className="text-[13px] font-bold tracking-[1px]">1</p>

      <button className="cursor-pointer">
        <Minus size={16} className="opacity-25" />
      </button>
    </div>
  )
}

export default IncDecButton
