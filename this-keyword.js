
const user = {
    firstName: 'Ridwan' ,
    lastName: 'Ahmed' ,
    message: function () {
        console.log(this.firstName);
    }
} ;
user.firstName = "Hero "
user.message() ;