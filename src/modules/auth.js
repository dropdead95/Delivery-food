export const auth = () => {
  const buttonAuth = document.querySelector(".button-auth");
  const modalAuth = document.querySelector(".modal-auth");
  const closeAuth = document.querySelector(".close-auth");
  const loginForm = document.getElementById("logInForm");
  const inputLogin = document.getElementById("login");
  const inputPassword = document.getElementById("password");
  const buttonOut = document.querySelector(".button-out");
  const userName = document.querySelector(".user-name");

  const login = (user) => {
    buttonAuth.classList.add("hide");
    buttonOut.classList.add("is-open");
    userName.classList.add("is-open");
    userName.textContent = user.login;
    modalAuth.classList.remove("is-open");
  };

  const logout = () => {
    buttonAuth.classList.remove("hide");
    userName.classList.remove("is-open");
    buttonOut.classList.remove("is-open");
    userName.textContent = "";
    localStorage.removeItem("user");
  };

  buttonAuth.addEventListener("click", () => {
    modalAuth.classList.add("is-open");
  });

  closeAuth.addEventListener("click", () => {
    modalAuth.classList.remove("is-open");
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = {
      login: inputLogin.value,
      password: inputPassword.value,
    };
    localStorage.setItem("user", JSON.stringify(user));
    login(user);
  });

  buttonOut.addEventListener("click", () => {
    logout();
  });

  if (localStorage.getItem("user")) {
    login(JSON.parse(localStorage.getItem("user")));
  }

}