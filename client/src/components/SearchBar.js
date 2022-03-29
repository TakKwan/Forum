import { useState } from 'react'

const SearchBar = ({ onSubmit }) => {
  const [searchTerms, setSearchTerms] = useState('')

  const onSearchTermsChange = (e) => {
    setSearchTerms(e.target.value)
  }

  const onSearch = () => {
    onSubmit(searchTerms)
  }

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search Post Content"
        onChange={onSearchTermsChange}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  )
}

export default SearchBar
