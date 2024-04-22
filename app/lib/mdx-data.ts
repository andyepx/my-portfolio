import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = (page: string) => path.join(process.cwd(), `app/${page}/posts`);
const mdx_file_extention = '.mdx';

function getAllFilesInDirectory(page) {
    const fileNames = fs.readdirSync(postsDirectory(page));
    return fileNames.map((fileName) => {
        return path.parse(fileName)
    })
}

function getMdxFiles(page: string) {
    const allFiles = getAllFilesInDirectory(page);
    return allFiles.filter(parsedFile => parsedFile.ext == mdx_file_extention);
}

export function getAllPostsPath(page: string) {
    const allMdxFiles = getMdxFiles(page);
    return allMdxFiles.map((parsedFile) => {
        return {
            params: {
                id: parsedFile.name
            }
        }
    })
}

export function getPostsMetaData(page: string) {
    const allMdxFiles = getMdxFiles(page);

    return allMdxFiles.map((parsedFile) => {
        const fullPath = path.join(postsDirectory(page), parsedFile.base);

        // get MDX metadata and content
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        // get metadata, content
        const {data, content} = matter(fileContents);
        let metadata = data;
        metadata['id'] = parsedFile.name;
        return metadata;
    });
}

export function getPostData(page: string, id: string) {
    const fullPath = path.join(postsDirectory(page), id + mdx_file_extention);

    // get MDX metadata and content
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // get metadata, content
    const {data, content} = matter(fileContents);

    let metadata = data;
    metadata['id'] = id;

    return {'metadata': metadata, 'content': content};
}