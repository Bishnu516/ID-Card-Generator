const img= document.getElementById("input1");
const title=document.getElementById("input2");
const mainDiv= document.getElementById("mDiv")

function display(){
    let image=document.createElement("img");
    image.src=input1.value

    let Title=document.createElement("h1");
    Title.textContent= title.value

    mainDiv.append(image,Title);
    input1.value=""
    input2.value=""
}
