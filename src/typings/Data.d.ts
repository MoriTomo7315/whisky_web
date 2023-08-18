import {Data} from '../model/Data'

declare module '~/data/*.json' {
    const data: Data;

    export default data;
}

