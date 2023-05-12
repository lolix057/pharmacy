let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .icon').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

/*-------------department1--------------*/
function closeWindow_Headache(){
  window.location.href="/Headache.html";
}
function closeWindow_AllergySinus(){
  window.location.href="/Allergy&Sinus.html";
}

function closeWindow_backjoint(){
  window.location.href="/backjoint.html";
}
function closeWindow_Constipation(){
  window.location.href="/Constipation.html";
}

function closeWindow_Cough(){
  window.location.href="/Cough.html";
}
function closeWindow_Diarrhea(){
  window.location.href="/Diarrhea.html";
}
function closeWindow_Fever(){
  window.location.href="/Fever.html";
}
function closeWindow_Vomiting(){
  window.location.href="/Vomiting.html";
}


/*-------------department2--------------*/


function closeWindow_Baby_and_Mom(){
  window.location.href="/Baby_and_Mom.html";
}
function closeWindow_EyeAndEarCare(){
  window.location.href="/Eye and Ear Care.html";
}

function closeWindow_HairCare(){
  window.location.href="/Hair Care.html";
}
function closeWindow_OralCare(){
  window.location.href="/Oral Care.html";
}

function closeWindow_PersonalCare(){
  window.location.href="/Personal Care.html";
}
function closeWindow_SkinCare(){
  window.location.href="/Skin Care.html";
}

function closeWindow_VitaminAndSupplements(){
  window.location.href="/Vitamin and Supplements.html";
}
