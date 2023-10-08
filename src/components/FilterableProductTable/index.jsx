import { ProductTable } from '../ProductTable'
import { SearchBar } from '../SearchBar'
import './styles.css'

export function FilterableProductTable() {
  //colocar o json aqui. para usar no arquivo vou ter que usar state e effect

  const products = [
    { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
    { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
    { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
    { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
    { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
    { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
  ]

  return (
    <div className="filterableProductTable">
      <SearchBar />
      <ProductTable products={products}/>
    </div>
  )
}
