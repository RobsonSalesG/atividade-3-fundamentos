// Manipulação do DOM e navegação SPA
const app = document.getElementById("app");

// Função para renderizar a página escolhida
function renderPage(page) {
    app.innerHTML = templates[page] || "<h2>Página não encontrada!</h2>";

    if (page === "formulario") {
        configurarFormulario();
    }
}

// Navegação SPA
document.querySelectorAll("nav button").forEach(btn => {
    btn.addEventListener("click", e => {
        const page = e.target.dataset.page;
        renderPage(page);
    });
});

// Página inicial padrão
renderPage("home");

// -------------------------------
// Validação de formulário
// -------------------------------
function configurarFormulario() {
    const form = document.getElementById("form-contato");
    const resultado = document.getElementById("mensagem-resultado");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let nome = document.getElementById("nome");
        let email = document.getElementById("email");
        let mensagem = document.getElementById("mensagem");

        let valido = true;

        // Limpa mensagens antigas
        resultado.innerHTML = "";
        document.querySelectorAll("input, textarea").forEach(el => el.classList.remove("error"));

        // Verificação básica
        if (nome.value.trim() === "") {
            nome.classList.add("error");
            valido = false;
        }

        if (!email.value.includes("@") || email.value.trim() === "") {
            email.classList.add("error");
            valido = false;
        }

        if (mensagem.value.trim().length < 10) {
            mensagem.classList.add("error");
            valido = false;
        }

        if (!valido) {
            resultado.innerHTML = `<p class="msg-erro">⚠️ Por favor, preencha todos os campos corretamente.</p>`;
        } else {
            localStorage.setItem('atividade3', JSON.stringify({
                nome: nome.value,
                email: email.value,
                mensagem: mensagem.value
            }))
            resultado.innerHTML = `<p class="sucesso">✅ Mensagem enviada com sucesso!</p>`;
            form.reset();
        }
    });
}
