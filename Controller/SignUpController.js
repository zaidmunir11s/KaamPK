import React from 'react'
import UserModel from '../Model/UserModel'
let User = new UserModel();
export default class SignUpController extends React.Component {
    constructor() {
        super();
      this.DuplicationFlag=false
    }
    PassToModel(username,password){
        User.UserVerify(username,password)
        }
    setUsername(val) {
        User.username = val;

    }
    setPassword(val) {
        User.password = val;

    }
    setLocation(val) {
        User.location = val;

    }
    setEmail(val) {
        User.email = val;

    }
    setUserType(val) {
        User.userType = val;

    }
    setPhoneNo(val) {
        User.PhoneNO = val;

    }
    setImageUri(val){
       // User.ImageUri=val
    }
    setImageName(val){
        User.ImageName=val
    }
  async  Register() {
   return await User.Save()
  
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
    getUserType() {
        return User.userType
    }
    
     getDuplicationFlag(){

       return  this.DuplicationFlag 
    }
 async   getDuplicateEmail(val,flag){
this.DuplicationFlag= await User.CheckDuplicationEmail(val)
flag (this.DuplicationFlag)
    }
    async   getDuplicateUsername(val,flag){
        this.DuplicationFlag= await User.CheckDuplicationUsername(val)
        flag (this.DuplicationFlag)
            }
}

//export {getEmail,getUsername,getPassword,passemail,passpassword,Passusername}