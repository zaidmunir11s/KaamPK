import React from 'react'
import Users from '../Model/UserModel'
let User=new Users();
export default class SignInController {
    constructor() {
    }
  async  PassToModel(username,password){
  return  await User.UserVerify(username,password) 
        }
        getUsername() {

          return User.username
      }
      
      getPassword() {
          return User.password
      }
      getEmail() {
          return User.email
      }
      getPhoneNo() {
          return User.PhoneNO
      }
     async getUserType(username,password) {
        
      
      return await       User.UserTypeFetch(username,password)
          
      }
    

}

