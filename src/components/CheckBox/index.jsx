import './styles.css'

export function CheckBox() {
  return (
    <label className="check">
      <input type="checkbox" id="check" />
      Only show products in stock
    </label>
  )
}
