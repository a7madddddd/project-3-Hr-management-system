

function display(){
  let profileImg=document.getElementById('profileImg');
    const storedImage=JSON.parse(localStorage.getItem('hrJson')).Image;
    profileImg.src=storedImage;

    let fullName=document.getElementById('fullName');
   const storedName=JSON.parse(localStorage.getItem('hrJson')).full_name;
   fullName.value=storedName;


   let Job=document.getElementById('Job');
   const storedPosition=JSON.parse(localStorage.getItem('hrJson')).Postion;
   Job.value=storedPosition;

   let phone=document.getElementById('Phone');
   const storedPhone=JSON.parse(localStorage.getItem('hrJson')).Phone;
   phone.value=storedPhone;

   let email=document.getElementById('Email');
   const storedEmail=JSON.parse(localStorage.getItem('hrJson')).email;
   email.value=storedEmail;

   let bio =document.getElementById('bio');
   const storedBio=localStorage.getItem('bio');
   bio.textContent=storedBio;



}
display();


// remove picture

document.addEventListener('DOMContentLoaded',function(){

  const rmv_img = document.getElementById("rmv_img");
// const profileImg=document.getElementById("profileImg");        
rmv_img.addEventListener('click',function(e){
  e.preventDefault();
  console.log('remove Picture link clicked');
    profileImg.src="";
    onInput();
  

    
    console.log(profileImg);
});


 // upload picture

 const changePicLink = document.getElementById('changePicLink');
        
 const fileInput = document.getElementById("fileInput");
 const profileImg =document.getElementById('profileImg');

 console.log('changePicLink:', changePicLink);
 console.log('fileInput:', fileInput);
 console.log('profileImg:', profileImg);

 changePicLink.addEventListener('click', function (e) {
   e.preventDefault();
   console.log('Change Picture link clicked');
   fileInput.click();
 });

 fileInput.addEventListener('change', function () {
   const file = fileInput.files[0];
   if (file) {
     const reader = new FileReader();
     reader.onload = function (e) {
       console.log('File selected');
       profileImg.src = e.target.result;
     };
     reader.readAsDataURL(file);
   }
 });
});

function validateEmail() {
  let EmailInput = document.getElementById("Email");
  const Email = EmailInput.value;
  const EmailPat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (Email === "" || !EmailPat.test(Email)) {
      document.getElementById("errorEmail").textContent = "Invalid email address";
      return false;
  } else {
      document.getElementById("errorEmail").textContent = "";
      return true;
  }
}
function validateCurrentPassword() {
  const currentPassword = document.getElementById('currentPassword').value;
  const storedPassword = JSON.parse(localStorage.getItem('hrJson')).password;

  if (currentPassword !== storedPassword && currentPassword !== '') {
      document.getElementById('error').textContent = 'The current password is wrong';
      return false;
  } else {
      document.getElementById('error').textContent = '';
      return true;
  }
}


function validateNewPassword() {
  const newPassword = document.getElementById('newPassword').value;
  const renewPassword = document.getElementById('renewPassword').value;
  const passPat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (newPassword !== "" && !passPat.test(newPassword)) {
      document.getElementById("error1").textContent = "Invalid password. Password must be at least 8 characters long and contain at least one letter and one number";
      return false;
  } else {
      document.getElementById("error1").textContent = "";

      if (newPassword === renewPassword) {
          document.getElementById("error2").textContent = "";
          return true;
      } else {
          document.getElementById("error2").textContent = "Passwords do not match";
          return false;
      }
  }
}

function onInput() {
  let isValid = true;

  
 

  isValid = validateEmail() && validateCurrentPassword() && validateNewPassword();
 



  
  return isValid;
}

document.getElementById("Email").addEventListener('input', validateEmail);
document.getElementById("currentPassword").addEventListener('input', validateCurrentPassword);
document.getElementById("newPassword").addEventListener('input', validateNewPassword);
document.getElementById("renewPassword").addEventListener('input', validateNewPassword);
let saveButt = document.getElementById('saveButt');

saveButt.addEventListener('click', function(event) {
  event.preventDefault();
  if (!onInput()) { return;}
   


//  profile image
let profileImgSrc = document.getElementById('profileImg').src;
localStorage.setItem('hrJson', JSON.stringify({ ...JSON.parse(localStorage.getItem('hrJson')), Image: profileImgSrc }));

//  full name
let nameInput = document.getElementById('fullName').value;
localStorage.setItem("hrJson", JSON.stringify({ ...JSON.parse(localStorage.getItem('hrJson')), full_name: nameInput }));

//  position
let jobInput = document.getElementById('Job').value;
localStorage.setItem("hrJson", JSON.stringify({ ...JSON.parse(localStorage.getItem('hrJson')), Position: jobInput }));


//bio
let bio=document.getElementById('bio').value;
localStorage.setItem('bio',bio);
//  phone
let phoneInput = document.getElementById('Phone').value;
localStorage.setItem("hrJson", JSON.stringify({ ...JSON.parse(localStorage.getItem('hrJson')), Phone: phoneInput }));

// email
let emailInput = document.getElementById('Email').value;
localStorage.setItem("hrJson", JSON.stringify({ ...JSON.parse(localStorage.getItem('hrJson')), email: emailInput }));

// password
let  renewPassword=document.getElementById('renewPassword').value;
if (renewPassword !== "") {
  localStorage.setItem("hrJson", JSON.stringify({ ...JSON.parse(localStorage.getItem('hrJson')), password: renewPassword }));
}

window.location.href = '../profile/profile2.html';
alert('Profile updated successfully!');
  
});

