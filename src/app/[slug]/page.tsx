'use client'
import Add from 'src/components/Add'
import CustomizeProducts from 'src/components/CustomizeProducts'
import ProductImages from 'src/components/ProductImages'
import React, { useEffect } from 'react'


const SinglePage = () => {

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* IMAGE */}
      <div className='w-full lg:w-1/2 lg:static top-20 h-max'>
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='text-4xl font-semibold'>Product Name</h1>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisici elit ist ein Blindtext, der nichts bedeuten soll, sondern als Platzhalter im Layout verwendet wird, um einen Eindruck </p>
        <div className='h-[2px] bg-gray-100' />
        <div className='flex items-start gap-4 items-center'>
          <h3 className='text-xl text-gray-500 line-through'>59</h3>
          <h2 className='font-medium text-2xl'>49</h2>
        </div>

        <div className='h-[2px] bg-gray-100' />
        <CustomizeProducts />
        <Add />

        <div className='h-[2px] bg-gray-100' />
        <div className='text-sm'>
          <h4 className='font-medium mb-4'>Title</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisici elit ist ein Blindtext, der nichts bedeuten soll, sondern als Platzhalter im Layout verwendet wird, um einen Eindruck </p>
        </div>

        <div className='text-sm'>
          <h4 className='font-medium mb-4'>Title</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisici elit ist ein Blindtext, der nichts bedeuten soll, sondern als Platzhalter im Layout verwendet wird, um einen Eindruck </p>
        </div>

        <div className='text-sm'>
          <h4 className='font-medium mb-4'>Title</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisici elit ist ein Blindtext, der nichts bedeuten soll, sondern als Platzhalter im Layout verwendet wird, um einen Eindruck </p>
        </div>
      </div>
    </div>
  )
}

export default SinglePage