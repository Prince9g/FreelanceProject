import React from 'react'

const ServiceStructure = ({image}) => {
  return (
    <div className="flex flex-col p-4 border m-4 md:m-2 rounded-xl">
        <div className="w-full h-60">
            <img src={image} className="object-cover w-full h-60"/>
        </div>
        <div className="text-justify hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae consectetur, doloribus nostrum harum, alias voluptatum, perspiciatis sit at quo vel delectus accusantium repellat. Doloribus id voluptas ut molestias atque sit eaque, aut rerum sunt aspernatur, repudiandae tenetur doloremque architecto! Reprehenderit, magni itaque quae velit maxime reiciendis necessitatibus placeat ullam. Esse ipsa suscipit perspiciatis, aliquam aliquid itaque ea? Voluptatum, blanditiis!
        </div>
        <div className="text-left mt-5 md:hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem temporibus dolorum quis illum dolor maiores mollitia suscipit, optio doloremque similique.</div>
        <button className="mt-4 pl-4 pr-4 pt-2 pb-2 bg-secondary rounded-3xl">
            Explore
        </button>
    </div>
  )
}

export default ServiceStructure
