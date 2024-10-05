import React from 'react'
import AttrIcon from './sub_components/AttrIcon'

const AttrIconSection = ({section, id, theme,handleShow,fade}) => {
  return (
    <>
        {id==="a"&&
        <>
            <AttrIcon section={section} loc="keum" theme={theme} showNum={0} index={1} handleShow={handleShow} fade={fade}/>
            <AttrIcon section={section} loc="keum" theme={theme} showNum={1} index={2} handleShow={handleShow} fade={fade}/>
            <AttrIcon section={section} loc="dong" theme={theme} showNum={0} index={3} handleShow={handleShow} fade={fade}/>
            <AttrIcon section={section} loc="dong" theme={theme} showNum={1} index={4} handleShow={handleShow} fade={fade}/>
            <AttrIcon section={section} loc="yeon" theme={theme} showNum={0} index={5} handleShow={handleShow} fade={fade}/>
        </>}
        {/* {id==="b"&&
        <>
            <AttrIcon loc="jingu" theme={theme} showNum={0} index={1} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="jingu" theme={theme} showNum={1} index={2} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="seogu" theme={theme} showNum={0} index={3} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="seogu" theme={theme} showNum={1} index={4} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="dongu" theme={theme} showNum={0} index={3} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="dongu" theme={theme} showNum={1} index={4} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="yeon" theme={theme} showNum={0} index={5} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="yeongdo" theme={theme} showNum={0} index={6} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="yeongdo" theme={theme} showNum={1} index={7} handleShow={handleShow} fade={fade}/>
        </>
        } */}
    </>
        
  )
}

export default AttrIconSection
