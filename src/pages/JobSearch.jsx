import React from 'react'
import Header from '../components/Header.jsx'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"
import Job_Cards from '@/components/ui/Job_Cards.jsx'


export default function JobSearch() {
  
  return (
    <>
     <Header />
     <h1 className='mt-6 text-center mb-2 text-xl md:text-2xl lg:text-3xl'>Find Jobs</h1>
<div className='bg-gray-200 w-full py-8 flex items-center justify-center'>
  <div className="flex flex-col md:flex-row w-full max-w-screen-lg mx-4 md:mx-0 gap-4 md:gap-6 lg:gap-8 bg-gray-50 p-4 rounded-lg">
    <Input type="location" placeholder="Enter City" className="w-full md:w-auto" />
    <Input type="location" placeholder="Enter Role" className="w-full md:w-auto" />
    <Input type="email" placeholder="Find Jobs" className="w-full md:w-auto" />
    <Button type="submit" className="w-full md:w-auto">Find Jobs</Button>
  </div>
</div>

<Job_Cards />

<div className='h-32 flex items-center justify-center mt-8 '>
 <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
</div>
 </>
  )
}
