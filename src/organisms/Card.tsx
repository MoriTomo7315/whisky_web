import React from 'react';
import WhiskyTypeTag from '../atoms/WhiskyTypeTag';
import AffiliateZone from './AffiliateZone';
import VideoCountSection from '../atoms/VideoCountSection';
import { Whisky } from '../model/data';


interface Props {
    whisky: Whisky
};


const Card = ({ whisky }: Props) => {
    let videoIds: string[] = ["", ""];
    if (whisky.videos.length > 1) {
        const list1 = whisky.videos.slice(0, 2)
        videoIds[0] = list1[0].id
        videoIds[1] = list1[1].id
    }
    return (
        <div className='inline-block p-2 shadow bg-white my-8 w-full'>
            <div className="flex justify-between items-center">
                <a href={`/detail/${whisky.id}`} className="text-black m-2 py-2 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                    {whisky.name}
                </a>
                <WhiskyTypeTag type={whisky.type} />
            </div>
            <VideoCountSection hitCount={whisky.hit_count} />
            <div className="flex justify-between">
                {
                    videoIds.map((videoId, index) => {
                        const thumbnailUrl = 'https://img.youtube.com/vi/' + videoId + '/sddefault.jpg'
                        const videoUrl = 'https://www.youtube.com/watch?v='+videoId
                        return (
                            <div key={index} className="w-11/12 hover:w-full h-auto bg-cover rounded-t lg:rounded-t-none lg:rounded-l m-4">
                                <a href={videoUrl}>
                                    <img src={thumbnailUrl} alt={whisky.videos[index].title} />
                                </a>
                                {/* <iframe className='w-full aspect-video'
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe> */}
                            </div>
                        );
                    })
                }
            </div>
            <button className="bg-gray-200 m-1 px-4 py-2 text-xs md:text-sm lg:text-md xl:text-lg">
                <a href={`/detail/${whisky.id}`}>
                    YouTube動画をもっと見る
                </a>
            </button>
            <AffiliateZone whisky={whisky} />
        </div >
    );
}

export default Card;


