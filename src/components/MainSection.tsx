'use client';
import { GithubIcon, Linkedin, Text } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import dimy from '../public/dimy.png';
import EffectMachineText from './EffectMachineText';

export default function MainSection() {
    return (
        <section className="flex px-4 sm:px-0">
            <div className="w-full">
                <div className="flex space-x-8 text-left">
                    <Image
                        alt="dimy"
                        src={dimy}
                        className="aspect-square h-28 w-28 rounded-full border-2 border-red-900"
                    />

                    <h1 className="flex flex-col">
                        <div className="text-3xl font-bold sm:text-4xl">
                            <EffectMachineText
                                text="Conheça o Dimitry"
                                hideCursor
                            />
                        </div>
                        <span className="text-neutral-500">
                            <EffectMachineText
                                text="Desenvolvedor Front-End"
                                delay={1300}
                                hideCursor
                            />
                        </span>
                    </h1>
                </div>

                <p className="mx-auto mt-10 w-auto max-w-3xl text-left text-lg font-light">
                    Estou aprendendo a desenvolver os melhores produtos
                    utilizando as ferramentas que tragam as melhores
                    experiencias para o usuário, e consequentemente me tornando
                    o melhor programador e crescendo na carreira tech
                </p>

                <div className="mt-10 flex items-center justify-start lg:gap-1 sm:gap-7 font-semibold">
                    <Link
                        href="/articles"
                        className="red-underline flex space-x-1"
                    >
                        <Text />
                        <span>Blogs!</span>
                    </Link>
                    <a
                        href="https://github.com/dimitrymm"
                        className="red-underline flex "
                    >
                        <GithubIcon />
                        <span>Github</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/dimitrymm/"
                        className="red-underline flex "
                    >
                        <Linkedin />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="https://bsky.app/profile/dimitrymm.bsky.social"
                        className="red-underline "
                    >
                        <span>BluSky</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
