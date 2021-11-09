// 변수의 값 교환하기
var x = 0;
var y = 1;
var temp;

document.write("***** 교환전 *****<br>");
document.write("x = " + x + ", y = " + y);

//교환 처리
//x값을 temp에 대입

temp = x; //x값을 temp(기준값)에 대입
x = y;    //y값을 x(기준값)에 대입
y = temp; //temp값을 y(기준값)에 대입


document.write("<br><br>");
document.write("*** 교환후 ***<br>");
document.write("x = " + x + ", y = " + y);
