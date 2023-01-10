//let Musicas: Musica[] = []
//let Playlists: Playlist[] = []
let musicasDisponiveis: Musica[] = []
let UsuariosExistentes: Usuario[] = []

// 1. Criar uma classe pessoa que possui as propriedades nome e data de
// nascimento.

class Pessoa {
    Nome: string
    DataDeNascimento: string
    constructor(nome: string, dataDeNascimento: string) {
        this.setNome(nome)
        this.DataDeNascimento = dataDeNascimento
    }

    setNome(nome: string) {
        let continuar = true
        while (continuar) {
            if (nome.length > 55) {
                console.log("O nome deve ter no máximo 55 caracteres!")
                nome = prompt("Insira um novo nome")
            } else {
                this.Nome = nome
                continuar = false
            }
        }
    }
}

// 2. Criar a classe autor que herda de pessoa e possui a propriedade nome
// artístico.

class Autor extends Pessoa {
    NomeArtistico: string
    constructor(nome: string, dataDeNascimento: string, nomeArtistico: string) {
        super(nome, dataDeNascimento)
        this.NomeArtistico = nomeArtistico
    }
}

// 3. Criar a classe usuário que possui as propriedades usuario, senha e playlists

class Usuario extends Pessoa {
    NomeDeUsuario: string
    Senha: string
    PlaylistUsuario: Playlist[] = []
    constructor(nome: string, dataDeNascimento: string, nomeDeUsuario: string, senha: string) {
        super(nome, dataDeNascimento)
        this.setNomeDeUsuario(nomeDeUsuario)
        this.setSenha(senha)
    }

    setNomeDeUsuario(nomeDeUsuario: string) {
        //nomeDeUsuario.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '') 
        let regex2 = /\W|_/
        let continuar = true
        while (continuar) {
            if (regex2.test(nomeDeUsuario) == true) {
                console.log("O nome de usuario não pode conter caracteres especiais, apenas letras, números e underline")
                nomeDeUsuario = prompt("Insira o nome de Usuário, (O nome de usuario não pode conter caracteres especiais, apenas letras, números e underline)")
            } else {
                this.NomeDeUsuario = nomeDeUsuario
                console.log("Nome de usuário válido")
                continuar = false
            }
        }
    }

    setSenha(senha: string) {
        let regex = /[0-9]/
        let regex2 = /\W|_/
        let continuar = true
        while (continuar) {
            if (regex.test(senha) == true) {
                if (regex2.test(senha) == true) {
                    this.Senha = senha
                    continuar = false
                } else {
                    console.log("A senha deve ter pelo menos um número e um caractere especial")
                    senha = prompt("Insira uma nova senha")
                }
            } else {
                console.log("A senha deve ter pelo menos um número e um caractere especial")
                senha = prompt("Insira uma nova senha")
            }
        }
    }

    CriarPlaylist(): void {
        let nomePlaylist = prompt("Insira o nome da Playlist")
        let dataCriacao = prompt("Insira a data de criação da Playlist")
        let playlistNova = new Playlist(nomePlaylist, dataCriacao)

        this.PlaylistUsuario.push(playlistNova)
        console.log("Playlist criada com sucesso")

    }
}

// 4. Criar a classe música que possui as propriedades nome, autor e duração(em
// minutos).

class Musica {
    Nome: string
    NomeAutor: string
    Duracao: number
    constructor(nome: string, nomeAutor: string, duracao: number) {
        this.Nome = nome
        this.NomeAutor = nomeAutor
        this.setDuracao(duracao)
    }

    setDuracao(duracao: number) {
        let continuar = true
        while (continuar) {
            if (duracao > 10) {
                console.log("Uma música não pode ter duração maior que 10 minutos")
                duracao = parseInt(prompt("Insira uma nova duração com tempo menor que 10 minutos"))
            } else {
                this.Duracao = duracao
                continuar = false
            }
        }
    }
}

// 5. Criar a classe playlist que possui as propriedades nome, data de criação e
// músicas e o método adicionar música que deve verificar se a música existe já
// na playlist antes de adicionar e exibir no console se a música foi adicionada ou
// se já existia na playlist.

class Playlist {
    Nome: string
    DataDeCriacao: string
    Musicas: Musica[] = []
    constructor(nome: string, dataDeCriacao: string) {
        this.Nome = nome
        this.DataDeCriacao = dataDeCriacao
    }

    AdicionarMusica(nomeMusica: string, musicasDisponiveis: Musica[] = []) {
        console.log(musicasDisponiveis)
        for (let index = 0; index < musicasDisponiveis.length; index++) {
            if (nomeMusica == this.Musicas[index].Nome) {
                alert("Esta música ja existe na playlist, escolha outra!")
            } else if (nomeMusica == musicasDisponiveis[index].Nome) {
                this.Musicas.push(musicasDisponiveis[index])
                console.log("Música adicionada na playlist com sucesso")
            }
        }
    }
}

// 6. Fazer as seguintes verificações:
//ok - Uma pessoa não pode ter o nome com mais de 55 letras
//ok- O nome de usuario não pode conter caracteres especiais, apenas letras,
// números e underline
//ok - A senha do usuário deve conter pelo menos um número e um caractere
// especial
//ok - Uma música não pode ter duração maior que 10 minutos

let musica1 = new Musica("Vida Chique", "Veigh FT. Kaash Paige", 3.30)
musicasDisponiveis.push(musica1)
let musica2 = new Musica("Paz e Dim 2", "Argollo", 2.29)
musicasDisponiveis.push(musica2)
let musica3 = new Musica("A Morte do Autotune", "Matuê", 4.14)
musicasDisponiveis.push(musica3)
let musica4 = new Musica("Filha de Jornalista", "MC IG", 3.18)
musicasDisponiveis.push(musica4)
let musica5 = new Musica("Tiguan", "Argollo e T.A", 2.36)
musicasDisponiveis.push(musica5)

function CriarPessoa(): Pessoa {
    let nomePessoa = prompt("Insira aqui o nome da pessoa")
    let dataNascimentoPessoa = prompt("Insira aqui a data de nascimento da pessoa")
    return new Pessoa(nomePessoa, dataNascimentoPessoa)
}

function CriarAutor(): Autor {
    let nomeAutor = prompt("Insira aqui o nome do Autor")
    let dataNascimentoAutor = prompt("Insira aqui a data de nascimento do Autor")
    let nomeArtisticoAutor = prompt("Insira aqui o nome Artístico do Autor")
    return new Autor(nomeAutor, dataNascimentoAutor, nomeArtisticoAutor)
}

function CriarUsuario(): Usuario {
    let nomePessoa = prompt("Insira aqui o nome da pessoa")
    let dataNascimentoUsuario = prompt("Insira aqui a data de nascimento da pessoa")
    let nomeUsuario = prompt("Insira aqui o nome de Usuário")
    let senha = prompt("Insira aqui a senha")
    let novoUser = new Usuario(nomePessoa, dataNascimentoUsuario, nomeUsuario, senha)
    let opcao2 = prompt("Deseja criar uma playlist? s ou n")
    if (opcao2 == "s") {
        novoUser.CriarPlaylist()
    }
    let opcao3 = prompt("Deseja adicionar uma música na playlist? s ou n")
    if (opcao3 == "s") {
        let nomeMusica2 = prompt("Insira o nome da musica")
        novoUser.PlaylistUsuario[0].AdicionarMusica(nomeMusica2)
    }
    UsuariosExistentes.push(novoUser)
    return novoUser
}

function CriarMusica(): Musica {
    let nomeMusica = prompt("Insira o nome da música")
    let autorMusica = prompt("Insira o Autor da música")
    let duracaoMusica = parseInt(prompt("Insira a duração em minutos da música"))
    let musicaD = new Musica(nomeMusica, autorMusica, duracaoMusica)

    for (let index = 0; index < musicasDisponiveis.length; index++) {
        if (musicaD.Nome == musicasDisponiveis[index].Nome) {
            alert("Esta música ja existe na na lista de músicas disponíveis, escolha outra!")
        } else {
            musicasDisponiveis.push(musicaD)
            console.log("Música adicionada com sucesso na lista de Músicas disponíveis")
            return musicaD
        }
    }
}




function RetornarUsuarios() {
    return fetch('https://apigenerator.dronahq.com/api/5tL7WcmB/usuarios')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

async function GetData(id: string) {
    const response = await fetch("https://apigenerator.dronahq.com/api/5tL7WcmB/usuarios/" + id, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}

async function PostData() {
    let data = CriarUsuario()
    const response = await fetch("https://apigenerator.dronahq.com/api/5tL7WcmB/usuarios", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

async function PutData(id: string) {
    let data2 = CriarUsuario()
    const response = await fetch("https://apigenerator.dronahq.com/api/5tL7WcmB/usuarios/" + id, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data2)
    });
    return response.json();
}

async function DeleteData(id: string) {
    const response = await fetch("https://apigenerator.dronahq.com/api/5tL7WcmB/usuarios/" + id, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    });
    return response.json();
}

let continuar = true
while (continuar) {
    let opcao = prompt("Insira uma opcao para continuar!, Para criar uma pessoa(1), Para criar um autor(2), Para criar um Usuário(3), Para Criar uma Música(4), Para criar uma playlist(5), Para mostrar as músicas existentes(6), Para retornar todos Usuários(7), Para retornar um usuário por ID(8), Para alteral a informação de um usuário(9), Para deletar um usuário(10)")
    switch (opcao) {
        case "1":
            CriarPessoa()
            break;
        case "2":
            CriarAutor()
            break;
        case "3":
            PostData()
            break;
        case "4":
            CriarMusica()
            break;
        case "5":
            let usernome = prompt("Insira o nome do usuário que queira criar a playlist")
            for (let index = 0; index < UsuariosExistentes.length; index++) {
                if (usernome == UsuariosExistentes[index].NomeDeUsuario) {
                    UsuariosExistentes[index].CriarPlaylist()
                }
            }
            break;
        case "6":
            console.log(musicasDisponiveis)
            break;
        case "7":
            RetornarUsuarios()
            break;
        case "8":
            let idUsuario = prompt("Insira o ID do usuário que queira solicitar")
            GetData(idUsuario)
            break;
        case "9":
            let idAlterarUsuario = prompt("Insira o ID do usuário que queira solicitar")
            PutData(idAlterarUsuario)
            break;
        case "10":
            let idDeletarUsuario = prompt("Insira o ID do usuário que queira solicitar")
            DeleteData(idDeletarUsuario)
            break;
        default:
            console.log("Opção inválida")
            break;
    }
    let novamente = prompt("Deseja continuar executando? s ou n")
    if (novamente != "s") {
        continuar = false
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