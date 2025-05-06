const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const showLoginBtn = document.getElementById("show-login");
const showRegisterBtn = document.getElementById("show-register");
const authMessage = document.getElementById("auth-message");



  

// showLoginBtn.onclick = ()=>{
//     loginForm.classList.remove("hidden");
//     registerForm.classList.add("hidden");
//     autMessage.textContent = "";
// }


// showRegisterBtn.onclick = ()=>{
//     registerForm.classList.remove("hidden");
//     loginForm.classList.add("hidden");
//     autMessage.textContent = "";
// }



showLoginBtn.addEventListener("click",  ()=> {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    authMessage.textContent = "";
});

showRegisterBtn.addEventListener("click",  ()=> {
  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
  authMessage.textContent = "";
})


registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    if (!username || !password){
        authMessage.textContent = "Please fill in all fields.";
        return;
    }
    
        const users = JSON.parse(localStorage.getItem("users")) || {};
        if (users[username]){
            // truthy value, username already exists
            autMessage.textContent = "Username already exists. Please choose another one.";
            return
        }
        
        users[username] = {password, todos: []};
        localStorage.setItem("users", JSON.stringify(users));

        authMessage.style.color = "green";
        authMessage.textContent = "Registration successful! You can now log in.";
        registerForm.reset();
        // loginForm.classList.remove("hidden");
        // registerForm.classList.add("hidden");   
        // authMessage.textContent = "";
 });

 loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    
   const users = JSON.parse(localStorage.getItem("users")) || {};
   if(!users[username] || users[username].password !== password){
        authMessage.textContent = "Invalid username or password.";
        return;
   }

   localStorage.setItem("currentUser", username);
   window.location.href = "todo.html";
});