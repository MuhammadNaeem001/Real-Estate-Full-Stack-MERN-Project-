import React from 'react'

export default function Search() {
  return (
    <div class='flex flex-col md:flex-row'>
  <div class='p-7 border-b-2 md:border-r-2 md:min-h-screen'>
    <form class='flex flex-col gap-8'>
      <div class='flex items-center gap-2'>
        <label class='whitespace-nowrap font-semibold'>
          Search Term:
        </label>
        <input
          type='text'
          id='searchTerm'
          placeholder='Search...'
          class='border rounded-lg p-3 w-full'
        />
      </div>
      <div class='flex gap-2 flex-wrap items-center'>
        <label class='font-semibold'>Type:</label>
        <div class='flex gap-2'>
          <input type='checkbox' id='all' class='w-5' />
          <span>Rent & Sale</span>
        </div>
        <div class='flex gap-2'>
          <input type='checkbox' id='rent' class='w-5' />
          <span>Rent</span>
        </div>
        <div class='flex gap-2'>
          <input type='checkbox' id='sale' class='w-5' />
          <span>Sale</span>
        </div>
        <div class='flex gap-2'>
          <input type='checkbox' id='offer' class='w-5' />
          <span>Offer</span>
        </div>
      </div>
      <div class='flex gap-2 flex-wrap items-center'>
        <label class='font-semibold'>Amenities:</label>
        <div class='flex gap-2'>
          <input type='checkbox' id='parking' class='w-5' />
          <span>Parking</span>
        </div>
        <div class='flex gap-2'>
          <input type='checkbox' id='furnished' class='w-5' />
          <span>Furnished</span>
        </div>
      </div>
      <div class='flex items-center gap-2'>
        <label class='font-semibold'>Sort:</label>
        <select class='border rounded-lg p-3'>
          <option value='regularPrice_desc'>Price high to low</option>
          <option value='regularPrice_asc'>Price low to high</option>
          <option value='createdAt_desc'>Latest</option>
          <option value='createdAt_asc'>Oldest</option>
        </select>
      </div>
      <button class='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
        Search
      </button>
    </form>
  </div>
  <div class='flex-1'>
    <h1 class='text-3xl font-semibold border-b p-3 text-slate-700 mt-5'>
      Listing results:
    </h1>
    <div class='p-7 flex flex-wrap gap-4'>
      <p class='text-xl text-slate-700'>No listing found!</p>
      <p class='text-xl text-slate-700 text-center w-full'>Loading...</p>
      <button class='text-green-700 hover:underline p-7 text-center w-full'>
        Show more
      </button>
    </div>
  </div>
</div>

  )
}
