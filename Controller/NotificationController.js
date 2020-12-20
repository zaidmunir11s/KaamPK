import Notification from '../Model/Notification'
const Notifi =new Notification();

export default class NotificationController {


    OrderNotifySeller(Buyer,Seller,OrderID,GigId,Gig){

        Notifi.OrderNotifySeller(Buyer,Seller,OrderID,GigId,Gig)
}
OrderAccepted(Buyer,Seller,OrderID,GigId,Gig){

    Notifi.OrderAccepted(Buyer,Seller,OrderID,GigId,Gig,Response)
}
async CheckforNotification(Seller,arr){
   
await   Notifi.CheckforNotification(Seller ,array=>{arr(array)} ) 

 
}

async CheckforNotificationBuyer(Seller,arr){
   
    await   Notifi.CheckforNotificationBuyer(Seller ,array=>{arr(array)} ) 
    
     
    }
    async CheckBuyerPendingOrder(Seller,arr){
   
        await   Notifi.CheckBuyerPendingOrder(Seller ,array=>{arr(array)} ) 
        
         
        }
        async CheckSellerPendingOrder(Seller,arr){
   
            await   Notifi.CheckSellerPendingOrder(Seller ,array=>{arr(array)} ) 
            
             
            }
    

PendingOrder(Buyer,Seller,OrderID,GigId,Gig,status){

    Notifi.PendingOrder(Buyer,Seller,OrderID,GigId,Gig,status)
}
RemoveSellerOrder(Seller,OrderID){

    Notifi.RemoveSellerOrder(Seller,OrderID)
}
}