
import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostData {
    id: string,
    contentHtml: string,
    title: string,
    date: string,
    author: string,
    href: string,
    tags: Array<string>,
    summary: string,
}


const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPostData(id: string, subFolder: string = ''): Promise<PostData> {
    var fullPath;
    if (subFolder !== '') {
        fullPath = path.join(path.join(postsDirectory, subFolder), `${id}.md`);
    }
    else {
        fullPath = path.join(postsDirectory, `${id}.md`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml


    return {
        id,
        contentHtml,
        date: matterResult.data.date,
        title: matterResult.data.title,
        author: matterResult.data.author,
        href: matterResult.data.href,
        tags: matterResult.data.tags,
        summary: matterResult.data.summary,
    };
}


export function getAllPostIds(subFolder: string = '') {
    var fileNames;
    if (subFolder !== '') {
        fileNames = fs.readdirSync(path.join(postsDirectory, subFolder));
    } else {
        fileNames = fs.readdirSync(postsDirectory);
    }


    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export function getSortedPostsData(subFolder: string = '') {
    // Get file names under /posts
    var fileNames;
    if (subFolder !== '') {
        fileNames = fs.readdirSync(path.join(postsDirectory, subFolder));
    } else {
        fileNames = fs.readdirSync(postsDirectory);
    }
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string

        var fullPath;
        if (subFolder !== '') {
            fullPath = path.join(path.join(postsDirectory, subFolder), fileName);
        }
        else {
            fullPath = path.join(postsDirectory, fileName);
        }
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            date: matterResult.data.date,
            title: matterResult.data.title,
            author: matterResult.data.author,
            href: matterResult.data.href,
            tags: matterResult.data.tags,
            summary: matterResult.data.summary,
        };
    });
    // Sort posts by date
    return allPostsData.sort((d1, d2): any => {
        let date1 = new Date(d1.date).getTime();
        let date2 = new Date(d2.date).getTime();

        if (date1 < date2) {
            return 1;
        } else if (date1 > date2) {
            return -1;
        } else {
            return 0;
        }
    });

}
