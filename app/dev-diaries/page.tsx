import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import { getAllPostIds, getPostData, getSortedPostsData } from "@/utils/postData";
import Link from 'next/link';
import Tag from '@/components/Posts/Tag';
// import "./styles.css"
import { headers } from 'next/headers'

const postFolder = "dev-diaries";
const MAX_DISPLAY = 999

// Return a list of `params` to populate the [id] dynamic segment
// export async function generateStaticParams() {
//     const posts = await getAllPostIds(postFolder);

//     return posts.map((post: any) => ({
//         id: post.id,
//     }))
// }



// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page() {
    const posts = getSortedPostsData(postFolder);
    const headersList = headers() // Used to force dynamic rendering

    return (
        // <section className={`pt-20`}>
        //     <h2 className={""}>Blog</h2>
        //     <ul className={""}>
        //         {allPostsData.map(({ id, date, title, author }) => (
        //             <li className={""} key={id}>
        //                 <Link href={`/dev-diaries/${id}`}>{title}</Link>
        //                 <br />
        //                 <small className={""}>
        //                     <Date dateString={date} />
        //                 </small>
        //             </li>
        //         ))}
        //     </ul>
        // </section>

        <div className='pt-20 px-10 md:px-20  flex justify-center'>
            <div>
                <div className=" divide-y divide-gray-700 max-w-4xl w-screen">
                    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-[var(--text)] sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                            Dev Diaries
                        </h1>
                        <p className="text-lg leading-7 text-[var(--text-lighter)]">
                            Alle Dev Diaries an einem Ort
                        </p>
                    </div>
                    <ul className="divide-y divide-gray-700">
                        {!posts.length && 'No posts found.'}
                        {posts.slice(0, MAX_DISPLAY).map((post) => {
                            const { id, date, title, summary, tags } = post
                            return (
                                <li key={id} className="py-12">
                                    <article>
                                        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                            <dl>
                                                <dt className="sr-only">Veröffentlicht am</dt>
                                                <dd className="text-base font-medium leading-6 text-[var(--text-lighter)]">
                                                    <time dateTime={date}>{date}</time>
                                                </dd>
                                            </dl>
                                            <div className="space-y-5 xl:col-span-3">
                                                <div className="space-y-6">
                                                    <div>
                                                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                            <Link
                                                                href={`/dev-diaries/${id}`}
                                                                className="text-[var(--text)]"
                                                            >
                                                                {title}
                                                            </Link>
                                                        </h2>
                                                        <div className="flex flex-wrap">
                                                            {/* {tags?.map((tag: string) => (
                                                                <Tag key={tag} text={tag} />
                                                                // <div key={tag}>
                                                                //     {tag}
                                                                // </div>
                                                            ))} */}
                                                        </div>
                                                    </div>
                                                    <div className="prose max-w-none text-[var(--text-lighter)]">
                                                        {summary}
                                                    </div>
                                                </div>
                                                <div className="text-base font-medium leading-6">
                                                    <Link
                                                        href={`/dev-diaries/${id}`}
                                                        className="text-[var(--accent)] hover:text-[var(--accent-lighter)] transition-colors duartion-200"
                                                        aria-label={`Read more: "${title}"`}
                                                    >
                                                        Weiterlesen &rarr;
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {posts.length > MAX_DISPLAY && (
                    <div className="flex justify-end text-base font-medium leading-6">
                        <Link
                            href="/blog"
                            className="text-[var(--accent)] hover:text-[var(--accent-lighter)]"
                            aria-label="All posts"
                        >
                            Alle Diaries &rarr;
                        </Link>
                    </div>
                )}
            </div>

        </div>
    );

    // ...
}