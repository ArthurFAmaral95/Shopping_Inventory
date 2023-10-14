import { ProductTable } from '../ProductTable'
import { SearchBar } from '../SearchBar'

import { useState, useEffect } from 'react'

import './styles.css'

export function FilterableProductTable() {
  const [products, setProducts] = useState([])
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    fetch('../../../products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
  })

  function textFilter(text) {
    setFilterText(text)
  }

  function filterStock() {
    setInStockOnly(!inStockOnly)
  }

  function filterCategory(category) {
    setSelectedCategory(category)
  }

  return (
    <div className="filterableProductTable">
      <SearchBar
        onTextFilter={textFilter}
        onFilterStock={filterStock}
        onFilterCategory={filterCategory}
        products={products}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
        selectedCategory={selectedCategory}
      />
    </div>
  )
}
