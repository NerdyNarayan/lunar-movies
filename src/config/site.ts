import { FaHome } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import { GiBlackKnightHelm } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { type IconType } from "react-icons/lib";
export type SiteConfig = typeof siteConfig;
export const siteConfig = {
  name: "Lunar Movies",
  description: "Explore the world of movies and TV shows.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links:{

  },
  author:{
    name:"Apurva Pradhan",
    web:"https://oktaycolakoglu.com"
  }

};

export type NavItem={
  title:string
  href:string
  icon:IconType
}
const home={
  title:"Home",
  href:"/",
  icon: FaHome
}
const movies={
  title: "Movies",
  href: "/movie",
  icon: MdLocalMovies
}
const tvShows={
  title: "TV Shows",
  href: "/tv-show",
  icon: PiTelevision
}
const  anime={
  title: "Anime",
  href: "/anime",
  icon: GiBlackKnightHelm
}
const people={
  title: "People",
  href: "/people",
  icon: FaUser
}
const trending={
  title: "Trending",
  href: "/trending",
  icon: IoMdTrendingUp
}
export const navItems={
  items:[home,movies,tvShows,anime,people,trending] 
}