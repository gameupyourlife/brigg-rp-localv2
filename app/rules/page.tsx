
import { getPostData } from "@/utils/postData"
import "./styles.css"
import Image from "next/image"
import { useRef } from "react"


export default async function Rules(){
  const postData = await getPostData("rules")
  return(
    <div className='pt-20 bg-[var(--background)] h-full flex justify-center min-h-screen pb-10 '>

      {/* <Image src="/civWoman.png" alt="Civ Woman" width={200} height={600} className={`${isInViewport(element) ? "absolute" : "fixed"} bottom-0 left-10`} /> */}

      <div className='mx-5 md:mx-10 text-[var(--text)]  max-w-[1000px] markdown-body' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  )
}
