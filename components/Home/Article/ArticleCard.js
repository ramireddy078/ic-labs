import Image from "next/image";
import Link from "next/link";
import React from "react";

function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full shadow-xl">
      <Image
        src={article.coverImage}
        alt={article.title}
        width={3000}
        height={3000}
        className="w-ful h-ful object-cover"
      />
      <div className="p-5">
        <div className="">
          <div className="space-x-4">
            {/* <Image src={article.userImage} alt={article.username} width={40} height={40} className='rounded-full'/> */}
            <p className="text-lg text-black text-opacity-70 font-semibold">
              {article.title}
            </p>
            <Link href={"/blog/read-more/interview-confidence"}>
              <button className="mt-4 mb-3 hover:text-green-600 text-lg text-black font-bold underline">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
