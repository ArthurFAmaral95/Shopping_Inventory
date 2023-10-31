import { FilterableProductTable } from '../../components/FilterableProductTable'
import './styles.css'

export function Inventory() {
  console.log(import.meta)
  console.log(import.meta.env)
  return (
    <div className="container">
      <FilterableProductTable />
    </div>
  )
}
