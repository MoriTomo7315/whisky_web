import React from 'react';

interface Props {
    url?: string;
};

const RakutenButton = ({ url }: Props) => {

    return (
        <button className="flex-1 text-white bg-rakuten px-4 py-2 mx-1">
            楽天市場
        </button>
    );
}

export default RakutenButton;