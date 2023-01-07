var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//let Musicas: Musica[] = []
//let Playlists: Playlist[] = []
var musicasDisponiveis = [];
var UsuariosExistentes = [];
// 1. Criar uma classe pessoa que possui as propriedades nome e data de
// nascimento.
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, dataDeNascimento) {
        this.setNome(nome);
        this.DataDeNascimento = dataDeNascimento;
    }
    Pessoa.prototype.setNome = function (nome) {
        var continuar = true;
        while (continuar) {
            if (nome.length > 55) {
                console.log("O nome deve ter no máximo 55 caracteres!");
                nome = prompt("Insira um novo nome");
            }
            else {
                this.Nome = nome;
                continuar = false;
            }
        }
    };
    return Pessoa;
}());
// 2. Criar a classe autor que herda de pessoa e possui a propriedade nome
// artístico.
var Autor = /** @class */ (function (_super) {
    __extends(Autor, _super);
    function Autor(nome, dataDeNascimento, nomeArtistico) {
        var _this = _super.call(this, nome, dataDeNascimento) || this;
        _this.NomeArtistico = nomeArtistico;
        return _this;
    }
    return Autor;
}(Pessoa));
// 3. Criar a classe usuário que possui as propriedades usuario, senha e playlists
var Usuario = /** @class */ (function (_super) {
    __extends(Usuario, _super);
    function Usuario(nome, dataDeNascimento, nomeDeUsuario, senha) {
        var _this = _super.call(this, nome, dataDeNascimento) || this;
        _this.PlaylistUsuario = [];
        _this.setNomeDeUsuario(nomeDeUsuario);
        _this.setSenha(senha);
        return _this;
    }
    Usuario.prototype.setNomeDeUsuario = function (nomeDeUsuario) {
        //nomeDeUsuario.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '') 
        var regex2 = /\W|_/;
        var continuar = true;
        while (continuar) {
            if (regex2.test(nomeDeUsuario) == true) {
                console.log("O nome de usuario não pode conter caracteres especiais, apenas letras, números e underline");
                nomeDeUsuario = prompt("Insira o nome de Usuário, (O nome de usuario não pode conter caracteres especiais, apenas letras, números e underline)");
            }
            else {
                this.NomeDeUsuario = nomeDeUsuario;
                console.log("Nome de usuário válido");
                continuar = false;
            }
        }
    };
    Usuario.prototype.setSenha = function (senha) {
        var regex = /[0-9]/;
        var regex2 = /\W|_/;
        var continuar = true;
        while (continuar) {
            if (regex.test(senha) == true) {
                if (regex2.test(senha) == true) {
                    this.Senha = senha;
                    continuar = false;
                }
                else {
                    console.log("A senha deve ter pelo menos um número e um caractere especial");
                    senha = prompt("Insira uma nova senha");
                }
            }
            else {
                console.log("A senha deve ter pelo menos um número e um caractere especial");
                senha = prompt("Insira uma nova senha");
            }
        }
    };
    Usuario.prototype.CriarPlaylist = function () {
        var nomePlaylist = prompt("Insira o nome da Playlist");
        var dataCriacao = prompt("Insira a data de criação da Playlist");
        var playlistNova = new Playlist(nomePlaylist, dataCriacao);
        this.PlaylistUsuario.push(playlistNova);
        console.log("Playlist criada com sucesso");
    };
    return Usuario;
}(Pessoa));
// 4. Criar a classe música que possui as propriedades nome, autor e duração(em
// minutos).
var Musica = /** @class */ (function () {
    function Musica(nome, nomeAutor, duracao) {
        this.Nome = nome;
        this.NomeAutor = nomeAutor;
        this.setDuracao(duracao);
    }
    Musica.prototype.setDuracao = function (duracao) {
        var continuar = true;
        while (continuar) {
            if (duracao > 10) {
                console.log("Uma música não pode ter duração maior que 10 minutos");
                duracao = parseInt(prompt("Insira uma nova duração com tempo menor que 10 minutos"));
            }
            else {
                this.Duracao = duracao;
                continuar = false;
            }
        }
    };
    return Musica;
}());
// 5. Criar a classe playlist que possui as propriedades nome, data de criação e
// músicas e o método adicionar música que deve verificar se a música existe já
// na playlist antes de adicionar e exibir no console se a música foi adicionada ou
// se já existia na playlist.
var Playlist = /** @class */ (function () {
    function Playlist(nome, dataDeCriacao) {
        this.Musicas = [];
        this.Nome = nome;
        this.DataDeCriacao = dataDeCriacao;
    }
    Playlist.prototype.AdicionarMusica = function (musica) {
        for (var index = 0; index < this.Musicas.length; index++) {
            if (musica.Nome == this.Musicas[index].Nome) {
                alert("Esta música ja existe na playlist, escolha outra!");
            }
            else {
                this.Musicas.push(musica);
                console.log("Música adicionada com sucesso");
            }
        }
    };
    return Playlist;
}());
// 6. Fazer as seguintes verificações:
//ok - Uma pessoa não pode ter o nome com mais de 55 letras
//ok- O nome de usuario não pode conter caracteres especiais, apenas letras,
// números e underline
//ok - A senha do usuário deve conter pelo menos um número e um caractere
// especial
//ok - Uma música não pode ter duração maior que 10 minutos
var musica1 = new Musica("Vida Chique", "Veigh FT. Kaash Paige", 3.30);
musicasDisponiveis.push(musica1);
var musica2 = new Musica("Paz e Dim 2", "Argollo", 2.29);
musicasDisponiveis.push(musica2);
var musica3 = new Musica("A Morte do Autotune", "Matuê", 4.14);
musicasDisponiveis.push(musica3);
var musica4 = new Musica("Filha de Jornalista", "MC IG", 3.18);
musicasDisponiveis.push(musica4);
var musica5 = new Musica("Tiguan", "Argollo e T.A", 2.36);
musicasDisponiveis.push(musica5);
function CriarPessoa() {
    var nomePessoa = prompt("Insira aqui o nome da pessoa");
    var dataNascimentoPessoa = prompt("Insira aqui a data de nascimento da pessoa");
    return new Pessoa(nomePessoa, dataNascimentoPessoa);
}
function CriarAutor() {
    var nomeAutor = prompt("Insira aqui o nome do Autor");
    var dataNascimentoAutor = prompt("Insira aqui a data de nascimento do Autor");
    var nomeArtisticoAutor = prompt("Insira aqui o nome Artístico do Autor");
    return new Autor(nomeAutor, dataNascimentoAutor, nomeArtisticoAutor);
}
function CriarUsuario() {
    var nomePessoa = prompt("Insira aqui o nome da pessoa");
    var dataNascimentoUsuario = prompt("Insira aqui a data de nascimento da pessoa");
    var nomeUsuario = prompt("Insira aqui o nome de Usuário");
    var senha = prompt("Insira aqui a senha");
    var novoUser = new Usuario(nomePessoa, dataNascimentoUsuario, nomeUsuario, senha);
    UsuariosExistentes.push(novoUser);
}
function CriarMusica() {
    var nomeMusica = prompt("Insira o nome da música");
    var autorMusica = prompt("Insira o Autor da música");
    var duracaoMusica = parseInt(prompt("Insira a duração em minutos da música"));
    var musicaD = new Musica(nomeMusica, autorMusica, duracaoMusica);
    for (var index = 0; index < musicasDisponiveis.length; index++) {
        if (musicaD.Nome == musicasDisponiveis[index].Nome) {
            alert("Esta música ja existe na na lista de músicas disponíveis, escolha outra!");
        }
        else {
            musicasDisponiveis.push(musicaD);
            console.log("Música adicionada com sucesso na lista de Músicas disponíveis");
            return musicaD;
        }
    }
}
var continuar = true;
while (continuar) {
    var opcao = prompt("Insira uma opcao para continuar!, Para criar uma pessoa(1), Para criar um autor(2), Para criar um Usuário(3), Para Criar uma Música(4), Para criar uma playlist(5), Para mostrar as músicas existentes(6)");
    switch (opcao) {
        case "1":
            CriarPessoa();
            break;
        case "2":
            CriarAutor();
            break;
        case "3":
            CriarUsuario();
            break;
        case "4":
            CriarMusica();
            break;
        case "5":
            var usernome = prompt("Insira o nome do usuário que queria criar a playlist");
            for (var index = 0; index < UsuariosExistentes.length; index++) {
                if (usernome == UsuariosExistentes[index].NomeDeUsuario) {
                    UsuariosExistentes[index].CriarPlaylist();
                }
            }
            break;
        case "6":
            console.log(musicasDisponiveis);
            break;
        default:
            console.log("Opção inválida");
            break;
    }
    var novamente = prompt("Deseja continuar executando? s ou n");
    if (novamente != "s") {
        continuar = false;
    }
}
