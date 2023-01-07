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

    AdicionarMusica(musica: Musica) {
        for (let index = 0; index < this.Musicas.length; index++) {
            if (musica.Nome == this.Musicas[index].Nome) {
                alert("Esta música ja existe na playlist, escolha outra!")
            } else {
                this.Musicas.push(musica)
                console.log("Música adicionada com sucesso")
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

function CriarUsuario(): void {
    let nomePessoa = prompt("Insira aqui o nome da pessoa")
    let dataNascimentoUsuario = prompt("Insira aqui a data de nascimento da pessoa")
    let nomeUsuario = prompt("Insira aqui o nome de Usuário")
    let senha = prompt("Insira aqui a senha")
    let novoUser = new Usuario(nomePessoa, dataNascimentoUsuario, nomeUsuario, senha)
    UsuariosExistentes.push(novoUser)
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

let continuar = true
while (continuar) {
    let opcao = prompt("Insira uma opcao para continuar!, Para criar uma pessoa(1), Para criar um autor(2), Para criar um Usuário(3), Para Criar uma Música(4), Para criar uma playlist(5), Para mostrar as músicas existentes(6)")
    switch (opcao) {
        case "1":
            CriarPessoa()
            break;
        case "2":
            CriarAutor()
            break;
        case "3":
            CriarUsuario()
            break;
        case "4":
            CriarMusica()
            break;
        case "5":
            let usernome = prompt("Insira o nome do usuário que queria criar a playlist")
            for (let index = 0; index < UsuariosExistentes.length; index++) {
                if(usernome == UsuariosExistentes[index].NomeDeUsuario){
                    UsuariosExistentes[index].CriarPlaylist()
                }
            }
            break;
        case "6":
            console.log(musicasDisponiveis)
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