function LogIn(){
    User_name = document.getElementById("name_user").value; //user name set to var User_name

    Password = document.getElementById("pw").value; //password set to var Password

    localStorage.setItem("USERN", User_name); //User name set in Local Storage
    localStorage.setItem("PASSN", Password); //Password set in Local Storage
    window.location = "Vchat_room.html"; //locate to Vchat_room.html now

}