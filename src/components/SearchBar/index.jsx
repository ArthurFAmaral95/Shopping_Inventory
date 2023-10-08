import { CheckBox } from '../CheckBox'
import { InputBox } from '../InputBox'
import './styles.css'

export function SearchBar({ onTextFilter, onFilterStock }) {
  return (
    <form className="searchBar">
      <InputBox onChange={onTextFilter} />
      <CheckBox onCheck={onFilterStock} />
    </form>
  )
}
