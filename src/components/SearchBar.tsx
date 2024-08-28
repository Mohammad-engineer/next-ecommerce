"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

const SearchBar = () => {
    const router = useRouter();

    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const searchBar = formData.get('searchBar') as string;

        if(searchBar){
            router.push(`/list?search=${searchBar}`)
        }
    }

  return (
    <form onSubmit={handleSearch} className="flex justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1 ">
        <input type="text" name="searchBar" placeholder="Serach"  className="flex-1 bg-transparent outline-none"/>
        <button className="cursor-pointer">
            <Image src='/search.png' width={16} height={16} alt='serach icon'/>
        </button>
    </form>
  )
}

export default SearchBar