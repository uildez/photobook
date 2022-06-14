import { MagnifyingGlass } from 'phosphor-react'
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

export function SearchBar() {
  const { handleSearchChange } = useContext(UserContext);

  return (
    <div className='flex relative items-center mx-4'>
        <MagnifyingGlass className='absolute right-2 text-slate-600 dark:text-white '/>
      <form>
        <input className='rounded-md p-2 pr-8 focus:outline-none bg-slate-200 dark:bg-slate-600' type='text' placeholder='Search...' 
          onChange={(e) => handleSearchChange(e.target.value)}
          />
      </form>
    </div>
  );
};