export const filterByCategory = (data, setHistoryData, setNatureData, setCultureData) => {
    let historyData = data.filter((item)=>{
        return item.MAIN_TITLE.includes("박물관") ||
        item.MAIN_TITLE.includes("성당") ||
        item.MAIN_TITLE.includes("궁사") ||
        item.MAIN_TITLE.includes("수정") ||
        item.MAIN_TITLE.includes("백제") ||
        item.MAIN_TITLE.includes("기념관") ||
        item.MAIN_TITLE.includes("역사관") ||
        item.MAIN_TITLE.includes("비석마을") ||
        item.MAIN_TITLE.includes("수산과학관") ||
        item.MAIN_TITLE.includes("문학관") ||
        item.MAIN_TITLE.includes("생가") ||
        item.MAIN_TITLE.includes("수영사적공원") ||
        item.MAIN_TITLE.includes("부산기상관측소") ||
        item.MAIN_TITLE.includes("민속관") ||
        item.MAIN_TITLE.includes("가덕도") ||
        item.MAIN_TITLE.includes("국악원") ||
        item.MAIN_TITLE.includes("삼광사") ||
        item.MAIN_TITLE.includes("감천문화마을") ||
        item.MAIN_TITLE.includes("영도다리") ||
        item.MAIN_TITLE.includes("민주공원") ||
        item.MAIN_TITLE.includes("범어사") ||
        item.MAIN_TITLE.includes("동래읍성") ||
        item.MAIN_TITLE.includes("장안사") ||
        item.MAIN_TITLE.includes("석불사") ||
        item.MAIN_TITLE.includes("향교") ||
        item.MAIN_TITLE.includes("선암사") ||
        item.MAIN_TITLE.includes("운수사") ||
        item.MAIN_TITLE.includes("소막마을") ||
        item.MAIN_TITLE.includes("충렬사") ||
        item.MAIN_TITLE.includes("신발이야기") ||
        item.MAIN_TITLE.includes("턴투워드") ||
        item.MAIN_TITLE.includes("달음산") ||
        item.MAIN_TITLE.includes("모터스튜디오") ||
        item.MAIN_TITLE.includes("복천사") ||
        item.MAIN_TITLE.includes("철새서식지") ||
        item.MAIN_TITLE.includes("성암사") ||
        item.MAIN_TITLE.includes("오초량") ||
        item.MAIN_TITLE.includes("이슬람성원") ||
        item.MAIN_TITLE.includes("마하사") ||
        item.MAIN_TITLE.includes("북항재개발") ||
        item.MAIN_TITLE.includes("문화예술플랫폼") ||
        item.MAIN_TITLE.includes("산복도로")
    })
    console.log(historyData);
    setHistoryData(historyData);

    let natureData = data.filter((item)=>{
        return item.MAIN_TITLE.includes("태종대") ||
        item.MAIN_TITLE.includes("숲") ||
        item.MAIN_TITLE.includes("해수욕장") ||
        item.MAIN_TITLE.includes("자연") ||
        item.MAIN_TITLE.includes("오륙도") ||
        item.MAIN_TITLE.includes("신선대") ||
        item.MAIN_TITLE.includes("공원") ||
        item.MAIN_TITLE.includes("전망대") ||
        item.MAIN_TITLE.includes("수산과학관") ||
        item.MAIN_TITLE.includes("부산기상관측소") ||
        item.MAIN_TITLE.includes("철새") ||
        item.MAIN_TITLE.includes("가덕도") ||
        item.MAIN_TITLE.includes("렛츠런파크") ||
        item.MAIN_TITLE.includes("송상현광장") ||
        item.MAIN_TITLE.includes("청사포") ||
        item.MAIN_TITLE.includes("봉래산") ||
        item.MAIN_TITLE.includes("전망쉼터") ||
        item.MAIN_TITLE.includes("해운대") ||
        item.MAIN_TITLE.includes("금정산") ||
        item.MAIN_TITLE.includes("범어사") ||
        item.MAIN_TITLE.includes("동래읍성") ||
        item.MAIN_TITLE.includes("장안사") ||
        item.MAIN_TITLE.includes("백양산") ||
        item.MAIN_TITLE.includes("수원지") ||
        item.MAIN_TITLE.includes("장산") ||
        item.MAIN_TITLE.includes("석불사") ||
        item.MAIN_TITLE.includes("향교") ||
        item.MAIN_TITLE.includes("연대봉") ||
        item.MAIN_TITLE.includes("억새평원") ||
        item.MAIN_TITLE.includes("대룡마을") ||
        item.MAIN_TITLE.includes("수목원") ||
        item.MAIN_TITLE.includes("선암사") ||
        item.MAIN_TITLE.includes("스포원파크") ||
        item.MAIN_TITLE.includes("부산타워") ||
        item.MAIN_TITLE.includes("테마숲") ||
        item.MAIN_TITLE.includes("해양파크휴게소") ||
        item.MAIN_TITLE.includes("구름다리") ||
        item.MAIN_TITLE.includes("치유의 숲") ||
        item.MAIN_TITLE.includes("어촌마을") ||
        item.MAIN_TITLE.includes("해상케이블카") ||
        item.MAIN_TITLE.includes("도시숲") ||
        item.MAIN_TITLE.includes("현대미술관") ||
        item.MAIN_TITLE.includes("노을브릿지") ||
        item.MAIN_TITLE.includes("야생화단지") ||
        item.MAIN_TITLE.includes("목련꽃 가득") ||
        item.MAIN_TITLE.includes("계곡") ||
        item.MAIN_TITLE.includes("북항재개발") ||
        item.MAIN_TITLE.includes("구덕포길") ||
        item.MAIN_TITLE.includes("APEC")
    })
    console.log(natureData);
    setNatureData(natureData);

    let cultureData = data.filter((item)=>{
        return item.MAIN_TITLE.includes("마을") ||
        item.MAIN_TITLE.includes("해수욕장") ||
        item.MAIN_TITLE.includes("문화") ||
        item.MAIN_TITLE.includes("백제") ||
        item.MAIN_TITLE.includes("책방") ||
        item.MAIN_TITLE.includes("힐튼부산") ||
        item.MAIN_TITLE.includes("민락수변") ||
        item.MAIN_TITLE.includes("미술관") ||
        item.MAIN_TITLE.includes("문학관") ||
        item.MAIN_TITLE.includes("갤러리") ||
        item.MAIN_TITLE.includes("미디어센터") ||
        item.MAIN_TITLE.includes("솔로몬로파크") ||
        item.MAIN_TITLE.includes("민속관") ||
        item.MAIN_TITLE.includes("장림포구") ||
        item.MAIN_TITLE.includes("국립부산과학관") ||
        item.MAIN_TITLE.includes("송상현광장") ||
        item.MAIN_TITLE.includes("국악원") ||
        item.MAIN_TITLE.includes("부산시민공원") ||
        item.MAIN_TITLE.includes("호천마을") ||
        item.MAIN_TITLE.includes("영화의 거리") ||
        item.MAIN_TITLE.includes("용두산 공원") ||
        item.MAIN_TITLE.includes("F1963") ||
        item.MAIN_TITLE.includes("해운대") ||
        item.MAIN_TITLE.includes("상해") ||
        item.MAIN_TITLE.includes("벡스코") ||
        item.MAIN_TITLE.includes("영화의 전당") ||
        item.MAIN_TITLE.includes("스포원파크") ||
        item.MAIN_TITLE.includes("커피박물관") ||
        item.MAIN_TITLE.includes("사직야구장") ||
        item.MAIN_TITLE.includes("힐링촌 테마숲") ||
        item.MAIN_TITLE.includes("해양파크휴게소") ||
        item.MAIN_TITLE.includes("치유의 숲") ||
        item.MAIN_TITLE.includes("부산도서관") ||
        item.MAIN_TITLE.includes("해운대수목원") ||
        item.MAIN_TITLE.includes("상상마당") ||
        item.MAIN_TITLE.includes("종합시장") ||
        item.MAIN_TITLE.includes("롯데월드") ||
        item.MAIN_TITLE.includes("모터스튜디오") ||
        item.MAIN_TITLE.includes("힙함 가득한") ||
        item.MAIN_TITLE.includes("해상케이블카") ||
        item.MAIN_TITLE.includes("자동차극장") ||
        item.MAIN_TITLE.includes("도시숲") ||
        item.MAIN_TITLE.includes("이슬람성원") ||
        item.MAIN_TITLE.includes("근현대역사관") ||
        item.MAIN_TITLE.includes("무사이") ||
        item.MAIN_TITLE.includes("트래블라운지") ||
        item.MAIN_TITLE.includes("장산계곡") ||
        item.MAIN_TITLE.includes("사진관") ||
        item.MAIN_TITLE.includes("도서관") ||
        item.MAIN_TITLE.includes("아르떼뮤지엄") ||
        item.MAIN_TITLE.includes("산복도로") ||
        item.MAIN_TITLE.includes("한지체험관") ||
        item.MAIN_TITLE.includes("대청스카이")
    })
    console.log(cultureData);
    setCultureData(cultureData);
}


// const filterAttrData=(data)=>{
//     let keum = data.filter((item)=>{
//       return item.GUGUN_NM === '금정구'
//     })
//     setKeumData(keum);
//     console.log("금정구 데이터", keum);
//     let dong = data.filter((item)=>{
//       return item.GUGUN_NM === '동래구'
//     })
//     setDongData(dong);
//     console.log("동래구 데이터", dong);
//     let yeon = data.filter((item)=>{
//       return item.GUGUN_NM === '연제구'
//     })
//     setYeonData(yeon);
//     console.log("연제구 데이터", yeon);
//   }