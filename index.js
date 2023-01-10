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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    Playlist.prototype.AdicionarMusica = function (nomeMusica, musicasDisponiveis) {
        if (musicasDisponiveis === void 0) { musicasDisponiveis = []; }
        console.log(musicasDisponiveis);
        for (var index = 0; index < musicasDisponiveis.length; index++) {
            if (nomeMusica == this.Musicas[index].Nome) {
                alert("Esta música ja existe na playlist, escolha outra!");
            }
            else if (nomeMusica == musicasDisponiveis[index].Nome) {
                this.Musicas.push(musicasDisponiveis[index]);
                console.log("Música adicionada na playlist com sucesso");
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
    var opcao2 = prompt("Deseja criar uma playlist? s ou n");
    if (opcao2 == "s") {
        novoUser.CriarPlaylist();
    }
    var opcao3 = prompt("Deseja adicionar uma música na playlist? s ou n");
    if (opcao3 == "s") {
        var nomeMusica2 = prompt("Insira o nome da musica");
        novoUser.PlaylistUsuario[0].AdicionarMusica(nomeMusica2);
    }
    UsuariosExistentes.push(novoUser);
    return novoUser;
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
function RetornarUsuarios() {
    return fetch('https://apigenerator.dronahq.com/api/5tL7WcmB/usuarios')
        .then(function (response) { return response.json(); })
        .then(function (data) { return console.log(data); });
}
function GetData(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/5tL7WcmB/usuarios/" + id, {
                        method: 'GET',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer'
                    })
                        .then(function (response) { return response.json(); })
                        .then(function (data) { return console.log(data); })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function PostData() {
    return __awaiter(this, void 0, void 0, function () {
        var data, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = CriarUsuario();
                    return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/5tL7WcmB/usuarios", {
                            method: 'POST',
                            mode: 'cors',
                            cache: 'no-cache',
                            credentials: 'same-origin',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            redirect: 'follow',
                            referrerPolicy: 'no-referrer',
                            body: JSON.stringify(data)
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function PutData(id) {
    return __awaiter(this, void 0, void 0, function () {
        var data2, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data2 = CriarUsuario();
                    return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/5tL7WcmB/usuarios/" + id, {
                            method: 'PUT',
                            mode: 'cors',
                            cache: 'no-cache',
                            credentials: 'same-origin',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            redirect: 'follow',
                            referrerPolicy: 'no-referrer',
                            body: JSON.stringify(data2)
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function DeleteData(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://apigenerator.dronahq.com/api/5tL7WcmB/usuarios/" + id, {
                        method: 'DELETE',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer'
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
var continuar = true;
while (continuar) {
    var opcao = prompt("Insira uma opcao para continuar!, Para criar uma pessoa(1), Para criar um autor(2), Para criar um Usuário(3), Para Criar uma Música(4), Para criar uma playlist(5), Para mostrar as músicas existentes(6), Para retornar todos Usuários(7), Para retornar um usuário por ID(8), Para alteral a informação de um usuário(9), Para deletar um usuário(10)");
    switch (opcao) {
        case "1":
            CriarPessoa();
            break;
        case "2":
            CriarAutor();
            break;
        case "3":
            PostData();
            break;
        case "4":
            CriarMusica();
            break;
        case "5":
            var usernome = prompt("Insira o nome do usuário que queira criar a playlist");
            for (var index = 0; index < UsuariosExistentes.length; index++) {
                if (usernome == UsuariosExistentes[index].NomeDeUsuario) {
                    UsuariosExistentes[index].CriarPlaylist();
                }
            }
            break;
        case "6":
            console.log(musicasDisponiveis);
            break;
        case "7":
            RetornarUsuarios();
            break;
        case "8":
            var idUsuario = prompt("Insira o ID do usuário que queira solicitar");
            GetData(idUsuario);
            break;
        case "9":
            var idAlterarUsuario = prompt("Insira o ID do usuário que queira solicitar");
            PutData(idAlterarUsuario);
            break;
        case "10":
            var idDeletarUsuario = prompt("Insira o ID do usuário que queira solicitar");
            DeleteData(idDeletarUsuario);
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
// 1. Com base no exercício anterior implemente as APIs: GET, GET by ID, POST,
// PUT e DELETE usando typescript, consumindo a API criada no dronahq
// (url:"https://apigenerator.dronahq.com/api/5tL7WcmB/usuarios")
// 2. Crie uma função que retorne a lista de todos os usuários;
// 3. Crie uma função que recebe como parâmetro o id de um usuário e retorna
// suas informações
// 4. Crie uma função para adicionar um usuário e solicite essas informações ao
// usuário;
// 5. Crie uma função para alterar o nome de um usuário, essa função deve receber
// como parâmetro o id do usuário e o objeto desse usuário com o valor alterado;
// 6. Crie uma função para excluir um usuário, essa função deve solicitar ao usuário
// o id do usuário que deseja excluir;
// 7. Organize a execução do código dando a opção para o usuário do que ele
// deseja fazer e solicitando as informações necessárias.
