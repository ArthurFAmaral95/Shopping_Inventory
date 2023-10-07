import { ProductTable } from '../ProductTable'
import { SearchBar } from '../SearchBar'
import './styles.css'

export function FilterableProductTable() {
  return (
    <div className="filterableProductTable">
      <SearchBar />
      <ProductTable />
    </div>
  )
}
