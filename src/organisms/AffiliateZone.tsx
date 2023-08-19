import React from 'react';
import { Wiskey } from '../model/data';
import AffiliateCard from './AffiliateCard';

interface Props {
    wiskey: Wiskey
};

const AffiliateZone = ({ wiskey }: Props) => {
    return (
        <div className='p-10'>
            {
                wiskey.affiliates.map((affiliate, index) => {
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