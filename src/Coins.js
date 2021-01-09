import React from "react";

class Coins extends React.Component {
    state = {
        loading: true,
        marketcap: 0,
        errorMsg: ""
    }

    async componentDidMount() {
        const uri = ' https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest'
        const key = "" // insert key here
        const response = await fetch(uri, {
            method : "GET",
            headers: {
                'X-CMC_PRO_API_KEY': key
            },
        })
        if (response.ok) {
        const responseData = await response.json() // jsonifys the response we get
        console.log(responseData)
        this.setState({marketcap: responseData, loading: false})}
        else {
            this.setState({errorMsg : "API ERROR"})
        }
    }
    //response.data.quote.USD.total_market_cap
    render() {
        return(
            <div className="coinComponent">
                <h1>State of Crypto:</h1>

                {this.state.loading ? 
                <div>loading... {this.state.errorMsg}</div> : 
                <div>
                    <div className="coinText">
                    Current Market Capitalization:  <p className="numbers">{this.state.marketcap.data.quote.USD.total_market_cap} US$</p> 
                    <br />
                    Total Trading Volume (24h):     <p className="numbers">{this.state.marketcap.data.quote.USD.total_volume_24h} US$</p> 
                    <br />
                    Dominance of Bitcoin:           <p className="numbers">{this.state.marketcap.data.btc_dominance} %</p>
                    <br />
                    
                    </div>
                </div>}
            </div>
        )
    }
}

export default Coins;