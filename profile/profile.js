 
 
 async function checkIfINLocal() {
   if (!localStorage.getItem('hrJson')||!localStorage.getItem('bio')) {
     try {
       let response = await fetch('HR-info.json');
       let hrJson = await response.json();
       localStorage.setItem('hrJson', JSON.stringify(hrJson));
       localStorage.setItem("bio","P.S I have no special talent, I'm just passionately curious ;)");
     } catch (error) {
       console.error('Failed to fetch HR-info.json:', error);
     }
   }
 }



 async function display() {
   await checkIfINLocal(); 
   try {
    const storedBio=localStorage.getItem('bio');
     const storedData = JSON.parse(localStorage.getItem('hrJson'));
     let image = document.getElementById('image');
     let name = document.getElementById('name');
     let Id = document.getElementById('id');
     let position = document.getElementById('position');
     let phone = document.getElementById('phone');
     let email = document.getElementById('email');
     let bio=document.getElementById('bio');
 bio.textContent=storedBio;
     image.src = storedData.Image;
     name.textContent = storedData.full_name;
     Id.textContent = storedData.ID;
     position.textContent = storedData.Postion;
     phone.textContent = storedData.Phone;
     email.textContent = storedData.email;
   } catch (error) {
     console.error('Error displaying data from localStorage:', error);
   }
 }
 display();

