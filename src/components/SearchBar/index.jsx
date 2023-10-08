import { CheckBox } from '../CheckBox'
import { InputBox } from '../InputBox'
import './styles.css'

export function SearchBar(filterText, inStockOnly) {
  return (
    <form className="searchBar">
      <InputBox />
      <CheckBox />
    </form>
  )
}
