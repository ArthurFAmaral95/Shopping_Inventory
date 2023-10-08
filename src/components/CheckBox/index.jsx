import './styles.css'

export function CheckBox({ onCheck }) {
  return (
    <label className="check">
      <input type="checkbox" id="check" onChange={onCheck} />
      Only show products in stock
    </label>
  )
}
