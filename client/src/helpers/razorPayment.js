import { ApiFunc } from "../api/authApi"

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}


export const displayRazorPay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if (!res) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
    }

    const data = await ApiFunc.post('http://localhost:5000/hotelin/payment')

    console.log(data)

    var options = {
        "key": process.env.REACT_APP_RAZORPAY_ID, 
        currency: data.currency,
        amount: data.amount.toString(),
        order_id: data.id,
        name: 'Donation',
        description: 'Thank you for nothing. Please give us some money',
        image: process.env.PUBLIC_URL + "/assets/logo-black.png",
        handler: function (response) {
            alert(response.razorpay_payment_id)
            alert(response.razorpay_order_id)
            alert(response.razorpay_signature)
        },
        prefill: {
            name : 'Aaquib',
            email: 'sdfdsjfh2@ndsfdf.com',
            phone_number: '9899999999'
        }
    }
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
}