import { ProductTable } from '../ProductTable'
import { SearchBar } from '../SearchBar'
import './styles.css'

export function FilterableProductTable() {
  //colocar o json aqui. para usar no arquivo vou ter que usar state e effect

  const products = [
    {
      category: 'Fruits',
      price: '$1',
      stocked: true,
      name: 'Apple',
      itemID: 100
    },
    {
      category: 'Fruits',
      price: '$1',
      stocked: true,
      name: 'Dragonfruit',
      itemID: 200
    },
    {
      category: 'Fruits',
      price: '$2',
      stocked: false,
      name: 'Passionfruit',
      itemID: 300
    },
    {
      category: 'Vegetables',
      price: '$2',
      stocked: true,
      name: 'Spinach',
      itemID: 400
    },
    {
      category: 'Vegetables',
      price: '$4',
      stocked: false,
      name: 'Pumpkin',
      itemID: 500
    },
    {
      category: 'Vegetables',
      price: '$1',
      stocked: true,
      name: 'Peas',
      itemID: 600
    }
  ]

  return (
    <div className="filterableProductTable">
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
}
