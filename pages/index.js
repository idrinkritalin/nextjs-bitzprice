import Fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Selector from '../components/Selector'
import Prices from '../components/Prices'
import Chart from '../components/Chart'
import ReactLoading from 'react-loading'
import PropTypes from 'prop-types'
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
         isDataFetched: true
       }
   }

   state = {
     currency: 'EUR',
     isDataFetched: false
   }

   onFilter = (c) => {
     this.setState({ currency: c })
   }

   render() {
      const { time, bpi, currencies, isDataFetched } = this.props
      const { currency } = this.state
      return (
         <Layout>
            <div>
               <h6>Choose a currency to check the current Bitcoin rate</h6>
               <p><FaSync /> latest update: {time}</p>
               {isDataFetched ? (
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

              <Chart
                currency={currency}
              />
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