import React from 'react'
import Services from './Services'

const Home = () => {
  return (
    <div>
      {/* <Services/> */}
      <div className="flex flex-col md:flex-row items-start justify-between p-10 bg-white h-screen">
      {/* Left Section */}
      <div className="max-w-lg space-y-5 mt-20">
        <p className="text-yellow-500 font-semibold">WE HELP YOU</p>
        <h2 className="text-4xl font-bold text-gray-900">
          Sell <span className="text-gray-900">Your Stunning</span> Products
        </h2>
        <p className="text-gray-600 mt-3">
          We can Help you through our unique Servies.
        </p>
        <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-purple-700">
          MORE DETAILS <span>→</span>
        </button>
      </div>

      {/* Right Section - Product Cards */}
      <div className="md:relative my-4 md:my-0">
        {/* Product 1 */}
        <div className="bg-white shadow-lg rounded-lg p-5">
          <div className="w-48 h-48">
            <img
              src="https://jimitcard.com/wp-content/uploads/2021/05/Purple-Gift-Paper-Bag-1.jpg"
              alt="p1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="mt-8 text-center">
            <p className="text-yellow-500 font-bold">Explore</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white shadow-lg rounded-lg p-5 md:absolute md:top-20 md:right-64">
          <div className="w-48 h-48">
            <img
              src="https://image.made-in-china.com/2f0j00jmzWdsZqLfra/Customized-Luxury-Vinyl-Gold-Foil-Glass-Bottle-Label-Printed-on-Both-Sides-Cosmetic-Perfume-Sticker.webp"
              alt="Beats Headphone"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-8 text-center">
            <p className="text-yellow-500 font-bold">Explore</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
