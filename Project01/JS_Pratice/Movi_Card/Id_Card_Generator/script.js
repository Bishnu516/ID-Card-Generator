let sName= document.getElementById("name");
let sid=document.getElementById("id");
let course=document.getElementById("Course")
let college=document.querySelector("#Coll");
let imgs=document.querySelector("#img");

const mainDiv=document.getElementById("mainDiv")

function display(){
    
   let image=document.createElement("img")
    image.src=imgs.value;



    const Name=document.createElement("h1")
    Name.textContent=`Name:${sName.value}`;
    
    let cid=document.createElement("h4")
    cid.textContent=`Id:${sid.value}`;

    const sub=document.createElement("h4")
    sub.textContent=`Course:${course.value}`;

    let institute=document.createElement("h3")
    institute.textContent=`Institute:${college.value}`;

    mainDiv.style.display="block";
    mainDiv.append( image,Name,cid,sub,institute);
    imgs.value=""
    sName.value=""
    sid.value=""
    course.value=""
    college.value="";

    
}
