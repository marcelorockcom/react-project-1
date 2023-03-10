import './style.css'

export const TextInput = ({searchValue, handleChange}) => {
    return(
        <input
          className='search'
          onChange={handleChange}
          value={searchValue}
          type="search"
          placeholder='Type your search'
        />
    )
}