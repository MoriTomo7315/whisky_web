import React from 'react';
import AmazonButton from '../atoms/AmazonButton';
import RakutenButton from '../atoms/RakutenButton';

const AffiliateZone = () => {
    return (
        <div>
            <div className="flex my-4 w-full text-xs md:text-sm lg:text-md xl:text-lg">
                <AmazonButton />
                <RakutenButton />
            </div>
        </div>
    );
}

export default AffiliateZone;