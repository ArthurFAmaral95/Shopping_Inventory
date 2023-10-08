import { CheckBox } from '../CheckBox'
import { InputBox } from '../InputBox'
import './styles.css'

export function SearchBar({ textFilter, filterStock }) {
  return (
    <form className="searchBar">
      <InputBox onChange={textFilter} />
      <CheckBox onCheck={filterStock} />
    </form>
  )
}
