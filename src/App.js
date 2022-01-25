import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";

function App() {
    async function handleToken(token) {
        console.log(token);
        await axios({
            method: 'post',
            url: `http://localhost:8082/api/v1/orders/charge?tokenId=${token.id}`,
        }).then(()=>{
            alert("success")
        }).catch(onerror=>{
            alert("success"+onerror)
        });
    }

    return (
        <div className="App">
            <Stripe
                stripeKey="pk_test_51JmtrVLEjL8xOAnuCjsNGmadMN1b96ZelcT562qBJZBm6vDPSzb3cG35yLBHaQfik5p3fVcH67ReCs44mDRt8YPy00teDDscIp"
                token={handleToken}
            />
        </div>
    );
}

export default App;
