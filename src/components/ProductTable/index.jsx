import { ProductCategoryRow } from '../ProductCategoryRow'
import { ProductRow } from '../ProductRow'
import { ProductTableHeader } from '../ProductTableHeader'
import './styles.css'

export function ProductTable({
  products,
  filterText,
  inStockOnly,
  selectedCategory
}) {
  const categories = []
  const renderTable = []
  const filteredProducts = []
  const productsInStock = []

  products.map(product => {
    if (product.stocked) {
      productsInStock.push(product)
    }
  })

  if (inStockOnly) {
    productsInStock.map(product => {
      if (product.name.toLowerCase().includes(filterText.trim())) {
        filteredProducts.push(product)
      }
    })
  } else {
    products.map(product => {
      if (product.name.toLowerCase().includes(filterText.trim())) {
        filteredProducts.push(product)
      }
    })
  }

  if (!selectedCategory) {
    for (const product of filteredProducts) {
      for (const property in product) {
        if (
          property === 'category' &&
          !categories.includes(product[property])
        ) {
          categories.push(product[property])
        }
      }
    }
  } else {
    categories.push(selectedCategory)
  }

  categories.map(category => {
    renderTable.push(
      <ProductCategoryRow
        category={category}
        key={categories.indexOf(category)}
      />
    )

    filteredProducts.map(product => {
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
