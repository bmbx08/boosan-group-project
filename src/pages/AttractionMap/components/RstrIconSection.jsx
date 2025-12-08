import React from 'react'
import RstrIcon from './sub_components/RstrIcon'

const RstrIconSection = ({id,handleShow,fade}) => {
  return (
    <>
        {id==="a"&&
        <>{/*금정구, 동래구, 연제구*/}
            <RstrIcon id={id} loc="keum" showNum={0} index={1} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="keum" showNum={1} index={2} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="dong" showNum={0} index={3} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="dong" showNum={1} index={4} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="yeon" showNum={0} index={5} handleShow={handleShow} fade={fade}/>
        </>}
        {id==="b"&&
        <> {/*부산진구, 서구, 동구, 중구,영도구*/}
            <RstrIcon id={id} loc="jingu" showNum={0} index={1} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="jingu" showNum={1} index={2} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="seogu" showNum={2} index={3} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="seogu" showNum={1} index={4} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="dongu" showNum={0} index={5} handleShow={handleShow} fade={fade}/>
            {/* <RstrIcon id={id} loc="dongu" showNum={1} index={6} handleShow={handleShow} fade={fade}/> */}
            <RstrIcon id={id} loc="joongu" showNum={0} index={7} handleShow={handleShow} fade={fade}/>
            {/* <RstrIcon id={id} loc="yeongdo" showNum={0} index={8} handleShow={handleShow} fade={fade}/> */}
            <RstrIcon id={id} loc="yeongdo" showNum={0} index={9} handleShow={handleShow} fade={fade}/>
        </>
        } 
        {id==="c"&&
        <> {/*해운대구, 수영구, 남구*/}
            <RstrIcon id={id} loc="haeoon" showNum={0} index={1} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="haeoon" showNum={1} index={2} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="young" showNum={0} index={3} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="namgu" showNum={0} index={4} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="namgu" showNum={1} index={5} handleShow={handleShow} fade={fade}/>
        </>
        }
        {id==="d"&&
        <> {/*강서구, 기장군*/}
            <RstrIcon id={id} loc="gang" showNum={0} index={1} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="gang" showNum={1} index={2} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="kijang" showNum={0} index={3} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="kijang" showNum={1} index={4} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="kijang" showNum={2} index={5} handleShow={handleShow} fade={fade}/>
        </>
        }
        {id==="e"&&
        <> {/*북구, 사상구, 사하구*/}
            <RstrIcon id={id} loc="book" showNum={0} index={1} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="book" showNum={1} index={2} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="sang" showNum={0} index={3} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="sang" showNum={1} index={4} handleShow={handleShow} fade={fade}/>
            <RstrIcon id={id} loc="saha" showNum={0} index={5} handleShow={handleShow} fade={fade}/>
            {/* <RstrIcon id={id} loc="saha" showNum={1} index={6} handleShow={handleShow} fade={fade}/> */}
        </>
        }
    </>
  )
}

export default RstrIconSection
