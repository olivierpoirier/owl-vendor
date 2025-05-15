import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import HomePage from "./components/HomePage"
import ShopSlider from "./components/ShopSlider"
import ShopCategoriesSlider from "./components/ShopCategoriesSlider"

export default function App() {
  const [step, setStep] = useState("home") // "home", "world", "categories"
  const [selectedWorld, setSelectedWorld] = useState(null)

  const handleEnterShop = () => setStep("world")
  const handleWorldSelect = (world) => {
    setSelectedWorld(world)
    setStep("categories")
  }
  const handleBackToWorlds = () => {
    setSelectedWorld(null)
    setStep("world")
  }
  const handleBackToHome = () => {
    setSelectedWorld(null)
    setStep("home")
  }

  return (
    <div className="relative w-full min-w-96 h-screen overflow-hidden bg-gray-100">
      <AnimatePresence mode="wait">
        <p>alloaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        {step === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full z-10"
          >
            <HomePage onEnterShop={handleEnterShop} />
          </motion.div>
        )}

        {step === "world" && (
          <motion.div
            key="world"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full z-20"
          >
            <ShopSlider onWorldSelect={handleWorldSelect} onBack={handleBackToHome} />
          </motion.div>
        )}

        {step === "categories" && (
          <motion.div
            key="categories"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full z-30"
          >
            <ShopCategoriesSlider world={selectedWorld} onBack={handleBackToWorlds} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
