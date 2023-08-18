import React from 'react';
import WiskeyTypeTag from '../atoms/WiskeyTypeTag';
import AffiliateZone from './AffiliateZone';
import VideoCountSection from '../atoms/VideoCountSection';
import { Wiskey } from '../model/data';


interface Props {
    wiskey: Wiskey
};


const Card = ({ wiskey }: Props) => {
    let videoIds: string[] = ["", ""];
    if (wiskey.videos.length > 1) {
        const list1 = wiskey.videos.slice(0, 2)
        videoIds[0] = list1[0].id
        videoIds[1] = list1[1].id
    }
    return (
        <div className='inline-block p-2 shadow bg-white my-8'>
            <div className="flex justify-between items-center">
                <a href={`/detail/${wiskey.id}`} className="text-black m-2 py-2 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                    {wiskey.name}
                </a>
                <WiskeyTypeTag type={wiskey.type} />
            </div>
            <VideoCountSection hitCount={wiskey.hit_count} />
            <div className="flex justify-between">
                {
                    videoIds.map((videoId, index) => {
                        const thumbnailUrl = 'https://img.youtube.com/vi/' + videoId + '/sddefault.jpg'
                        return (
                            <div className="h-auto bg-cover rounded-t lg:rounded-t-none lg:rounded-l object-center m-4">
                                <iframe className='w-full aspect-video'
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        );
                    })
                }
            </div>
            <button className="bg-gray-200 m-1 px-4 py-2 text-xs md:text-sm lg:text-md xl:text-lg">
                YouTube動画をもっと見る
            </button>
            <AffiliateZone />
        </div >
    );
}

export default Card;


