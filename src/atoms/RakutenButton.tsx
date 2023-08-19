import React from 'react';

interface Props {
    url?: string;
};

const RakutenButton = ({ url }: Props) => {

    return (
        <button className="text-white bg-rakuten px-2 py-1 md:px-4 sm:py-2">
            <a href={url} className="text-xs md:text-sm lg:text-md xl:text-lg">
                詳細を確認
            </a>
        </button>
    );
}

export default RakutenButton;