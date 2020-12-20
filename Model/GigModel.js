import firestore from '@react-native-firebase/firestore'

 

export default class GigModel{
    constructor() {
         
        Title = '',
        price = '',
        description = '',
        GigCategory = '',
        userID='',
        ImageUri=''
        IngredientsName=[],
        IngredientsPrice=[],
        username='',
        this.GigAdded = false,
        this.Rate=0,
        this.feedback=''
      }
 

      async SaveRating(Seller,Gigid,Rate,feedback) {
 
        if (true) {
           
          
          
          await firestore()
            .collection(`SellerDetails`).doc(Seller) .collection(`Gigs`).doc(Gigid) .collection(`Reviews`)
            .add({
              Rate: Rate,
              Feedback:feedback
             
    
            })
            .then(() => {
              this.GigAdded = true
              console.log('Gig added!');
            });
        } else {
          
        }
        return this.UserAdded
      }
      async getRating(Seller,Gigid,Data) {
 
        if (true) {
           
          
          
          await firestore()
            .collection(`SellerDetails`).doc(Seller) .collection(`Gigs`).doc(Gigid) .collection(`Reviews`)
            .get()
  .then(async querySnapshot => {
   
    await Data(querySnapshot)
  })
            .then(() => {
              this.GigAdded = true
              console.log('Review Read!');
            });
        } else {
          
        }
        return this.UserAdded
      }



async Save() {
 
    if (true) {
      console.log('DB Running')
      
      
      await firestore()
        .collection(`SellerDetails`).doc(`${this.username}`) .collection(`Gigs`)
        .add({
          Title: this.Title,
          price: this.price,
          description: this.description,
          GigCategory: this.GigCategory,
          ImageUri:this.ImageUri,
          IngredientsName:this.IngredientsName,
          IngredientsPrice:this.IngredientsPrice,
          username: this.username

        })
        .then(() => {
          this.GigAdded = true
          console.log('Gig added!');
        });
    } else {
      
    }
    return this.UserAdded
  }
 async getImage(){
 img=''
  await  firestore().collection("KaamPKGigs").get().then(async (querySnapshot)=> {
      querySnapshot.forEach(async (doc)=> {
      // doc.data() is never undefined for query doc snapshots
     img=  doc.data().image
  })
}).catch(function(error) {
    console.log("Error getting document:", error);
}); 
return  img  
}
async FetchData(Data){
  let array=[]
  await firestore()
  .collection('Sellers') 
  .get()
  .then(async querySnapshot => {
querySnapshot.forEach(documentSnapshot=>{
array.push(
  documentSnapshot.data().Sellers
)

})
  }).then(()=>array.forEach(async user=>{

    await firestore()
    .collection('SellerDetails').doc(user).collection('Gigs')
    .get()
    .then(async querySnapshot => {
      
     
  await Data(querySnapshot)
      
    });

  }))

  
}
async Search(keywords,Data){
  let array=[]
  await firestore()
  .collection('Sellers') 
  .get()
  .then(async querySnapshot => {
querySnapshot.forEach(documentSnapshot=>{
array.push(
  documentSnapshot.data().Sellers
)

})
  }).then(()=>array.forEach(async user=>{

    await firestore()
    .collection('SellerDetails').doc(user).collection('Gigs')
    .get()
    .then(async querySnapshot => {
      let array=[]
     

      querySnapshot.forEach(async documentSnapshot => {
      let str=documentSnapshot.data().Title
      let reg=new RegExp(keywords,"i");
      let result =str.match(reg);
 
     if(result!=null){
array.push({
  ...documentSnapshot.data(),
  key: documentSnapshot.id,
});
      await Data(array)
     }
      });
    });

  }))

  
}

async FetchMygigs(username,Data){

  await firestore()
  .collection('SellerDetails').doc(username).collection('Gigs')
  .get()
  .then(async querySnapshot => {
    
   
    await Data(querySnapshot)
    querySnapshot.forEach(documentSnapshot => {
    
   
    });
  });

}
}