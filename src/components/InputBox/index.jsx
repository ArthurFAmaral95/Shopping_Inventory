import './styles.css'

export function InputBox({ onChange }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      id="search"
      onChange={e => onChange(e.target.value)}
    />
  )
}
