const inputNodes = document.querySelectorAll('input');
const loginButtonNode = document.querySelector('.login-button button');
const alertLoginNode = document.querySelector('.login-form .alertLogin');
let accountList = JSON.parse(localStorage.getItem('accountList'));
if(accountList === null) accountList = [];
let conditionLogin = false;
const checkValidAccount = function(acc,pass) {
    for(let i = 0; i < accountList.length; i += 1)
        if(accountList[i].user === acc && accountList[i].password === pass)
            return true;
    return false;
}
loginButtonNode.addEventListener('click',(event)=>{
    event.preventDefault();
    inputNodes[0].parentElement.children[2].classList.add('hidden');
    inputNodes[1].parentElement.children[2].classList.add('hidden');
    alertLoginNode.classList.add('hidden');
    if(inputNodes[0].value === '') {
        inputNodes[0].parentElement.children[2].classList.remove('hidden');
        inputNodes[0].parentElement.children[2].textContent = `Vui Lòng Không Bỏ Trống`;
    }
    else {
        if(inputNodes[1].value === '') {
            inputNodes[1].parentElement.children[2].classList.remove('hidden');
            inputNodes[1].parentElement.children[2].textContent = `Vui Lòng Không Bỏ Trống`;
        }
        else {
            if(checkValidAccount(inputNodes[0].value,inputNodes[1].value) === false) {
                alertLoginNode.classList.remove('hidden');
                alertLoginNode.textContent = `Không Tìm Thấy Tài Khoản`;
            }
            else {
                alertLoginNode.classList.remove('hidden');
                alertLoginNode.textContent = `Đăng Nhập Thành Công`;
                conditionLogin = true;
                localStorage.setItem('conditionLogin',JSON.stringify(conditionLogin));
                setTimeout(()=>{
                    window.location = "index.html";
                },500);
            }
        }
    }
});