type Users = {
    name: string,
    email: string,
    role: string
}[]

enum ROLE {
    ADMIN= 'admin',
    USER = 'user',
}

const retornaAdmins = (users: Users) => {
    const pessoas = []
    let user: {
        name: string,
        email: string,
        role: string
    }

    for(user of users){
        pessoas.push(user)
    }

    const filtrarUsers = pessoas.filter(pessoa => {
        if(pessoa.role == 'admin'){
            return pessoa.email
        }
    })

    return filtrarUsers
}

export default retornaAdmins