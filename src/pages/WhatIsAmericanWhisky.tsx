import React from 'react';

const WhatIsAmericanWhisky = () => {
    return (
        <div>
            <div className="max-w-3xl mx-auto p-4">
                <h1 className="text-3xl">アメリカンウィスキーとは</h1>
                <section className="my-4">
                    <h2 className="text-2xl font-semibold">歴史と背景</h2>
                    <p>アメリカンウィスキーは18世紀にアイルランドやスコットランドからの移民によってもたらされた蒸留技術を基に誕生しました。それ以来、アメリカ独自のウィスキー文化が展開され、バーボン、ライウィスキー、テネシーウィスキーなどが生まれました。</p>
                </section>
                <section className="my-4">
                    <h2 className="text-2xl font-semibold">種類と特徴</h2>
                    <p>アメリカンウィスキーにはさまざまな種類があります。</p>
                    <ul className="list-disc pl-6">
                        <li>バーボン: トウモロコシを主原料に使用し、オーク樽で熟成されるバーボンは、甘みとスパイシーな特徴があります。</li>
                        <li>ライウィスキー: ライ麦を使用して造られるウィスキーは、スパイシーでフルボディな味わいが特徴です。</li>
                        <li>テネシーウィスキー: メープルチャコールフィルタリングにより滑らかな味わいが楽しめるテネシーウィスキーも人気です。</li>
                    </ul>
                </section>
                <section className="my-4">
                    <h2 className="text-2xl font-semibold">アメリカンウィスキーの楽しみ方</h2>
                    <p>アメリカンウィスキーはストレートで楽しむほか、クラシックカクテルにも使用されます。オールドファッションドやマンハッタンなど、ウィスキーを使用したカクテルは多彩な味わいを楽しむ一つの方法です。</p>
                </section>
                <section className="my-4">
                    <h2 className="text-2xl font-semibold">おすすめのアメリカンウィスキーブランド</h2>
                    <ul className="list-disc pl-6">
                        <li>ジャックダニエル: テネシーウィスキーの代表的なブランドで、滑らかな味わいが魅力です。</li>
                        <li>メーカーズマーク: 赤いワックス封が特徴的なバーボンで、まろやかな風味が楽しめます。</li>
                        <li>ワイルドターキー: 豊かなライ麦の風味とスパイシーさが特徴のバーボンです。</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default WhatIsAmericanWhisky;

