import React from 'react';
import { getAllPostIds, getPostData } from "@/utils/postData";
import "./styles.css"
import Link from 'next/link';



const postFolder = "dev-diaries";
// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
    const posts = await getAllPostIds(postFolder);

    return posts.map((post: any) => ({
        id: post.id,
    }))
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: any) {
    const { id } = params
    const postData = await getPostData(id, postFolder)

    return (
        <div className='pt-32 bg-[var(--background)]  px-auto flex flex-col  items-center pb-10'>

            <h3 className='custom-font text-[var(--text-lighter)]'>{postData.date}</h3>

            <h1 className="custom-font px-10 mb-10 pb-1  border-b-2 border-[#21262d] text-3xl font-extrabold leading-9 tracking-tight  sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">{postData.title}</h1>

            <div className=' md:px-20 px-10 max-w-[1000px]'>
                <div className='text-[var(--text)]   markdown-body  ' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                <Link href="/team">
                    <p className='text-[var(--text-lighter)] mt-3'>- {postData.author}</p>
                </Link>
                <div className='mt-5 mb-3 border-t-2 border-[#21262d]' />
                <div className='w-full flex justify-between'>
                    <Link href="/dev-diaries"  >
                        <p className='w-fit  text-[var(--text)] hover:text-[var(--text-lighter)] transition-colors duration-200'> &larr; Alle Diaries </p>
                    </Link>
                    <Link href={postData.href ?? "#"} target='_blank'>
                        <p className='w-fit  text-[var(--accent)] hover:text-[var(--accent-lighter)] transition-colors duration-200'> Auf Discord kommentieren </p>
                    </Link>
                </div>

            </div>
        </div>
    );

    // ...
}