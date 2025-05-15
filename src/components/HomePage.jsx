export default function HomePage({ onEnterShop }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-700 to-indigo-900 flex flex-col items-center justify-center text-white px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Bienvenue dans le Magasin Magique</h1>
      <p className="mb-6 text-lg max-w-xl">
        Explore des mondes mystérieux et découvre des objets uniques pour tes aventures fantastiques.
      </p>
      <button
        onClick={onEnterShop}
        className="px-8 py-4 bg-white text-purple-800 text-lg font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        Entrer dans le magasin
      </button>
    </div>
  )
}
