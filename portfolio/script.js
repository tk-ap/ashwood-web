const dialog=document.querySelector(".lightbox");
const dialogImage=dialog.querySelector("img");
const dialogCaption=dialog.querySelector(".lightbox-caption");
const closeButton=dialog.querySelector(".lightbox-close");
let opener=null;
document.querySelectorAll(".image-trigger").forEach((button)=>{button.addEventListener("click",()=>{const sourceImage=button.querySelector("img");opener=button;dialogImage.src=button.dataset.image;dialogImage.alt=sourceImage.alt;dialogCaption.textContent=button.dataset.caption;dialog.showModal()})});
closeButton.addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",(event)=>{if(event.target===dialog)dialog.close()});
dialog.addEventListener("close",()=>{dialogImage.removeAttribute("src");opener?.focus()});
