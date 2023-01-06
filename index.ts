let Musicas: Musica[] = []
let Playlists: Playlist[] = []

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
    Playlist: Playlist
    constructor(nome: string, dataDeNascimento: string, nomeDeUsuario: string, senha: string, playlist: Playlist) {
        super(nome, dataDeNascimento)
        this.setNomeDeUsuario(nomeDeUsuario)
        this.setSenha(senha)
        this.Playlist = playlist
    }

    setNomeDeUsuario(nomeDeUsuario: string) {
        nomeDeUsuario = prompt("Insira o nome de Usuário, (O nome de usuario não pode conter caracteres especiais, apenas letras, números e underline)")
        nomeDeUsuario.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
        this.NomeDeUsuario = nomeDeUsuario
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

    setDuracao(duracao:number){
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
    Musicas: Musica
    constructor(nome: string, dataDeCriacao: string, musicas: Musica) {
        this.Nome = nome
        this.DataDeCriacao = dataDeCriacao
        this.Musicas = musicas
    }

    AdicionarMusica(musica: Musica) {
        for (let index = 0; index < Musicas.length; index++) {
            if (musica.Nome == Musicas[index].Nome) {
                alert("Esta música ja existe na playlist, escolha outra!")
            } else {
                Musicas.push(musica)
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
// - Uma música não pode ter duração maior que 10 minutos