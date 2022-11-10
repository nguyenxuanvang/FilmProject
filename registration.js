const registrationNode = document.querySelector('.button-registration button');
const inputNodes = document.querySelectorAll('.user-password input');
const alertRegistrationNode = document.querySelector('.alertRegistration');
let accountList = JSON.parse(localStorage.getItem('accountList'));
if(accountList === null) accountList = [];
const Account = function(user,password) {
    this.user = user;
    this.password = password;
}
const arrVN = ['à','á','ạ','ả','ã','â','ầ','ấ','ậ','ẩ','ẫ','ă','ằ','ắ','ặ','ẳ','ẵ',
                'è','é','ẹ','ẻ','ẽ','ê','ề','ế','ệ','ể','ễ',
                'ì','í','ị','ỉ','ĩ',
                'ò','ó','ọ','ỏ','õ','ô','ồ','ố','ộ','ổ','ỗ','ơ','ờ','ớ','ợ','ở','ỡ',
                'ù','ú','ụ','ủ','ũ','ư','ừ','ứ','ự','ử','ữ',
                'ỳ','ý','ỵ','ỷ','ỹ','đ',
                '!','@','`','~','#','$','%','^','&','*','(',')','[',']',':',';','"','<','>','?','/',' ','+','-'];
const checkVN = function(str) {
    for(let i = 0; i < str.length; i += 1) 
        for(let j = 0; j < arrVN.length; j += 1) 
            if(str[i] === arrVN[j]) {
                return false;
            }
    return true;
}
const checkAccount = function(acc) {
    for(let i = 0; i < accountList.length; i += 1)
        if(accountList[i].user === acc)
            return false;
    return true;
}
const checkUserName = function(input) {
    if(input.value === '') {
        input.parentElement.children[2].classList.remove('hidden');
        input.parentElement.children[2].textContent = `Vui Lòng Không Bỏ Trống`;
        return false;
    }
    if(checkVN(input.value) === false) {
        input.parentElement.children[2].classList.remove('hidden');
        input.parentElement.children[2].textContent = `Vui Lòng Không Chứa Kí Tự Đặc Biệt`;
        return false;
    }
    input.parentElement.children[2].classList.add('hidden');
    return true;
}
const checkValidtUserName = function(input) {
    if(checkAccount(input.value) === false) {
        input.parentElement.children[2].classList.remove('hidden');
        input.parentElement.children[2].textContent = `Tên Đăng Nhập Đã Tồn Tại`;
        return false;
    }
    if(input.value.length < 6) {
        input.parentElement.children[2].classList.remove('hidden');
        input.parentElement.children[2].textContent = `Tên Đăng Nhập Quá Ngắn`;
        return false;
    }
    input.parentElement.children[2].classList.add('hidden');
    return true;
}
const checkPasswork = function(input) {
    if(input.value === '') {
        input.parentElement.children[2].classList.remove('hidden');
        input.parentElement.children[2].textContent = `Vui Lòng Không Bỏ Trống`;
        return false;
    }
    if(input.value.length < 6 || input.value.length > 15) {
        input.parentElement.children[2].classList.remove('hidden');
        input.parentElement.children[2].textContent = `Mật Khẩu Phải Từ 6 - 15 Kí Tự`;
        return false;
    }
    input.parentElement.children[2].classList.add('hidden');
    return true;
}
const checkValidPassword = function(input) {
    if(input.value !== inputNodes[1].value) {
        input.parentElement.children[2].classList.remove('hidden');
        input.parentElement.children[2].textContent = `Mật Khẩu Xác Nhận Không Chính Xác`;
        return false;
    }
    input.parentElement.children[2].classList.add('hidden');
    return true;
}
registrationNode.addEventListener('click', () => {
    inputNodes.forEach(item => {
        item.parentElement.children[2].classList.add('hidden');
    });
    let isValid = true;
    while(isValid) {
        if(checkUserName(inputNodes[0]) === false) {
            isValid = false;
            break;
        }
        if(checkPasswork(inputNodes[1]) === false) {
            isValid = false;
            break;
        }
        if(checkValidPassword(inputNodes[2]) === false) {
            isValid = false;
            break;
        }
        if(checkValidtUserName(inputNodes[0]) === false) {
            isValid = false;
            break;
        }
        break;
    }
    if(isValid) {
        const account = new Account(inputNodes[0].value,inputNodes[1].value);
        accountList.push(account);
        localStorage.setItem('accountList',JSON.stringify(accountList));
        alertRegistrationNode.classList.remove('hidden');
        setTimeout(() => {
            window.location = "login.html";
        },500);
    }
});