import React from 'react';
import data from '../data/output20230817.json'

interface Props {
    index: number;
}

const TopPageTemplate = ({ index }: Props) => {

    let wiskeyList = data.wiskeys
    wiskeyList.sort(
        (firstObject, secondObject) =>
            (firstObject.hit_count < secondObject.hit_count) ? 1 : -1
    );

    let wiskey = wiskeyList[index]

    return (
        <div className='container mx-auto max-w-full text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            <div>
                {wiskey.name}
            </div>
            <div className='container mx-auto md:w-8/12'>
                {
                    wiskey.videos.map((video, index) => {
                        const thumbnailUrl = 'https://img.youtube.com/vi/' + video.id + '/sddefault.jpg'
                        return (
                            <div>
                                <div className="text-black m-2 py-2 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                                    {index + 1}: {video.title}
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
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default TopPageTemplate;
