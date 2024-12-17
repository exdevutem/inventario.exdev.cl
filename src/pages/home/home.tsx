import {useUser} from "@clerk/clerk-react";
import {Camera} from "lucide-react";
import {Input} from "@/components/ui/forms/input.tsx";
import {useEffect, useState} from "react";
import {Item} from "@/lib/models/Item.ts";
import ItemCard from "@/pages/home/components/item-card.tsx";
import axios from "@/lib/axios.ts";

const Home = () => {

  const { user } = useUser();
  const [items, setItems] = useState<Item[]>()
  const [query, setQuery] = useState<string>('')
  const [nextCursor, setNextCursor] = useState<string | null>(null)

  useEffect(() => {
    axios.get('/items', {
      params: {
        query: query || null,
      }
    }).then(res => {
      const { results, next_cursor } = res.data

      setItems(results)
      setNextCursor(next_cursor)
    })
  }, [query]);

  const loadMore = () => {
    axios.get('/items', {
      params: {
        query: query || null,
        startCursor: nextCursor
      }
    }).then(res => {
      const { results, next_cursor } = res.data

      setItems(prev => [...(prev || []), ...results])
      setNextCursor(next_cursor)
    })
  }

  return <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Te damos la bienvenida{ user?.firstName ? `, ${user?.firstName}!` : '!' }</h1>
    </div>

    <div className="container mx-auto p-4">
      <div className={"div flex flex-col items-start justify-start mb-5"}>
        <div className={"flex items-center justify-start w-full"}>
          <Input id={"search"} name={"search"} type={"text"} placeholder={"Buscar elementos..."} value={query} onChange={(e) => setQuery(e.target.value)} />

          <div className={"bg-indigo-600 rounded-md text-neutral-100 flex items-center justify-center p-2 ml-2"}>
            <Camera className={"w-6 h-6"}/>
          </div>
        </div>
      </div>

      <div className={"flex flex-col gap-5 w-full"}>
        { (items || []).map((item, index) => <ItemCard key={index} item={item}/>) }

        { nextCursor && <button className={"bg-indigo-600 text-neutral-100 p-2 rounded-md"} onClick={loadMore}>Cargar más</button> }
      </div>
    </div>
  </div>;
};

export default Home;
