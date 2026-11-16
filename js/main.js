

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
const $ = (elem) => document.querySelector(elem);
const $a = (elem) => document.querySelectorAll(elem);
const photoList = $a("#photos-list li")
const total= $("#total span")


console.log(photoList)

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function ClickPhoto() {
    this.classList.toggle('selected');

    const photosSelect = document.querySelectorAll ('#photos-list li.selected');

    total.textContent = photosSelect.length;
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

photoList.forEach(li => {
    li.addEventListener("click", ClickPhoto)})

/** Autre version plus longue
 * photoList.forEach(function(li) {
    li.addEventListener("click", function() {
  li.classList.toggle("selected");
  ClickPhoto()
});
}) */