import { CheckBox } from '../CheckBox'
import { InputBox } from '../InputBox'
import './styles.css'

export function SearchBar() {
  return (
    <form className="searchBar">
      <InputBox />
      <CheckBox />
    </form>
  )
}
