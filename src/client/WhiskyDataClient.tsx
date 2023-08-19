import data from '../data/output20230817.json'


export class WhiskyDataClient {
    constructor() {};

    // 全件取得 
    static getAll() {
        return data.whiskys
    }

    // idのウィスキーデータのみ取得
    static getById(id: number) {
        return data.whiskys.find((whisky) => whisky.id == id);
    }

    // 名前のウィスキーデータのみ取得
    static getByName(name: string) {
        return data.whiskys.find((whisky) => whisky.name == name);
    }
}