import './styles.css'

export function ProductRow({ name, price, stocked }) {
  return (
    <tr>
      <td className={stocked ? 'inStock' : 'outStock'}>{name}</td>
      <td>{price}</td>
    </tr>
  )
}
