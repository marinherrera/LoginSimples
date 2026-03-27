function logar() {
  let usuario = document.getElementById("inputUsuario").value;
  let senha = document.getElementById("inputSenha").value;

  if (usuario == "Marina" && senha == "marina54321") {
    window.location.href = "home.html";
  } else {
    //alert("Usuário/Senha incorretos! Tente novamente!")
    Swal.fire({
      title: "Acesso Negado",
      text: "Usuário/Senha incorretos! Tente novamente!",
      icon: "error",
    });
  }
}
