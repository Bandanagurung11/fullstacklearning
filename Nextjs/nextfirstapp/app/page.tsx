import { BlogCard } from '@/components/BlogCard'
import { Faq } from '@/components/Faq'
import LoginForm from '@/components/LoginForm'
import MyChart from '@/components/MyChart'
import { Button } from '@/components/ui/button'
import { UserDialog } from '@/components/UserDialog'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div>
      <div className='flex justify-between p-12'>
        <Link href={"/Contact"}>contact</Link>
        <Link href={"/About"}>about</Link>
      </div>

      <div className='grid grid-cols-6 gap-12'>
      <Button variant={"default"}>Hello</Button>
      <Button variant={"destructive"}>Hello</Button>
      <Button variant={"ghost"}>Hello</Button>
      <Button variant={"link"}>Hello</Button>
      <Button variant={"outline"}>Hello</Button>
      <Button variant={"secondary"}>Hello</Button>
      </div>
      <Faq/>
      <BlogCard/>
      <UserDialog/>
      <hr />
      <LoginForm/>

      <div className='grid grid-cols-4 gap-6'>
      <MyChart/>
      <MyChart/>
      <MyChart/>
      <MyChart/>

    
      </div>


    </div>
  )
}
