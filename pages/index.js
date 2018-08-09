import Fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Selector from '../components/Selector'
import Prices from '../components/Prices'
import ReactLoading from 'react-loading'
import PropTypes from 'prop-types'
import { FaBitcoin } from 'react-icons/fa'
import { FaSync } from 'react-icons/fa'

class Index extends React.Component {
   static async getInitialProps({ req, res }) {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      const data = await response.json()
      const currencies = Object.keys(data.bpi)
      return { 
         time: data.time.updated,
         bpi: data.bpi,
         currencies,
         isFetched: true
       }
   }

   state = {
     currency: 'USD'
   }

   onFilter = (c) => {
     this.setState({ currency: c })
   }

   render() {
      const { bpi, time, currencies, isFetched } = this.props
      const { currency  } = this.state
      return (
         <Layout>
            <div>
               <h1>
                 <FaBitcoin /> BitzPrice
               </h1>
               <h6>Choose a currency to check the current Bitcoin rate</h6>
               <p><FaSync /> latest update: {time}</p>
               <br/>
               {isFetched ? (
                 <div>
                  <Selector
                    currencies={currencies}
                    onFilter={this.onFilter}
                  />
                  <Prices
                    bpi={bpi}
                    currency={currency}
                  />
                 </div>
               ) : (
                <div className="d-flex justify-content-center">
                  <ReactLoading type='bars' color='#20384A' height={20} width={100} />
                </div>
               )}
            </div>
         </Layout>
      )
   }
}

Index.propTypes = {
  time: PropTypes.string.isRequired,
  bpi: PropTypes.object.isRequired,
  currencies: PropTypes.array.isRequired
}

export default Index