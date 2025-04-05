//signup with role
function signup(){
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const role=document.getElementById('role').value;

    if(!email || !password)return alert
    ('Fill all fields');

    localStorage.setItem('user',JSON.stringify({email,password,role}));
    alert('Account Created!');
    window.location.href='/index.html';
}
//login with role check
function login(){
    const storedUser=JSON.parse(localStorage.getItem('user'));
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;

    if(!storedUser || email !==storedUser.email || password !==storedUser.password){
        return alert('Invalid Credentials!');
    }
    if (storedUser.role=='admin'){
        window.location.href='/admin-dashboard/admin-dashboard.html';
    }
    else{
        window.location.href='/user-dashboard/user-dashboard.html';
    }
}
function logout(){
    localStorage.removeItem('user');
    window.location.href='/index.html';
}
