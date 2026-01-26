// ---------- DEMO USERS ----------
const demoUsers = [
    { email: "demo@bank.com", password: "1234", name: "Jack Sparrow" }
];

// ---------- LOGINNNNN ----------
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const user = demoUsers.find(u => u.email === email && u.password === password);

    if(user){
        // Save user name to sessionStorage
        sessionStorage.setItem("userName", user.name);

        // Redirect to dashboard
        window.location.href = "index.html"; // adjust path if needed
    } else {
        alert("Invalid credentials! Use demo@bank.com / 1234");
    }
});

// ---------- SIGN UP ----------
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if(name && email && password){
        // Save new user to sessionStorage
        const newUser = { name, email, password };
        sessionStorage.setItem("userName", newUser.name);

        // Redirect to dashboard
        window.location.href = "Dashboard.html"; // adjust path if needed
    } else {
        alert("Please fill all fields to sign up!");
    }
});


