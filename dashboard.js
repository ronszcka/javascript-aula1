function logout() {

    localStorage.removeItem("token");

    window.location.href = "/index.html";

}

window.onload = function() {

    const token = localStorage.getItem("token");

    if (token) {
        console.log("logado com sucesso");
    } else {
        window.location.href = "/index.html";
    }

}