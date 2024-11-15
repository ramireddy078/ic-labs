import { articleData } from '@/data/articledata'
import React from 'react'
import ArticleCard from './ArticleCard'

function Article() {
  return (
    <div className='py-20 bg-gray-200'>
      <div className='w-[80%] mx-auto'>
        <h1 className='text-4xl md:text-5xl text-gray-00 text-[#0c2e8a] font-bold'>Latest Articles</h1>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {articleData.map((article)=>{
                return (
                    <div key={article.id}>
                        <ArticleCard article={article}/>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Article;
