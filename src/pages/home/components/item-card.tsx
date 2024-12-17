import {Item} from "@/lib/models/Item.ts";
import {CheckCircle, ChevronDownCircle, MapPin, MapPinned, User} from "lucide-react";
import {clsx} from "clsx";

const ItemCard = ({ item }: { item: Item }) => {

  const getColor = (color: string) => {
    switch (color) {
      case 'red':
        return ['text-red-50', 'bg-red-600'];
      case 'purple':
        return ['text-purple-50', 'bg-purple-600'];
      case 'brown':
        return ['text-yellow-50', 'bg-yellow-950'];
      case 'green':
        return ['text-green-50', 'bg-green-600'];
      default:
        return ['text-purple-50', 'bg-purple-600'];
    }
  }

  return <div className={"flex bg-gray-800 w-full p-2.5 gap-2.5 rounded-xl"}>
    {item.image && <img src={item.image} alt={"Placeholder"} className={"h-24 rounded-xl"}/>}

    <div className={"flex flex-col w-full justify-between gap-0.5"}>
      <div className={"flex flex-col w-full gap-0.5 mb-5"}>
        <div className={"flex items-center justify-between w-full"}>
          <h2 className={"text-xl font-bold"}>{ item.name }</h2>
          <p className={"text-md text-gray-500 uppercase"}>{ !['no', 'pendiente'].includes(item.utem_code?.toLowerCase()) ? `${item.utem_code} / ${item.internal_code}` : item.internal_code}</p>
        </div>
        <div className={"flex items-center justify-between w-full"}>
          <span className={"flex items-center justify-center text-sm gap-2"}>
            <span className={"flex items-center justify-center gap-0.5"}>{ item.location_or_borrowed_by.trim().startsWith('@') ? <User className={"w-4 h-4"}/> : <MapPin className={"w-4 h-4"}/>} Ubicación / Prestado a: </span>
            { item.location_or_borrowed_by }
          </span>
        </div>
      </div>

      <div className={"flex items-center justify-between w-full"}>
        <div className={"grid grid-cols-4 items-center justify-center gap-2.5"}>
          <span className={clsx([
            "flex items-center justify-center gap-1 py-0.5 px-1 text-sm rounded-lg text-neutral-50",
            getColor(item.property?.color || 'purple'),
          ])}>
            <User className={"w-4 h-4"}/>
            {item.property?.value}
          </span>

          <span className={clsx([
            "flex items-center justify-center gap-1 py-0.5 px-1 text-sm rounded-lg text-neutral-50",
            getColor(item.circumstance?.color || 'purple'),
          ])}>
            <ChevronDownCircle className={"w-4 h-4"}/>
            {item.circumstance?.value}
          </span>

          <span className={clsx([
            "flex items-center justify-center gap-1 py-0.5 px-1 text-sm rounded-lg text-neutral-50",
            getColor(item.status?.color || 'purple'),
          ])}>
            <CheckCircle className={"w-4 h-4"}/>
            {item.status?.value}
          </span>

          <span className={clsx([
            "flex items-center justify-center gap-1 py-0.5 px-1 text-sm rounded-lg text-neutral-50",
            getColor(item.designated_location?.color || 'purple'),
          ])}>
            <MapPinned className={"w-4 h-4"}/>
            {item.designated_location?.value}
          </span>
        </div>
      </div>
    </div>
  </div>
}

export default ItemCard;