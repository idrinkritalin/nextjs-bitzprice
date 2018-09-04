import PropTypes from 'prop-types'

const Prices = ({ bpi, currency }) => {
   return (
      <div>
         <ul className="list-group">
            <li className="list-group-item">
               Actual Bitcoin rate for {bpi[currency].description}: <span className="badge badge-primary">{bpi[currency].code} <strong>{bpi[currency].rate}</strong></span>
            </li>
         </ul>

         <style global jsx>
         {`
            .list-group-item {
               border: none;
               text-align: center;
               font-size: 1.7em
            }

            .badge-primary {
               color: #1a1a1a;
               background-color: #D8A33E;
           }
         `}
         </style>
      </div>
   )
}

Prices.propTypes = {
   bpi: PropTypes.object.isRequired
}

export default Prices