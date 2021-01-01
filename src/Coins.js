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
            <div>
                {this.state.loading ? 
                <div>loading... {this.state.errorMsg}</div> : 
                <div>
                    <div>
                    Current Market Capitalization:  {this.state.marketcap.data.quote.USD.total_market_cap} US$
                    <br />
                    Total Trading Volume (24h):     {this.state.marketcap.data.quote.USD.total_volume_24h} US$
                    <br />
                    Dominance of Bitcoin:           {this.state.marketcap.data.btc_dominance}%
                    <br />
                    
                    </div>
                </div>}
            </div>
        )
    }
}

export default Coins;