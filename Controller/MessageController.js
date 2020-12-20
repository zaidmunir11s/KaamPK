import React from 'react'
import Message from '../Model/Messages'
let Messages=new Message();
export default class MessageController {
    constructor() {
    }

    async returnCountFlag(from,to){

    return    await Messages.returnCountFlag(from,to)
    }
async checkCountSeller(from,to){

    await Messages.checkCountSeller(from,to)
}

    async AddCount(from,to){
        await Messages.AddMsgCount(from,to);
        
        }
async SaveMsg(Seller,Buyer,body,usertype){
await Messages.Save(Seller,Buyer,body,usertype);

}
async SaveMsgD(Seller,Buyer,body,usertype){
    await Messages.SaveD(Seller,Buyer,body,usertype);
    
    }
async SaveBuyerMsg(Buyer,Seller,body){
    await Messages.SaveBuyer(Buyer,Seller,body);
    
    }

async  ViewMyMessages(from,to,data){

    await Messages.FetchMyMessagesSeller(from,to,
        async Data=>{ 

            await  data(Data)
         }
        )
}
async  ViewMyMessagesD(from,to,data){

    await Messages.FetchMyMessagesSellerD(from,to,
        async Data=>{ 

            await  data(Data)
         }
        )
}
async  getBuyer(from,data){

    await Messages.GetBuyer(from,
        async Data=>{ 
     
             await  data(Data)
         }
        )
}
async  getBuyerD(from,data){

    await Messages.GetBuyerD(from,
        async Data=>{ 
     
             await  data(Data)
         }
        )
}
async  getSeller(from,data){

    await Messages.GetSellers(from,
        async Data=>{ 

            await  data(Data)
         }
        )
}

}
