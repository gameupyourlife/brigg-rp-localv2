
import { getPostData } from "@/utils/postData"
import "./styles.css"
import Image from "next/image"
import { useRef } from "react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Brigg RP - Regelwerk',
    description: 'Das Regelwerk von Brigg RP. Hier findest du alle Regeln, die du auf Brigg RP beachten musst.',
}


export default async function Rules(){
  const postData = await getPostData("rules")
  return(
    <div className='pt-20 bg-[var(--background)] h-full flex justify-center min-h-screen pb-10 '>

      {/* <Image src="/civWoman.png" alt="Civ Woman" width={200} height={600} className={`${isInViewport(element) ? "absolute" : "fixed"} bottom-0 left-10`} /> */}

      <div className='mx-5 md:mx-10 text-[var(--text)]  max-w-[1000px] markdown-body' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  )
}
