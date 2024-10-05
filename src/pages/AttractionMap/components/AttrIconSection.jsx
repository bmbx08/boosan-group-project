import React from 'react'
import AttrIcon from './sub_components/AttrIcon'

const AttrIconSection = ({id, theme,handleShow,fade}) => {
  return (
    <>
        {id==="a"&&
        <>{/*금정구, 동래구, 연제구*/}
            <AttrIcon id={id} loc="keum" theme={theme} showNum={0} index={1} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="keum" theme={theme} showNum={1} index={2} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="dong" theme={theme} showNum={0} index={3} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="dong" theme={theme} showNum={1} index={4} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="yeon" theme={theme} showNum={0} index={5} handleShow={handleShow} fade={fade}/>
        </>}
        {id==="b"&&
        <> {/*부산진구, 서구, 동구, 중구,영도구*/}
            <AttrIcon id={id} loc="jingu" theme={theme} showNum={0} index={1} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="jingu" theme={theme} showNum={1} index={2} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="seogu" theme={theme} showNum={2} index={3} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="seogu" theme={theme} showNum={1} index={4} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="dongu" theme={theme} showNum={0} index={5} handleShow={handleShow} fade={fade}/>
            {/* <AttrIcon id={id} loc="dongu" theme={theme} showNum={1} index={6} handleShow={handleShow} fade={fade}/> */}
            <AttrIcon id={id} loc="joongu" theme={theme} showNum={0} index={7} handleShow={handleShow} fade={fade}/>
            {/* <AttrIcon id={id} loc="yeongdo" theme={theme} showNum={0} index={8} handleShow={handleShow} fade={fade}/> */}
            <AttrIcon id={id} loc="yeongdo" theme={theme} showNum={0} index={9} handleShow={handleShow} fade={fade}/>
        </>
        } 
        {id==="c"&&
        <> {/*해운대구, 수영구, 남구*/}
            <AttrIcon id={id} loc="haeoon" theme={theme} showNum={0} index={1} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="haeoon" theme={theme} showNum={1} index={2} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="young" theme={theme} showNum={0} index={3} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="namgu" theme={theme} showNum={0} index={4} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="namgu" theme={theme} showNum={1} index={5} handleShow={handleShow} fade={fade}/>
        </>
        }
        {id==="d"&&
        <> {/*강서구, 기장군*/}
            <AttrIcon id={id} loc="gang" theme={theme} showNum={0} index={1} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="gang" theme={theme} showNum={1} index={2} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="kijang" theme={theme} showNum={0} index={3} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="kijang" theme={theme} showNum={1} index={4} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="kijang" theme={theme} showNum={2} index={5} handleShow={handleShow} fade={fade}/>
        </>
        }
        {id==="e"&&
        <> {/*북구, 사상구, 사하구*/}
            <AttrIcon id={id} loc="book" theme={theme} showNum={0} index={1} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="book" theme={theme} showNum={1} index={2} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="sang" theme={theme} showNum={0} index={3} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="sang" theme={theme} showNum={1} index={4} handleShow={handleShow} fade={fade}/>
            <AttrIcon id={id} loc="saha" theme={theme} showNum={0} index={5} handleShow={handleShow} fade={fade}/>
            {/* <AttrIcon id={id} loc="saha" theme={theme} showNum={1} index={6} handleShow={handleShow} fade={fade}/> */}
        </>
        }
    </>
  )
}

export default AttrIconSection
