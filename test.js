function test(){
        var name = document.getElementById("username").value ; 
        var pass = document.getElementById('password').value ;

        console.log(name);
        if( name instanceof String ) {
            alert ("try again ");
            return false ; 
        }
        else{
            signup(name,pass);
            alert("you gave signed up succesfully ");
        }
}
function person (name,pass) {
    this.name = name ;
    this.pass = pass ;
}
function signup (name , pass) {
    var ch1 = new person(name,pass);
    console.log(ch1);
}
var persons=[];
persons.push( new person("abolfazl" , "ghodrati" ));
console.log(typeof("string"));