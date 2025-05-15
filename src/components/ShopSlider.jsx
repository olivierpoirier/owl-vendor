import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import shopWorlds from "../data/shopWorlds.json"
import monde1 from "../assets/monde1.png"

const imagesMap = {
  "monde1.png": monde1,
}

export default function ShopSlider({ onWorldSelect }) {
  const [worlds, setWorlds] = useState([])

  useEffect(() => {
    setWorlds(shopWorlds)
  }, [])

  return (
    <div className="w-full h-full bg-gray-900 text-white flex flex-col relative overflow-y-auto">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold">Choisis un Monde</h2>
      </div>

      <div className="flex flex-col items-center gap-4 p-6">
        {worlds.map((world) => (
          <motion.div
            key={world.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex w-64 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 cursor-pointer p-4 gap-2"
            onClick={() => onWorldSelect(world)}
          >
            <img
              src={imagesMap[world.imageName]}
              alt={world.title}
              className="w-12 object-cover"
            />
            <div className="text-black text-sm font-semibold py-1">{world.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
