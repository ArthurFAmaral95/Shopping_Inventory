import { render } from 'react-dom'
import { ProductCategoryRow } from '../ProductCategoryRow'
import { ProductRow } from '../ProductRow'
import { ProductTableHeader } from '../ProductTableHeader'
import './styles.css'

export function ProductTable({ products, filterText, inStockOnly }) {
  const categories = []
  const renderTable = []

  for (const product of products) {
    for (const property in product) {
      if (property === 'category' && !categories.includes(product[property])) {
        categories.push(product[property])
      }
    }
  }

  categories.map(category => {
    renderTable.push(
      <ProductCategoryRow
        category={category}
        key={categories.indexOf(category)}
      />
    )

    products.map(product => {
      if (product.category === category) {
        renderTable.push(
          <ProductRow
            name={product.name}
            price={product.price}
            key={product.itemID}
            stocked={product.stocked}
          />
        )
      }
    })
  })

  return (
    <table>
      <ProductTableHeader />
      <tbody>{renderTable}</tbody>
    </table>
  )
}
