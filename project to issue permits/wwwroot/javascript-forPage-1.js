let over_cont = document.getElementById("overlay-container");
let student1 = document.getElementById("student1");
let student2 = document.getElementById("student2");
let over = document.getElementById("overlay");
let right = document.getElementById("over-right");
let left = document.getElementById("over-left");
let gpa = document.getElementById("GPA");
let user_id = document.getElementById("user-id");
let submit1 = document.getElementById("submit-student1");
let submit2 = document.getElementById("submit-student2");
student1.onclick = function(){
        over.style.cssText= `background: linear-gradient(90deg,#005792,#00bbf0)no-repeat 0 0/cover;`
        over_cont.style.cssText=`left: 0%;`
        right.style.cssText=`display:none;`
        left.style.cssText=`display: flex;`
}
student2.onclick = function(){
        over_cont.style.cssText=`left: 50%;`
        over.style.cssText= `
        transition:0.6s ease-in-out;
        background: linear-gradient(90deg,#ff4b2b,#FF416c)no-repeat 0 0/cover;`
        right.style.cssText=`display:flex;`
        left.style.cssText=`display: none;`
}