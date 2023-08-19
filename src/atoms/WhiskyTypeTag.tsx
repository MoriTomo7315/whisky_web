import React from 'react';

interface Props {
    type?: string;
};

const WhiskyTypeTag = ({ type }: Props) => {

    return (
        <button className="apl_btn">
            {type}
        </button>
    );
}

export default WhiskyTypeTag;