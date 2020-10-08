var Name_Of_Students=[];

function Submit(){


var Student_1= document.getElementById("Name_1").value;
var Student_2= document.getElementById("Name_2").value;
var Student_3= document.getElementById("Name_3").value;
var Student_4= document.getElementById("Name_4").value;

Name_Of_Students.push(Student_1);
Name_Of_Students.push(Student_2);
Name_Of_Students.push(Student_3);
Name_Of_Students.push(Student_4);

console.log(Name_Of_Students);
document.getElementById("Display").innerHTML=Name_Of_Students;

document.getElementById("Submitbutton").style.display="none";

document.getElementById("Sorttbutton").style.display="inline-block";

}

function Sorting(){
  Name_Of_Students.sort();
  console.log(Name_Of_Students);
  document.getElementById("Display").innerHTML=Name_Of_Students;
}

