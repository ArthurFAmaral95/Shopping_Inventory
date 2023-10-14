import { ProductTable } from '../ProductTable'
import { SearchBar } from '../SearchBar'

import { useState, useEffect } from 'react'

import './styles.css'

export function FilterableProductTable() {
  const [products, setProducts] = useState([])
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const productsJson = [
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
    },
    {
      category: 'Snacks',
      price: '$10',
      stocked: false,
      name: 'Chips',
      itemID: 700
    },
    {
      category: 'Snacks',
      price: '$4',
      stocked: true,
      name: 'Candy',
      itemID: 800
    },
    {
      category: 'Vegetables',
      price: '$6',
      stocked: false,
      name: 'Lettuce',
      itemID: 900
    },
    {
      category: 'Fruits',
      price: '$8',
      stocked: false,
      name: 'Tomatoe',
      itemID: 1000
    },
    {
      category: 'Snacks',
      price: '$15',
      stocked: true,
      name: 'Protein Bar',
      itemID: 1100
    },
    {
      category: 'Drinks',
      price: '$5',
      stocked: true,
      name: 'Water',
      itemID: 1200
    },
    {
      category: 'Drinks',
      price: '$10',
      stocked: true,
      name: 'Orange Juice',
      itemID: 1300
    },
    {
      category: 'Drinks',
      price: '$30',
      stocked: false,
      name: 'Wine',
      itemID: 1400
    },
    {
      category: 'Italian Food',
      price: '$10',
      stocked: true,
      name: 'Pizza',
      itemID: 1500
    },
    {
      category: 'Italian Food',
      price: '$20',
      stocked: true,
      name: 'Spaguetti',
      itemID: 1600
    },
    {
      category: 'Drinks',
      price: '$7',
      stocked: true,
      name: 'Milk',
      itemID: 1700
    },
    {
      category: 'Fruits',
      price: '$3',
      stocked: true,
      name: 'Orange',
      itemID: 1800
    },
    {
      category: 'Vegetables',
      price: '$2',
      stocked: true,
      name: 'Carrot',
      itemID: 1900
    },
    {
      category: 'Fruits',
      price: '$8',
      stocked: false,
      name: 'Pineapple',
      itemID: 2000
    },
    {
      category: 'Drinks',
      price: '$4',
      stocked: true,
      name: 'Coke',
      itemID: 2100
    }
  ]

  useEffect(() => {
    setProducts(productsJson)
  }, [])

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
