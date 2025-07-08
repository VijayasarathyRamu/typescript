class User{
    private userid:string = "admin@gmail.com";
    private upass:string = "admin@1234";
    
    get _userid(){
        return `user id:${this.userid}`
    }
    get _upass(){
        return `password: ${this.upass}`
    }
    set _userid(val:any){
        this.userid = val;
    }
    set _upass(val:any){
        this.upass = val;
    }
    userDetails(){
        return `UserID:${this.userid} Password:${this.upass}`
    }
}

let userObj = new User();
console.log(userObj._userid);
console.log(userObj._upass);
userObj._userid = "Vijay@gmail.com"
userObj._upass = "Vijay@1234"
console.log(userObj._userid);
console.log(userObj._upass);