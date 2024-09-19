import React, { useEffect, useState } from "react";
import Myarticle from "../components/Myarticle";
import axios from "axios";

export default function Blog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("data.json")
      .then((res) => {
        console.log(res.data.articles);
        setArticles(res.data.articles || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section className=" bg-slate-300 flex dark:bg-zinc-700 items-center justify-center">
      <div className="container sm:w-2/3 ">
        <div className="pt-20 md:pt-40  mb-20">
          <div className="grid grid-cols-1 gap-y-8 ">
            {articles.length > 0 ? (
              articles.map((article) => (
                <Myarticle key={article.id} article={article} />
              ))
            ) : (
              <p>No articles available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
