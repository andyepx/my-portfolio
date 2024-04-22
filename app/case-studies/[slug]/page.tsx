import type {Metadata} from 'next';
import {MDXRemote} from 'next-mdx-remote/rsc'
import {components} from "../../lib/mdx-components";
import {getPostData} from "../../lib/mdx-data";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Case Studies',
    description: 'A few case studies from past projects.',
};

export default function Page({params}) {
    return (
        <section>
            <Link href="/case-studies" className="mb-6 inline-block text-sm">
                Back to all case studies
            </Link>
            <MDXRemote source={getPostData('case-studies', params.slug).content}
                       components={{...components, ...(params.components || {})}}/>
        </section>
    );
}