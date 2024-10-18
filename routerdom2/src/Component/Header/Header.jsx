// import React from 'react'

import { Link } from "react-router-dom"

function Header() {
  return (
    <>
     <div>
      <ul>
        <Link href="/"><li>Home</li></Link>
        <Link href="/About"><li>About</li></Link>
        <Link href="/Contact"><li>Contact</li></Link>
        <Link href=""></Link>
      </ul>
     </div>
    </>
  )
}

export default Header
