import { ProductTable } from '../ProductTable'
import { SearchBar } from '../SearchBar'

import { useState, useEffect } from 'react'

import './styles.css'

export function FilterableProductTable() {
  const [products, setProducts] = useState([])
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

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

  return (
    <div className="filterableProductTable">
      <SearchBar onTextFilter={textFilter} onFilterStock={filterStock} />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  )
}
