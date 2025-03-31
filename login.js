document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    fetch('cadastro.json')
        .then(response => response.json())
        .then(data => {
            const usuario = data.find(user => user.email === email);
            if (usuario) {
                if (usuario.senha === senha) {
                    window.location.href = 'resultado.html';
                } else {
                    alert('Senha incorreta');
                }
            } else {
                alert('Usuário não cadastrado');
            }
        })
        .catch(error => {
            console.error('Erro ao verificar o login:', error);
        });
});

document.getElementById('cadastro').addEventListener('click', function() {
    window.location.href = 'cadastro.html';
});
