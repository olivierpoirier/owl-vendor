import { motion } from "framer-motion"

const categories = [
  "Matériaux",
  "Nourriture",
  "Outils",
  "Métaux",
  "Sorts",
  "Armes",
  "Armures",
  "Autres"
]

export default function ShopCategoriesSlider({ world, onBack }) {
  return (
    <div className="w-full h-full bg-gray-800 text-white flex flex-col overflow-y-auto">
      <div className="p-4 border-b border-gray-600 flex justify-between items-center">
        <h2 className="text-xl font-bold">Monde : {world.title}</h2>
        <button onClick={onBack} className="text-sm underline text-gray-300">
          Retour
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {categories.map((category) => (
          <motion.div
            key={category}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-black rounded-lg shadow p-4 text-center font-semibold cursor-pointer"
            onClick={() => alert(`Section : ${category}`)}
          >
            {category}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
