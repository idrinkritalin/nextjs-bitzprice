import PropTypes from 'prop-types'

const Prices = ({ bpi, currency }) => {
   return (
      <div>
         <ul className="list-group">
            <li className="list-group-item">
               Bitcoin rate for {bpi[currency].description}: <span className="badge badge-primary">{bpi[currency].code} <strong>{bpi[currency].rate}</strong></span>
            </li>
         </ul>
      </div>
   )
}

Prices.propTypes = {
   bpi: PropTypes.object.isRequired
}

export default Prices