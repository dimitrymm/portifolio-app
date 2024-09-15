import { asText } from '@prismicio/client';
import dayjs from 'dayjs';
import Link from 'next/link';
import { AllDocumentTypes } from '../../../prismicio-types';

interface PostItemProps {
    post: AllDocumentTypes;
}

export default function PostItem({ post }: PostItemProps) {
    return (
        <div className="flex flex-col gap-2 py-4 bg-red-950 transition duration-500 hover:bg-red-900 rounded-xl px-1">
            <Link
                className="font-medium transition-opacity hover:opacity-70"
                href={post.uid}
            >
                <div className="flex flex-col gap-2">
                    <h3 className="transition-opacity duration-200 dark:text-white hover:opacity-70 text-2xl">
                        {asText(post.data.title)}
                    </h3>
                    <p className="font-normal">{asText(post.data.subtitle)}</p>
                </div>

                <div
                    className="mt-1 relative w-full h-48 bg-cover bg-center rounded-xl"
                    style={{
                        backgroundImage: `url(${post.data.image?.url})`,
                        opacity: 0.5,
                    }}
                ></div>
            </Link>
            <p className="text-sm">
                Por{': '}
                <Link className="hover:underline" href="#">
                    {post.data.autor}
                </Link>
                <time dateTime="2024-09-12" className="text-gray-300">
                    - {dayjs(post.first_publication_date).format('DD/MM/YYYY')}
                </time>
            </p>
        </div>
    );
}
