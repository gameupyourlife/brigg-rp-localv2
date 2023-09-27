import { getPostData } from "@/utils/postData"
import "./styles.css"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Brigg RP - Changelog',
    description: 'Der Changelog von Brigg RP. Hier findest du alle Änderungen, die auf Brigg RP vorgenommen wurden.',
}

export default async function Changelog(){
  const postData = await getPostData("changelog")
  return(
    <div className='pt-20 bg-[var(--background)] h-full px-auto flex justify-center min-h-screen pb-10'>

      <div className='text-[var(--text)]  max-w-[1000px] markdown-body px-10 md:px-20 bg-[var(--background)]' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  )
}


