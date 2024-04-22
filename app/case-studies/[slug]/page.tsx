import {getAllPostsPath, getPostData} from 'app/lib/mdx-data';
import {MDXRemote} from "next-mdx-remote/rsc";
import React, {Suspense} from "react";
import {components} from "../../lib/mdx-components";

export default function Page({params}) {
    return (
        <section>
            <a href="/case-studies" className="mb-6 inline-block text-sm">
                Back to all case studies
            </a>
            <Suspense>
                <MDXRemote source={getPostData('case-studies', params!.slug).content} components={components}/>
            </Suspense>
        </section>
    );
}

export const generateStaticParams = async () => {
    return getAllPostsPath('case-studies').map(x => ({
        slug: x,
    }));
}

// export const getStaticProps = (async (context) => {
//     const content = await serialize(getPostData('case-studies', context.params!.slug as string).content);
//     return {props: {mdxContent: content}}
// }) satisfies GetStaticProps<{
//     mdxContent: any
// }>