import { SearchIcon } from "lucide-react";



export const SearchInput = () => {
  return (
    // Add search functionality
    <form className="flex w-full max-w-[600px] ">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Searchbar"
          className="w-full pl-4 py-2 pr-12 rounded-l-full border focus:outline-none focus:border-blue-300 l"
        />
      </div>

      {/* remove search button */}
      <button 
      type='submit'
      className="px-5 py-2 bg-gray-100 border rounded-r-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
       <SearchIcon className="Size-5"/>
      </button>
    </form>
  );
};
