import React from 'react';
import Card from '../organisms/Card'
import { Wiskey } from '../model/data';
import { WiskeyDataClient } from '../client/WiskeyDataClient';


const TopPage = () => {

    //   全件取得
    let wiskeys = WiskeyDataClient.getAll()
    wiskeys.sort(
        (firstObject, secondObject) =>
            (firstObject.hit_count < secondObject.hit_count) ? 1 : -1
    );

    wiskeys = wiskeys.slice(0, 3)


    // 身近なもの取得
    const majorNameList = ["I.W.ハーパー", "アーリータイムズ", "ジムビーム", "ジャックダニエル", "フォアローゼズ", "メーカーズマーク", "ワイルドターキー"]
    let majorWiskeyList = Array<Wiskey>(majorNameList.length)
    majorNameList.map((majorName, index) => {
        let majorWiskey = WiskeyDataClient.getByName(majorName)
        if (majorWiskey != undefined) majorWiskeyList[index] = majorWiskey
    });

    return (
        <div className='mx-auto max-w-full text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            {/* <div className="w-full h-auto text-center bg-[url('static/images/top_image.jpg')] p-4 md:p-16 lg:p-32 bg-cover">
                <div className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
                    今&nbsp;注目されてる&nbsp;アメリカンウィスキー&nbsp;が分かる
                </div>
                <div className='text-white text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl'>
                    YouTubeでレビューされてるウィスキーをランキングで紹介！<br />
                    ウィスキーを買いたい、飲みたい！ <br />
                    でも、どのウィスキーがよいか迷ってるあなた！<br />
                    とりあえずYouTuberが紹介してる一本を選んでみては！
                </div>
            </div> */}
            <div className='container mx-auto w-full md:w-8/12'>
                <div className="text-gray-900 my-4 md:my-16">
                    YouTube関連動画数ランキング Top3
                </div>

                {
                    wiskeys.map((wiskey, index) => {
                        let videoIds: string[] = ["", ""];
                        if (wiskey.videos.length > 1) {
                            const list1 = wiskey.videos.slice(0, 2)
                            videoIds[0] = list1[0].id
                            videoIds[1] = list1[1].id
                        }

                        return (
                            <div key={index}>
                                <div className="text-black m-2 py-2 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                                    <a href={`/detail/${index}`}>{index + 1}位</a>
                                </div>
                                <Card
                                    wiskey={wiskey}
                                />
                            </div>
                        );
                    })
                }
            </div>
            <div className='container mx-auto w-full md:w-8/12'>
                <div className="text-gray-900 m-2">
                    身近に売ってるウィスキーたち
                </div>

                {
                    majorWiskeyList.map((wiskey, index) => {
                        let videoIds: string[] = ["", ""];
                        if (wiskey.videos.length > 1) {
                            const list1 = wiskey.videos.slice(0, 2)
                            videoIds[0] = list1[0].id
                            videoIds[1] = list1[1].id
                        }

                        return (
                            <Card
                                key={index}
                                wiskey={wiskey}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default TopPage;
