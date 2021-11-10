var score = 80;
var grade = "";

if(score >= 90){
    grade = "A";
}else if(score >=80 && score < 90){
    grade = "B";
}else if(score >=70 && score < 80){
    grade = "C";
}else if(score >=60 && score < 70){
    grade = "D";
}else if(score >=0 && score < 60){
    grade = "F";
}else{
    document.write("입력 오류입니다.");
}
document.write("점수는 " + score + "점입니다.<br>");
document.write("학점은 <span class='co'> " + grade + "</span>입니다.");
