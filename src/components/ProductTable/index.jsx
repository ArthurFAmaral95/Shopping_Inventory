import { ProductCategoryRow } from '../ProductCategoryRow'
import { ProductTableHeader } from '../ProductTableHeader'
import './styles.css'

export function ProductTable({ products }) {
  const categories = []

  for (const product of products) {
    for (const property in product) {
      if (property === 'category' && !categories.includes(product[property])) {
        categories.push(product[property])
      }
    }
  }

  const renderCategories = categories.map(category => (
    <tr>
      <ProductCategoryRow
        category={category}
        key={categories.indexOf(category)}
      />
    </tr>
  ))

  console.log(renderCategories)
  return (
    <table>
      <ProductTableHeader />
      <tbody>{renderCategories}</tbody>
    </table>
  )
}
