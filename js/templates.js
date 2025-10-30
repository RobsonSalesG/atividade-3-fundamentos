// Sistema de templates JavaScript (páginas dinâmicas)
const templates = {
    home: `
    <section>
      <h2>Bem-vindo!</h2>
      <img src='../img/logo.jfif'/>
      <p>Esta é a página inicial da sua aplicação SPA.</p>
    </section>
  `,

    formulario: `
    <section>
      <h2>Formulário de Contato</h2>
      <form id="form-contato">
        <label>Nome:</label>
        <input type="text" id="nome" placeholder="Digite seu nome" required>

        <label>Email:</label>
        <input type="email" id="email" placeholder="Digite seu e-mail" required>

        <label>Mensagem:</label>
        <textarea id="mensagem" placeholder="Digite sua mensagem" required></textarea>

        <button type="submit">Enviar</button>
      </form>
      <div id="mensagem-resultado"></div>
    </section>
  `,

    sobre: `
    <section>
      <h2>Sobre o Projeto</h2>
      <img src='../img/projeto1.jpg'/>
      <p>Este projeto demonstra o uso de JavaScript para criar uma aplicação dinâmica.</p>
    </section>
  `
};
