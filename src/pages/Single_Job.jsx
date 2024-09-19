import React from 'react'
import Header from '@/components/Header'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'
import Job_Cards from '@/components/ui/Job_Cards'
import { Button } from '@/components/ui/button'
import { CalendarCheck } from 'lucide-react'
export const Single_Job = () => {
  return (
    <>
    <Header />
 <section className='h-[900px] bg-gray-300' >
 <div className='h-1/6 mt-10 border-2 border-sky-500 flex items-center justify-center gap-32'> 
   <div className='w-3/4 h-full text-black flex items-center mx-auto gap-8'>
   <div className='ml-8'>
   <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
</div>
<div className='w-full text-md'>
  <h1 className=''>UI/UX Designer <Badge variant="outline" style={{ color: 'black' }}>Open to Work</Badge> <Badge variant="outline" style={{ color: 'black' }}>Remote</Badge></h1>
<p className='mt-2'>Contact - +91 69696969    Email:- Owomail.co</p>

</div>
   </div>
   <div className='w-1/4 h-full  flex items-center justify-center text-white gap-6'>
   
   <Button variant="outline" height={20} ><Star size={20} strokeWidth={1.75} /></Button>

   <Button variant="outline" height={20} >Apply Now</Button>

   </div>
 </div>
<section className='h-5/6 bg-slate-600 flex flex-wrap'>
<div className='h-2/4 w-full border-2 border-sky-500 '>

  <h1 className='text-2xl m-5'>Job Description</h1>
  <p className='m-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat placeat deleniti officia inventore omnis, corporis magni recusandae consequuntur laborum ad sed accusantium dolorum excepturi? Aliquam ipsum laborum odit assumenda neque dolorem. Libero, tenetur, iusto asperiores, eos qui autem dolore odio atque saepe doloremque molestias deserunt non cumque! Mollitia provident hic laboriosam. Hic vitae dolor aliquid ducimus sed eaque ipsam reiciendis unde, sit placeat soluta esse? Voluptas a vel reprehenderit iure molestias sapiente culpa quo doloremque, sunt recusandae porro beatae, mollitia commodi vero provident! Minus aliquid molestiae ad. Facilis modi illo voluptates at architecto nesciunt porro cumque molestias enim cum, sint similique, vel nulla, earum suscipit maiores ullam distinctio veniam ducimus! Blanditiis facilis voluptatem, rerum magni, unde ut et provident velit voluptate, ea accusamus consectetur? Dolorem deserunt magnam dolores quas delectus. Quia, sed delectus natus explicabo odio totam magnam facilis molestiae a dolor nulla earum eius cupiditate alias quidem? Molestiae illum provident perspiciatis optio libero adipisci asperiores explicabo facilis, modi natus perferendis, pariatur in quod ut deserunt, nihil esse alias id doloribus fugiat. Consectetur, veritatis accusantium omnis pariatur ut blanditiis exercitationem dolorem delectus dolore expedita voluptas eveniet, corrupti rem. Id libero quod, totam voluptates dolorum iure hic aliquid pariatur magnam ratione?</p>
</div>
<div className='h-2/4 w-2/4 border-2 border-sky-500'>
<h1 className='text-2xl m-5'>Job Responsibilities</h1>
<p className='m-5'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis qui vel, alias aperiam, rem quam quasi consequatur ducimus quas laborum, quibusdam facere! Impedit excepturi fugiat quisquam magni culpa unde voluptatibus!</p>
<p className='m-5'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis qui vel, alias aperiam, rem quam quasi consequatur ducimus quas laborum, quibusdam facere! Impedit excepturi fugiat quisquam magni culpa unde voluptatibus!</p>
<p className='m-5'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis qui vel, alias aperiam, rem quam quasi consequatur ducimus quas laborum, quibusdam facere! Impedit excepturi fugiat quisquam magni culpa unde voluptatibus!</p>
</div>
<div className='h-2/4 w-2/4 border-2 border-sky-500'>
  Job Overview
  <CalendarCheck size={32} strokeWidth={1.75} />
</div>
</section>
 </section>

   < Job_Cards />

    </>
  )
}
