import React from 'react';
import { Affiliate } from '../model/data';
import RakutenButton from '../atoms/RakutenButton';

interface Props {
    affiliate: Affiliate
}

const AffiliateCard = ({ affiliate }: Props) => {
    return (
        <div className='flex justify-between items-center m-4'>
            <div className='flex-1 w-1/5 h-full m-1 text-center'>
                <img
                    className="object-cover"
                    src={affiliate.imageUrl}
                    alt={affiliate.itemName}
                />
            </div>
            <div className='flex-grow w-2/5 h-full text-xs md:text-sm lg:text-md xl:text-l m-1'>
                {affiliate.itemName}
            </div>
            <div className='flex-1 w-2/5 h-full text-xs md:text-sm lg:text-md xl:text-lg m-1 text-center'>
                <div className='m-2'>
                    <span className='text-rakuten font-bold xs:text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>{Intl.NumberFormat().format(affiliate.itemPrice)}円</span>
                </div>
                <RakutenButton url={affiliate.affiliateUrl} />
            </div>
        </div>
    );
}

export default AffiliateCard;