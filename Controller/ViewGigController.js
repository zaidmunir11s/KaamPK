import React from 'react'
import Gigs from '../Model/GigModel'
let Gig=new Gigs();
export default class ViewGigController {
    constructor() {
    }
 async getData(data){
      
   await Gig.FetchData(async Data=>{ await  data(Data)
   
    })
     
  
 }
 async search(keywords,data){
      
    await Gig.Search(keywords,async Data=>{ await  data(Data)
    
     })
      
   
  }
getTitle(){
    return Gig.Title
    
    }
    getPrice(){

        return Gig.Price;
    }
    getDescription(){
        return Gig.Description;
    }
   async  ViewmyGigs(username,data){

        await Gig.FetchMygigs(username,
            async Data=>{ await  data(Data)}
            )
    }
getRating(Seller,Gigid,data){
    Gig.getRating(Seller,Gigid,async Data=>{ await  data(Data)})


}    
    


}

