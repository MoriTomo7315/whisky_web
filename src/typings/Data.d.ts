declare module '~/data/output20230817.json' {

    interface Data {
        wiskeys: Wiskey[];
    }

    interface Wiskey {
        name: string;
        type: string;
        hit_count: number;
        videos: Video[];
        items: string[];
    }

    interface Video {
        id: string;
        title: string;
    }

    const data: Data;

    export default data;
}

