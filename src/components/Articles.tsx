import PostItem from '@/components/Posts/PostItem';
import { createClient } from '@/prismicio';
import { CircleArrowRight } from 'lucide-react';
import Link from 'next/link';

export default async function Articles() {
    const prismicClient = createClient();
    const posts = await prismicClient.getAllByType('post_blog').catch((e) => {
        console.error(e);
        return [];
    });
    return (
        <article className="mx-auto max-w-4xl space-y-6 px-4 sm:px-0">
            <div className="grid grid-cols-1 space-y-8">
                {posts.map((post) => (
                    <PostItem key={post.id} post={post} />
                ))}
            </div>
            <Link href="/articles" className="flex red-underline w-fit">
                <CircleArrowRight className="" />
                Mais Artigos!
            </Link>
        </article>
    );
}
