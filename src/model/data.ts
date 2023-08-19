export interface Data {
    wiskeys: Wiskey[];
}

export interface Wiskey {
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