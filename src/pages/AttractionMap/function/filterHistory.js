export const filterHistory = (data) => {
    return data.filter((item)=>{
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
}