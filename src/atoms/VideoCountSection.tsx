import React from 'react';

interface Props {
    hitCount?: number;
};

const VideoCountSection = ({ hitCount }: Props) => {

    return (
        <div className="text-xs md:text-sm lg:text-md xl:text-lg m-1">
            <span className='text-whisky xs:text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>{hitCount}</span>&nbsp;
            個の関連動画が公開されています！
        </div>
    );
}

export default VideoCountSection;