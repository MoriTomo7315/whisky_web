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
}

export interface Video {
    id: string;
    title: string;
}