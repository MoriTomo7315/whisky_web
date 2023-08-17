import React from 'react';

interface Props {
    type?: string;
};

const WiskeyTypeTag = ({ type }: Props) => {

    return (
        <button className="apl_btn">
            {type}
        </button>
    );
}

export default WiskeyTypeTag;