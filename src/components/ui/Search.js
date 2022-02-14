import React from 'react'

const Search = ({query, setQuery}) => {
  return (
      <section>
          <form>
              <input className="block rounded w-6/12 m-auto py-2 text-center border-2 border-blue-300" 
               type="text" 
               placeholder="Search characters"
               autofocus
               value= {query}
               onChange= { (e) => setQuery(e.target.value)}
></input>
          </form>
      </section>
  )
}

export default Search