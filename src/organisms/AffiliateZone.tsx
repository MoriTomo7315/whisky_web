import React from 'react';
import { Whisky } from '../model/data';
import AffiliateCard from './AffiliateCard';

interface Props {
    whisky: Whisky
};

const AffiliateZone = ({ whisky }: Props) => {
    return (
        <div className='sm:px-1'>
            {
                whisky.affiliates.map((affiliate, index) => {
                    return (
                        <div>
                            <hr />
                            <AffiliateCard
                                key={index}
                                affiliate={affiliate}
                            />
                        </div>
                    );
                })
            }
            
        </div>
    );
}

export default AffiliateZone;