//상세 설명 보기
function showText(){
    document.getElementById("desc").style.display="block";

    //보기 버튼 숨기기
    document.getElementById("open").style.display="none";

}


//상세 설명 닫기
function hideText(){
    document.getElementById("desc").style.display="none";
    
    //보기 버튼 보이기
    document.getElementById("open").style.display="block";

}