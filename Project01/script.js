/*const count = document.getElementById('count')
let c = 0;
function incr ()
{
    c++;
    count.textContent = c;
}
function decr ()
{
    c--;
    count.textContent=c
}
function reset ()
{
    c = 0;
    count.textContent=c
} */
/*const count = document.getElementById('count')
let c = 0;

if(c>=0 && c <=25){
    console.log("you don't go below")

}
else{
    console.log('this is maxof range');
}
function incr ()
{
    c++;
    count.textContent = c;
    
}
function decr ()
{
    c--;
    count.textContent=c
}
function reset ()
{
    c = 0;
    count.textContent=c
}
*/
const count = document.getElementById('count');
let c = 0;

function incr() {
    if (c < 25) {
        c++;
        count.textContent = c;
    } else {
        console.log("This is the maximum range");
    }
}

function decr() {
    if (c > 0) {
        c--;
        count.textContent = c;
    } else {
        console.log("You don't go below");
    }
}

function reset() {
    c = 0;
    count.textContent = c;
}