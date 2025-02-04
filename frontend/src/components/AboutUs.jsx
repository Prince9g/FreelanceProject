import React from 'react'
import Myteam from './Myteam';

const AboutUs = () => {
  const info = [
    {
      title: "Our Services",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fugiat eligendi esse sequi cupiditate sapiente obcaecati molestias iste dignissimos dolore enim adipisci soluta ducimus voluptate blanditiis, amet laboriosam at odio ipsam nobis. Magni nostrum odio unde alias, officiis ullam voluptatum modi dolo",
    },
    {
      title: "Experience",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fugiat eligendi esse sequi cupiditate sapiente obcaecati molestias iste dignissimos dolore enim adipisci soluta ducimus voluptate blanditiis, amet laboriosam at odio ipsam nobis. Magni nostrum odio unde alias, officiis ullam voluptatum modi ",
    },
    {
      title: "Accountability",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fugiat eligendi esse sequi cupiditate sapiente obcaecati molestias iste dignissimos dolore enim adipisci soluta ducimus voluptate blanditiis, amet laboriosam at odio ipsam nobis. Magni nostrum odio unde alias, officiis ullam voluptatum modi",
    },
  ];

  return (
    
    <div>
    <div className="p-8">
      
      <div className="md:flex md:justify-between md:items-start md:gap-x-8">
        {/* image */}
        <div className="text-justify text-xl md:w-1/2 md:mt-6">
        <h1 className="text-center text-2xl font-bold md:mb-6">About Us</h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro dolorum quaerat similique sed voluptate quasi facilis consequatur ipsam voluptatum obcaecati. Distinctio soluta similique, quae, corrupti explicabo illum minus maxime fuga deleniti odit velit quisquam obcaecati asperiores laudantium, non voluptatum veniam quo voluptatem reiciendis dignissimos eos. Dolorum repudiandae numquam natus vel doloremque asperiores quod totam, hic praesentium possimus, pariatur voluptatibus harum tenetur provident ea repellat! Eius nihil placeat numquam laborum porro fugiat accusamus distinctio saepe deleniti aspernatur, labore quam tenetur minima, dolorem voluptates nisi blanditiis atque consequatur eos? Sequi, veniam est. Quo animi corrupti tempore numquam quis dignissimos veniam voluptatem quae.
        </div>
        {/* content  */}
        <div className="m-0 p-0">
            <img src="https://www.frenchessence.com/cdn/shop/files/6_bc6a3b04-f64d-4edc-9392-0aff7daf55a6.jpg?v=1705747926" className="mt-8 md:mt-0 object-contain md:w-full md:h-[650px] rounded-xl"/>
        </div>
      </div>
    </div>
    {/* why us section  */}
    <div className="border-t-2 border-gray-300 m-4">
      <div className="text-xl font-semibold m-2">Why Us?</div>
      <div className="m-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fugiat eligendi esse sequi cupiditate sapiente obcaecati molestias iste dignissimos dolore enim adipisci soluta ducimus voluptate blanditiis, amet laboriosam at odio ipsam nobis. Magni nostrum odio unde alias, officiis ullam voluptatum modi dolores dignissimos! Vel quisquam omnis neque accusamus laboriosam rerum rem fuga! Amet, quaerat molestias. Facilis expedita amet eos quos!</div>
    </div>
    <div className="bg-gray-200 py-10 px-5 flex flex-col md:flex-row gap-6 justify-center items-center">
      {info.map((item, index) => (
        <div
          key={index}
          className="bg-secondary text-white p-6 md:w-1/3 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 mt-4 text-center text-black">{item.title}</h2>
          <p className="text-lg text-justify">{item.description}</p>
        </div>
      ))}
    </div>

    {/* mission value  */}
    <div className="md:flex md:mt-8 overflow-x-hidden mb-8">
      <div className="md:w-full h-full m-4 md:m-0">
    <img src="https://www.frenchessence.com/cdn/shop/files/6_bc6a3b04-f64d-4edc-9392-0aff7daf55a6.jpg?v=1705747926" className="mt-8 md:mt-0 object-contain w-full md:h-[500px] rounded-xl md:rounded-3xl"/>
    </div>
      <div className="flex flex-col justify-evenly">
    <div className="m-4">
      <div className="text-xl font-semibold m-2">Our Mission</div>
      <div className="m-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fugiat eligendi esse sequi cupiditate sapiente obcaecati molestias iste dignissimos dolore enim adipisci soluta ducimus voluptate blanditiis, amet laboriosam at odio ipsam nobis. Magni nostrum odio unde alias, officiis ullam voluptatum modi dolores dignissimos! Vel quisquam omnis neque accusamus laboriosam rerum rem fuga!</div>

    </div>
    <div className="m-4">
      <div className="text-xl font-semibold m-2">Our Values</div>
      <div className="ml-2"><span className="font-semibold text-lg">Transparency: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, mollitia?</div>
      <div className="ml-2"><span className="font-semibold text-lg">Accountability: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, mollitia?</div>
      <div className="ml-2"><span className="font-semibold text-lg">Integrity: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, mollitia?</div>
    </div>
    </div>
    </div>
    <Myteam/>
    </div>
  )
}

export default AboutUs;
