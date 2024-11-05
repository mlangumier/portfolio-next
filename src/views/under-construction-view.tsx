import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { underConstructionImage } from '@/assets/images';

const UnderConstructionView: React.FC = () => {
    return (
        <div className="">
            <div className="max-w-[480px] bg-grey-light md:flex md:max-w-[1140px] md:flex-row">
                <div className="bg-secondary px-8 py-12 text-center md:flex md:flex-[55%] md:flex-col md:justify-center">
                    <h2 className="pb-8 font-bold uppercase md:pb-12">[ Work in Progress ]</h2>
                    <div>
                        <p className="pb-4">
                            Welcome! This page is currently in construction. I appreciate your visit
                            and your patience while I keep working on the next features.
                        </p>
                        <p className="pb-4">
                            In the meanwhile, fell free to visit the{' '}
                            <Link
                                className="underline hover:text-secondary-dark"
                                href={'https://github.com/mlangumier/portfolio-next'}
                                target="_blank"
                            >
                                Github repository
                            </Link>{' '}
                            if you want information on what to expect and what tools I am using on
                            this project.
                        </p>
                        <p>I hope to see you soon!</p>
                    </div>
                </div>
                <div className="m-auto p-8 md:flex-[45%]">
                    <Image
                        src={underConstructionImage}
                        alt="Undraw illustration for coming soon page"
                        className="m-auto w-full max-w-[480px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default UnderConstructionView;
