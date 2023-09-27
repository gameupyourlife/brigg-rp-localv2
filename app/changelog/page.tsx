import { getPostData } from "@/utils/postData"
import "./styles.css"

export default async function Changelog(){
  const postData = await getPostData("changelog")
  return(
    <div className='pt-20 bg-[var(--background)] h-full px-auto flex justify-center min-h-screen pb-10'>

      <div className='text-[var(--text)]  max-w-[1000px] markdown-body px-10 md:px-20 bg-[var(--background)]' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  )
}


