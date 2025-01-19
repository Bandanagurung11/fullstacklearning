import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div>
      <div className='flex justify-between p-12'>
        <Link href={"/Contact"}>contact</Link>
        <Link href={"/About"}>about</Link>
      </div>
    </div>
  )
}
