export interface Data {
    whiskys: Whisky[];
}

export interface Whisky {
    id: number;
    name: string;
    type: string;
    hit_count: number;
    videos: Video[];
    items: string[];
    affiliates: Affiliate[];
}

export interface Video {
    id: string;
    title: string;
}

export interface Affiliate {
    affiliateUrl: string;
    itemName: string;
    itemPrice: number;
    imageUrl: string;
    shopName: string;
}