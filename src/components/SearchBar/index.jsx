import { CheckBox } from '../CheckBox'
import { InputBox } from '../InputBox'
import { SelectCategory } from '../SelectCategory'
import './styles.css'

export function SearchBar({
  onTextFilter,
  onFilterStock,
  onFilterCategory,
  products
}) {
  const categories = []

  for (const product of products) {
    for (const property in product) {
      if (property === 'category' && !categories.includes(product[property])) {
        categories.push(product[property])
      }
    }
  }

  return (
    <form className="searchBar">
      <InputBox onChange={onTextFilter} />
      <div className="bottomSeachBar">
        <CheckBox onCheck={onFilterStock} />
        <SelectCategory categories={categories} onSelect={onFilterCategory} />
      </div>
    </form>
  )
}
