import { FilterableProductTable } from '../../components/FilterableProductTable'
import './styles.css'

export function Inventory() {
  console.log(import.meta.env.VITE_API_URL)
  return (
    <div className="container">
      <FilterableProductTable />
    </div>
  )
}
