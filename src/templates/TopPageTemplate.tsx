import React from 'react';
import Card from '../organisms/Card'
import data from '../data/output20230817.json'

const TopPageTemplate = () => {

  let wiskeyList = data.wiskeys
  wiskeyList.sort(
    (firstObject, secondObject) =>
      (firstObject.hit_count < secondObject.hit_count) ? 1 : -1
  );

  return (
    <div className='container mx-auto max-w-full text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
      <div className="w-full h-auto text-center bg-[url('static/images/top_image.jpg')] p-32">
        <div className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
          今&nbsp;注目されてる&nbsp;ウィスキー&nbsp;が分かる
        </div>
        <div className='text-white text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
          YouTubeでレビューされてるウィスキーをランキングで紹介！<br />
          ウィスキーを買いたい、飲みたいけど、どのウィスキーがよいか迷ってるあなた！<br />
          とりあえずYouTuberが紹介してる一本を選んでみては！
        </div>
      </div>
      <div className='container mx-auto md:w-8/12'>
        <div className="text-gray-900 m-2">
          YouTube注目ランキング
        </div>

        {
          wiskeyList.map((wiskey, index) => {
            let videoId = ""
            if(wiskey.videos.length != 0) {
              wiskey.videos[0].id
            }

            return (
              <div>
                <div className="text-black m-2 py-2 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                  <a href={`/detail/${index}`}>{index + 1}位: {wiskey.name}</a>
                </div>
                <Card
                  imageUrl={"https://tshop.r10s.jp/yunyuusyu/cabinet/malt/imgrc0065643544.jpg?_ex=267x267&s=0&r=1"}
                  type={wiskey.type}
                  name={wiskey.name}
                  videoId={videoId}
                  hitCount={wiskey.hit_count}
                />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default TopPageTemplate;
