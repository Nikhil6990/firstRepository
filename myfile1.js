// function func1(){
//     let name =document.getElementById("name").value;
//     let email =document.getElementById("email").value;
//     let pass =document.getElementById("pass").value;
//     document.getElementById("head3").innerText="Name : "+name+"\nEmail : "+email+"\nPassword : "+pass;
// }


document.getElementById("mybut").onclick = function(){
    let name =document.getElementById("name").value;
        let email =document.getElementById("email").value;
        let pass =document.getElementById("pass").value;
        document.getElementById("head3").innerText="UserName : "+name+"\nUserEmail : "+email+"\nUserPassword : "+pass;
    // let textarea=document.getElementById("taid").value;
    // document.getElementById("head3").innerHTML=textarea;
}