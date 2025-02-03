import React from 'react'

const AboutUs = () => {
  return (
    <div className="p-8">
      <h1 className="text-center text-2xl font-bold mb-6">About Us</h1>
      <div className="flex justify-between items-center gap-x-8">
        {/* image */}
        <div className="text-justify text-xl w-1/2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro dolorum quaerat similique sed voluptate quasi facilis consequatur ipsam voluptatum obcaecati. Distinctio soluta similique, quae, corrupti explicabo illum minus maxime fuga deleniti odit velit quisquam obcaecati asperiores laudantium, non voluptatum veniam quo voluptatem reiciendis dignissimos eos. Dolorum repudiandae numquam natus vel doloremque asperiores quod totam, hic praesentium possimus, pariatur voluptatibus harum tenetur provident ea repellat! Eius nihil placeat numquam laborum porro fugiat accusamus distinctio saepe deleniti aspernatur, labore quam tenetur minima, dolorem voluptates nisi blanditiis atque consequatur eos? Sequi, veniam est. Quo animi corrupti tempore numquam quis dignissimos veniam voluptatem quae.
        </div>
        {/* content  */}
        <div className="w-1/2 h-1/2">
            <img src="https://www.frenchessence.com/cdn/shop/files/6_bc6a3b04-f64d-4edc-9392-0aff7daf55a6.jpg?v=1705747926" className="object-contain w-full h-full"/>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
