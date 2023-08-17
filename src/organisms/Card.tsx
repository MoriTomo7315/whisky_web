import React from 'react';
import WiskeyTypeTag from '../atoms/WiskeyTypeTag';
import AffiliateZone from './AffiliateZone';
import VideoCountSection from '../atoms/VideoCountSection';


interface Props {
    imageUrl: string;
    type?: string;
    name?: string;
    videoId: string;
    hitCount: number
};

const Card = ({ imageUrl, type, name, videoId, hitCount }: Props) => {
    const thumbnailUrl = 'https://img.youtube.com/vi/' + videoId + '/sddefault.jpg'
    return (
        <div className='inline-block p-2 shadow bg-white'>
            <div className="flex">
                <div
                    className="flex-1 overflow-hidden w-1/4"
                >
                    <img
                        className="mt-2 h-auto w-full"
                        src={imageUrl}
                        alt={name}
                    />
                </div>
                <div
                    className="flex-1 bg-white rounded-b p-4  w-3/4"
                >
                    <WiskeyTypeTag type={type} />
                    <VideoCountSection hitCount={hitCount} />
                    <div className="my-4">

                        <div className="text-gray-900 font-bold m-1 text-xs md:text-sm lg:text-md xl:text-lg">
                            このウィスキーを紹介しているYouTube
                        </div>
                        <div
                            className="h-auto bg-cover rounded-t lg:rounded-t-none lg:rounded-l object-center m-4"
                        >
                            <img
                                className="m-1 rounded-lg shadow-xl h-auto w-1/2 hidden sm:inline-block"
                                src={thumbnailUrl}
                                alt="Woman workcationing on the beach"
                            />
                        </div>
                        <button className="bg-gray-200 m-1 px-4 py-2 text-xs md:text-sm lg:text-md xl:text-lg">
                            YouTube動画をもっと見る
                        </button>
                    </div>
                </div>
            </div>
            <AffiliateZone />
        </div>
    );
}

export default Card;


