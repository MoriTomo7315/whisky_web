import React from 'react';
import { useParams } from 'react-router-dom'

import DetailPageTemplate from '../templates/DetailPageTemplate'


const DetailPage = () => {
    const params = useParams();
    if (!isNaN(Number(params.wiskeyId))) {
        return (
            <DetailPageTemplate index={Number(params.wiskeyId)} />
        );
    } else {
        return (
            <div>
                {typeof params.wiskeyId}
                wiskeyIdが存在しません。
            </div>
        );
    }

}

export default DetailPage;
