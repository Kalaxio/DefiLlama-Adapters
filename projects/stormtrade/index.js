const { sumTokensExport } = require('../helper/sumTokens')
const ADDRESSES = require("../helper/coreAssets.json");

module.exports = {
  timetravel: false,
  methodology: 'Total amount of jUSDT locked in the StormTrade vault (EQDynReiCeK8xlKRbYArpp4jyzZuF6-tYfhFM0O5ulOs5H0L)',
  ton: {
    tvl: (
      sumTokensExport({
        owners: [
          'EQDynReiCeK8xlKRbYArpp4jyzZuF6-tYfhFM0O5ulOs5H0L', // jUSDT vault
          'EQDpJnZP89Jyxz3euDaXXFUhwCWtaOeRmiUJTi3jGYgF8fnj', // TON-M vault
          'EQAz6ehNfL7_8NI7OVh1Qg46HsuC4kFpK-icfqK9J3Frd6CJ', // USDT vault
          'EQAG8_BzwlWkmqb9zImr9RJjjgZZCLMOQXP9PR0B1PYHvfSS',  // Notcoin vault
        ],
        tokens: [ADDRESSES.ton.jUSDT, ADDRESSES.ton.USDT, ADDRESSES.ton.TON, ADDRESSES.ton.NOT]
      })
    )
  }
}
