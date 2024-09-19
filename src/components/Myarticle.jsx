import React from "react";
import { PiBookOpenText } from "react-icons/pi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { TiWatch } from "react-icons/ti";
import { MdOutlineReadMore } from "react-icons/md";
export default function Article({ article }) {
  return (
    <div
      key={Article.id}
      className="shadow-personal w-auto flex flex-col justify-between
       md:h-80 xl:h-[22rem] mx-auto p-4 rounded-lg bg-white dark:bg-zinc-600 dark:text-white"
    >
      <div className="w-full  flex items-center gap-x-2 pb-2">
        <PiBookOpenText />
        <h3 className="pr-2">{article.title}</h3>
      </div>
      <hr />
      <div className="sm:flex xs:gap-x-4  py-4">
        <div className="flex items-center  justify-center w-full overflow-hidden">
          <img className="rounded-xl w-full h-full" src={article.image} alt="sperso" />
        </div>
        <p className="text-justify pt-4">{article.caption}</p>
      </div>
      <div className="flex items-center justify-between  pt-4 border-t text-sm">
        <div className="flex items-center gap-x-2">
          <FontAwesomeIcon icon={faPenToSquare} />
          <p>{article.author}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <TiWatch />
          <span value="">16 شهریور 1403</span>
        </div>
        <MdOutlineReadMore className="text-lg" />
      </div>
    </div>
  );
}
