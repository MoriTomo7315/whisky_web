import React from 'react';

interface Props {
    url?: string;
};

const RakutenButton = ({ url }: Props) => {

    return (
        <button className="flex-1 text-white bg-rakuten px-4 py-2 m-1">
            <a href={url}>
                詳細を確認
            </a>
        </button>
    );
}

export default RakutenButton;