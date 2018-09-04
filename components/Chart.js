import { Line } from 'react-chartjs-2'
import ReactLoading from 'react-loading'
import PropTypes from 'prop-types'

class Chart extends React.Component {
   state = {
      isChartFetched: false
   }

   componentDidMount() {
      this.getDataChart()
   }

   getDataChart() {
      const { currency } = this.props
      fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`)
         .then(res => res.json())
         .then(chartData => this.setState({chartData, isChartFetched: true}))
         .catch(error => console.log('ERROR FETCHING CHART: ', error))
   }

   buildChart() {
      this.getDataChart()
         
      const xDates = Object.keys(this.state.chartData.bpi)
      const yPrices = Object.values(this.state.chartData.bpi)
      return {
         labels: xDates,
         datasets:[
            {
              label:'BTC Price',
              data: yPrices,
              fill: false,
              backgroundColor: [
               'rgba(218,165,32,1)'
              ],
              borderColor: [
                'rgba(218,165,32,1)'
              ],
              borderWidth: 5
            }
         ]
      }
   }

   render() {
      const { isChartFetched, errorText } = this.state
      return (
         <div className="d-flex justify-content-center">
            {isChartFetched ? (
               <Line data={this.buildChart()} />
            ) : (
               <ReactLoading type='bars' color='#20384A' height={20} width={100} />
            )}
         </div>
      )
   }
}

Chart.propTypes = {
   currency: PropTypes.string.isRequired
 }

export default Chart