POST request:
http://localhost:5000/api/payment/pay
Body:
{
  "amount": 100,
  "email": "debreworkmazengia1@gmail.com"
}
 Expected Result

You’ll get:

{
  "message": "Hosted Link",
  "status": "success",
  "data": {
    "checkout_url": "https://checkout.chapa.co/checkout/payment/YcstU0254DK7R6pNiuIDL2lLOFNO4uzt970skWLbtIEqS"
  }
}