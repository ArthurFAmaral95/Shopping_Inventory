import { ProductTable } from '../ProductTable'
import { SearchBar } from '../SearchBar'
import './styles.css'

export function FilterableProductTable() {
  const productsPath = '../../../products.json'
  const products = fetch(productsPath)
    .then(response => response.json())
    .then(data => console.log(data))

  return (
    <div className="filterableProductTable">
      <SearchBar />
      <ProductTable />
    </div>
  )
}
