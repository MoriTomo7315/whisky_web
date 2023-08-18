import data from '../data/output20230817.json'


export class WiskeyDataClient {
    constructor() {};

    // 全件取得 
    static getAll() {
        return data.wiskeys
    }

    // idのウィスキーデータのみ取得
    static getById(id: number) {
        return data.wiskeys.find((wiskey) => wiskey.id == id);
    }

    // 名前のウィスキーデータのみ取得
    static getByName(name: string) {
        return data.wiskeys.find((wiskey) => wiskey.name == name);
    }
}