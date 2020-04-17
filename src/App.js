import React from 'react';

function Food( {name,picture} ) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture}/>
  </div>
}

const foodILike = [
  {
    name:"Kimchi",
    image:"http://shop1.phinf.naver.net/20170523_143/ydkimchi_1495521048250lFtoM_JPEG/18827348867739841_-2114220943.jpg"
  },
  {
    name:"Samgyeopsal",
    image:"http://blogfiles.naver.net/20140303_202/samsubk_1393819190486AofzR_JPEG/%BB%EF%B0%E3%BB%EC3.jpg"
  },
  {
    name:"Bibimbap",
    image:"http://blogfiles.naver.net/20151106_129/ura2074_1446784743502Bz5t2_JPEG/%BA%F1%BA%F6%B9%E4_%C3%E2%C3%B3_%B1%E8%B0%A1%B3%D7.JPG"
  },
  {
    name:"Doncasu",
    image:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAxMTBfOTQg%2FMDAxNTQ3MDg3MzQ0MTE0.ezxlL_Dn_1le_3OyXSZtOYnlLsTGApQTweIEt9D24cog.8KkqN8p55Lk4b7w_48H0BtjJ7Lau3hUJniC_UGd7Jasg.JPEG.94_yk%2FP20190108_194055046_FC062C60-B35D-4BB8-A5A5-CFE1C9EEDEDF.JPG&type=b400"
  },
  {
    name:"Kimbap",
    image:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150331_188%2F4772201_1427781960075sObqs_JPEG%2F2015-03-31_15%253B08%253B35.jpg&type=b400"
  }
];

function App() {
  return(
    <div>
      {foodILike.map(dish =>(
      <Food name={dish.name}picture={dish.image} />
      ))}
    </div>
  )
}

export default App;
