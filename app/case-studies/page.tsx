import type {Metadata} from 'next';
import Link from "next/link";
import {getPostsMetaData} from "../lib/mdx-data";

export const metadata: Metadata = {
    title: 'Case Studies',
    description: 'A few case studies from past projects.',
};

export default function Page() {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">case studies</h1>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    I am passionate about building products that are fast, lightweight and loved by users. I have a
                    strong focus on accessibility and sustainability, reducing efforts and impact of the products I
                    design and build.
                </p>
                <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>
                {getPostsMetaData('case-studies').map((post) => (
                    <div key={post.id} className="flex flex-col space-y-1 mb-4">
                        <Link href={`/case-studies/${post.id}`}>
                            {post.title}
                        </Link>
                        <p className="prose dark:prose-invert leading-normal">
                            {post.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
