/* 
    'y'키를 누르면 "계속 반복"
    'n'키를 누르면 "반복 중단"
    그 외의 키는 "잘못입력"

    while ~ if ~ break (반복 조건문)
    */
    // var key = ""; 문자 초기화 ("")

    while(true){
        //입력
        var key = prompt("계속 반복할까요?", "y/n, n=종료");

        //처리
        if(key == 'y' || key == 'Y'){
            alert("계속 반복됩니다.");
        }
        else if(key == 'n' || key == 'N'){
            alert("반복을 중단합니다.");
            break;
        }
        else{
            alert("키를 잘못 눌렀습니다.");
            }
        }
        document.write("반복 종료!");
