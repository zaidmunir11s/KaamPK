import React from 'react'
import GigModel from '../Model/GigModel'
let Gig=new GigModel();
export default class CreateGigController {
    constructor() {
    }
getTitle(){
return Gig.Title

}
getUsername(){
    return Gig.username
    
    }
getPrice(){
    return Gig.Price;
}
getDescription(){
    return Gig.Description;
}
setTitle(val){
    Gig.Title=val
}
setPrice(val){
    Gig.price=val
}
setDescription(val){
    Gig.description=val
}
PostData(){
    Gig.Save()
}
RateGig(Seller,Gigid,Rate,feedback){
    Gig.SaveRating(Seller,Gigid,Rate,feedback)
}
setImageUri(val){
    Gig.ImageUri=val
}
setUsername(val){
    Gig.username=val
}
setGigCategory(val){
Gig.GigCategory=val

}
setIngredientsName(val){
    Gig.IngredientsName=val
    
    }
    setIngredientsPrice(val){
        Gig.IngredientsPrice=val
        
        }
    


}