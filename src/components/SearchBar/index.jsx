import { CheckBox } from '../CheckBox'
import { InputBox } from '../InputBox'
import './styles.css'

export function SearchBar() {
  return (
    <div className="searchBar">
      <InputBox />
      <CheckBox />
    </div>
  )
}
