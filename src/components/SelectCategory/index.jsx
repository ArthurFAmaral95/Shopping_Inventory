import './styles.css'

export function SelectCategory({ categories, onSelect }) {
  const renderOptions = categories.map(category => (
    <option value={category} key={categories.indexOf(category)}>
      {category}
    </option>
  ))

  return (
    <div className="categorySelect">
      <label htmlFor="categories">Choose a category:</label>
      <select
        name="categories"
        id="categories"
        onChange={e => onSelect(e.target.value)}
      >
        <option value="">Choose an option</option>
        {renderOptions}
      </select>
    </div>
  )
}
