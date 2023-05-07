import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { svg_donate } from '../assets/icons/assets_icons'
import '../styles/paypal.css'

function PayPal() {
    const getValue = () => {
        let donationValue = document.getElementById("testinput").value
        return String(donationValue)
    }

  return (
    <div className='paypal'>
        <div className='paypal_container'>
            <div className='icon_wrapper'><img className='svg_icons_paypal' src={svg_donate} alt='donate'></img></div>
            <p className='amount_instructions'>para donar, ingresa un monto, presiona el boton "set", y luego presiona el boton paypal</p>
            <div className='input_wrapper'>
                <input type={"number"} className="input" placeholder='$0' min={0}></input>
                <button onClick={getValue} className='button'>set</button>
            </div>
            
            <div className='payment_container'>
                <PayPalScriptProvider options={{"client-id": "AVCh3Q7Z79nGUjCF6xBSe6Uf6587plnb35VqI80DM6EsHFn0BVGYsezc43UBcuUowsMUmANMXRLmRHzL", currency: "MXN"}}>
                    <PayPalButtons style={{"layout":"vertical","width":"100%"}}
                        createOrder = {(data,actions) =>{
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value:getValue(),
                                        },
                                    }
                                ],
                            })
                        }}
                        onApprove = {(data,actions) => {
                            return actions.order.capture()
                        }}
                        
                    />
                </PayPalScriptProvider>
            </div>
        </div>
    </div>
  )
}

export default PayPal