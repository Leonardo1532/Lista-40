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
var Musicas = [];
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
var Usuario = /** @class */ (function () {
    function Usuario(nomeDeUsuario, senha, playlist) {
        this.setNomeDeUsuario(nomeDeUsuario);
        this.setSenha(senha);
        this.Playlist = playlist;
    }
    Usuario.prototype.setNomeDeUsuario = function (nomeDeUsuario) {
        nomeDeUsuario = prompt("Insira o nome de Usuário, (O nome de usuario não pode conter caracteres especiais, apenas letras, números e underline)");
        nomeDeUsuario.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
        this.NomeDeUsuario = nomeDeUsuario;
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
    return Usuario;
}());
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
    function Playlist(nome, dataDeCriacao, musicas) {
        this.Nome = nome;
        this.DataDeCriacao = dataDeCriacao;
        this.Musicas = musicas;
    }
    Playlist.prototype.AdicionarMusica = function (musica) {
        for (var index = 0; index < Musicas.length; index++) {
            if (musica.Nome == Musicas[index].Nome) {
                alert("Esta música ja existe na playlist, escolha outra!");
            }
            else {
                Musicas.push(musica);
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
// - Uma música não pode ter duração maior que 10 minutos
