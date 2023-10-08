import { CheckBox } from '../CheckBox'
import { InputBox } from '../InputBox'
import './styles.css'

export function SearchBar({ textFilter, inStockOnly }) {
  return (
    <form className="searchBar">
      <InputBox onChange={textFilter} />
      <CheckBox />
    </form>
  )
}
