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
registrationNode.addEventListener('click', () => {
    inputNodes.forEach(element => {
        element.parentElement.children[2].classList.add('hidden');
    });
    if(inputNodes[0].value === '') {
        inputNodes[0].parentElement.children[2].classList.remove('hidden');
        inputNodes[0].parentElement.children[2].textContent = `Vui Lòng Không Bỏ Trống`;
    }
    else {
        if(checkVN(inputNodes[0].value) === false) {
            inputNodes[0].parentElement.children[2].classList.remove('hidden');
            inputNodes[0].parentElement.children[2].textContent = `Vui Lòng Không Chứa Kí Tự Đặc Biệt`;
        }
        else {
            if(inputNodes[1].value === '') {
                inputNodes[1].parentElement.children[2].classList.remove('hidden');
                inputNodes[1].parentElement.children[2].textContent = `Vui Lòng Không Bỏ Trống`;
            }
            else {
                if(inputNodes[1].value.length < 6 || inputNodes[1].value.length > 15) {
                    inputNodes[1].parentElement.children[2].classList.remove('hidden');
                    inputNodes[1].parentElement.children[2].textContent = `Mật Khẩu Phải Từ 6 - 15 Kí Tự`;
                }
                else {
                    if(inputNodes[2].value === '') {
                        inputNodes[2].parentElement.children[2].classList.remove('hidden');
                        inputNodes[2].parentElement.children[2].textContent = `Vui Lòng Không Bỏ Trống`;
                    }
                    else {
                        if(inputNodes[2].value !== inputNodes[1].value) {
                            inputNodes[2].parentElement.children[2].classList.remove('hidden');
                            inputNodes[2].parentElement.children[2].textContent = `Mật Khẩu Xác Nhận Không Chính Xác`;
                        }
                        else {
                            console.log(checkAccount(inputNodes[0].value));
                            if(checkAccount(inputNodes[0].value) === false) {
                                inputNodes[0].parentElement.children[2].classList.remove('hidden');
                                inputNodes[0].parentElement.children[2].textContent = `Tên Đăng Nhập Đã Tồn Tại`;
                            }
                            else {
                                const account = new Account(inputNodes[0].value,inputNodes[1].value);
                                accountList.push(account);
                                localStorage.setItem('accountList',JSON.stringify(accountList));
                                alertRegistrationNode.classList.remove('hidden');
                                setTimeout(() => {
                                    window.location = "login.html";
                                },500);
                            }     
                            
                        }
                    }
                }
            }
        }
    }
});