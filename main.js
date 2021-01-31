var Student_Names=[]
function Submitthename(){
    
    var name_1 =document.getElementById("name_of_the_student_1").value;
    var name_2 =document.getElementById("name_of_the_student_2").value;
    var name_3 =document.getElementById("name_of_the_student_3").value;
    var name_4 =document.getElementById("name_of_the_student_4").value;

    Student_Names.push(name_1);
    Student_Names.push(name_2);
    Student_Names.push(name_3);
    Student_Names.push(name_4);

    console.log(Student_Names);
    document.getElementById("answerinator").innerHTML=Student_Names;

    document.getElementById("button_submit").style.display="none";
    document.getElementById("button_sort").style.display="inline-block";

}
function Sortthename(){

    Student_Names.sort()
    document.getElementById("answerinator").innerHTML=Student_Names;    
}