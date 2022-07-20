const people = document.querySelector(".sidebar .people");
const admin = document.querySelector(".admin-btn");

function isLogin()
{
    //로그인했으면 isLogin값에는 true가 담겨져있을것이다.
    const isLogin =  localStorage.getItem("isLogin");
    return isLogin;
}

function checkUser(event)
{
    event.preventDefault();

    //로그인 여부 확인
    //const login=isLogin();
    //로그인페이지 구현하기전
    const login = true;

    if(login)
    window.location.href="file:///C:/Users/mazin/Documents/testAPI/userSearch.html";
    else{
        alert("권한 부족");
        //나중엔 로그인페이지 구현하여 여기다 집어넣기
        
    }
}

function checkAdmin(event)
{
    //event.preventDefault();
    //서버에서 세션 id를 발급받아 쿠키에 저장
    

}
people.addEventListener("click",checkUser);
admin.addEventListener("click",checkAdmin);