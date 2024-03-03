// Cria a barra de navegação e lida com o prompt de "ENTRAR"

document.addEventListener ( "DOMContentLoaded", function()
{
	// Barra de Navegação
	const navSection = document.getElementById ( "estilo_menu_principal" );
	navSection.innerHTML =
	`
		<nav class = "navbar navbar-expand-lg navbar-light bg-light">
			<div class = "container-fluid">
				<img class = "navbar-brand" src="./imagens/010_logo.png" alt = "Logo">
				<button class = "navbar-toggler" type = "button" data-bs-toggle="collapse" data-bs-target = "#navbarNav" aria-controls = "navbarNav" aria-expanded = "false" aria-label = "Toggle navigation">
					<span class = "navbar-toggler-icon"></span>
				</button>
				<div class = "collapse navbar-collapse" id = "navbarNav">
					<ul class = "navbar-nav border border-dark">
						<li class = "nav-item">
							<a class = "nav-link border border-dark" href = "Pagina_Inicial.html">Inicio</a>
						</li>
						<li class = "nav-item">
							<a class = "nav-link border border-dark" href = "Sobre.html">O Jogo</a>
						</li>
						<li class = "nav-item">
							<a class = "nav-link border border-dark" href = "#">Personagens</a>
						</li>
						<li class = "nav-item">
							<a class = "nav-link border border-dark" href = "#">Itens</a>
						</li>
						<li class = "nav-item">
							<a class = "nav-link border border-dark" href = "#">Produtos</a>
						</li>
						<li class = "nav-item">
							<a class = "nav-link border border-dark" href = "#" id="entrarLink">Entrar</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	`;

	// Prompt de Login (quandio clicar em ENTRAR)
	const loginSection = document.querySelector ( ".jan_login" );
	loginSection.innerHTML =
	`
		<div class = "modal fade" id = "loginModal" tabindex = "-1" aria-labelledby = "exampleModalLabel" aria-hidden = "true">
			<div class = "modal-dialog">
				<div class = "modal-content">
					<div class = "modal-header">
						<h5 class = "modal-title" id = "exampleModalLabel"><img src = "./imagens/010_logo.png" alt = "Logo" class = "ajuste-imagem"></h5>
						<button type = "button" class = "btn-close" data-bs-dismiss = "modal" aria-label = "Close"></button>
					</div>
					<div class = "modal-body">
						<div class = "mb-3">
							<label for = "username" class = "form-label">Nome do Usuário</label>
							<input type = "text" class = "form-control" id = "username">
						</div>
						<div class = "mb-3">
							<label for = "password" class = "form-label">Senha</label>
							<input type = "password" class = "form-control" id="password">
						</div>
						<p><a href = "#">Esqueceu a senha?</a></p>
						<p><a href = "Criar_Conta.html">Criar conta</a></p>
					</div>
					<div class = "modal-footer">
						<button type = "button" class = "btn btn-secondary" data-bs-dismiss = "modal">Fechar</button>
						<button type = "button" class = "btn btn-primary">Entrar</button>
					</div>
				</div>
			</div>
		</div>
	`;
});
