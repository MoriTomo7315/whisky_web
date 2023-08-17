import React from 'react';

interface Props {
    url?: string;
};

const AmazonButton = ({ url }: Props) => {

    return (
        <button className="flex-1 text-white bg-amazon px-4 py-2 mx-1">
                Amazon
        </button>
    );
}

export default AmazonButton;