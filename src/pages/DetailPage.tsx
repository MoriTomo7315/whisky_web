import React from 'react';
import { useParams } from 'react-router-dom'
import { WhiskyDataClient } from '../client/WhiskyDataClient';

const DetailPage = () => {
    const whiskyId = useParams().whiskyId;

    if (!isNaN(Number(whiskyId)) && whiskyId != undefined) {
        let whisky = WhiskyDataClient.getById(Number(whiskyId))
        if (whisky == undefined) {
            return <p>404 Not Found</p>;
        } else {
            return (
                <div className='container mx-auto max-w-full max-h-full text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
                    <div>
                        {whisky.name}
                    </div>
                    <div className='container mx-auto md:w-8/12'>
                        {
                            whisky.videos.map((video, index) => {
                                return (
                                    <div className="w-full h-auto">
                                        <div className="text-black m-2 py-2 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                                            {index + 1}: {video.title}
                                        </div>
                                        <div
                                            className="w-full h-auto bg-cover rounded-t lg:rounded-t-none lg:rounded-l object-center m-4"
                                        >
                                            <iframe className='w-full aspect-video'
                                                src={`https://www.youtube.com/embed/${video.id}`}
                                                frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen>
                                            </iframe>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            );
        }
    } else {
        return <p>404 Not Found</p>;
    }
}

export default DetailPage;

