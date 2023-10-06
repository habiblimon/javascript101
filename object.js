//object .....
console.log("*** JAVASCRIPT Object ***")


const student = {
    stName :"Habib limon",
    stuAge :30,
    dob : "1994",
    university:"NU",
    isAdmitted : function(){
        console.log(`${this.stName} is admitted to ${this.university}`);
    }
};

student.isAdmitted();