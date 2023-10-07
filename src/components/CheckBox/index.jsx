import './styles.css'

export function CheckBox() {
  return (
    <div className="check">
      <input type="checkbox" id="check" />
      <p>Only show products in stock</p>
    </div>
  )
}
