import PropTypes from 'prop-types'

const Selector = ({ onFilter, currencies }) => {
   return (
      <div>
         <select className="form-control" onChange={e  => onFilter(e.target.value)}>
            {currencies.map((c) =>
               <option key={c} value={c}>{c}</option>
            )}
         </select>
         <br/>
      </div>
   )
}

Selector.propTypes = {
   onFilter: PropTypes.func.isRequired,
   currencies: PropTypes.array.isRequired
}

export default Selector