import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Outlet/> {/*이거 있어야지 페이지에 고정 가능*/}
    </div>
  )
}

export default AppLayout
