import React from 'react'

const ServiceStructure = () => {
  return (
    <div className="flex flex-col p-4 border m-4 md:m-2">
        <div>
            <img src="https://do84cgvgcm805.cloudfront.net/article/585/1200/e2517ddf9da9da6c759704f24162a0fbbe5145e792fd61ee7278902dfb173338.jpg" className="object-contain"/>
        </div>
        <div className="text-justify hidden md:block">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed id vitae cupiditate maxime distinctio labore facilis, harum molestias ad minima ipsa quisquam sint exercitationem fuga doloribus et unde eos quaerat. Maiores est, dolorum, omnis dignissimos doloremque nam quasi laborum soluta dolores quibusdam porro reprehenderit dicta, itaque ea ab amet provident culpa saepe officia earum ipsam dolorem! Dolore, reiciendis! Quidem aut quas pariatur mollitia quod cum maiores enim beatae, unde ut cupiditate laudantium! Nihil unde assumenda perspiciatis quia quis ipsam, qui officiis numquam blanditiis eius deserunt alias est rerum dicta eaque culpa magnam ex itaque? Officiis provident eligendi ex eveniet eius?
        </div>
        <div className="text-left md:hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem temporibus dolorum quis illum dolor maiores mollitia suscipit, optio doloremque similique.</div>
        <button className="mt-2 pl-4 pr-4 pt-2 pb-2 bg-secondary rounded-3xl">
            Explore
        </button>
    </div>
  )
}

export default ServiceStructure
