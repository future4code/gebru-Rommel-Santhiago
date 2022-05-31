type User = {
    id: number,
    name: string,
    email: string,
    phone: number,
    website: string
}[]

type Post = {
    userId: number
    id: number,
    title: string,
    body: string,
}[]

export const users: User = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@labenu.com",
        "phone": 558888888801,
        "website": "hildegard.org",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "email": "ervin.howell@labenu.com",
        "phone": 558888888802,
        "website": "ervinhowell.com",
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "email": "clementine.bauch@labenu.com",
        "phone": 558888888803,
        "website": "clementinebauch.org",
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "email": "patricia.lebsack@labenu.com",
        "phone": 558888888804,
        "website": "patricialebsack.net",
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "email": "chelsey.dietrich@labenu.com",
        "phone": 558888888805,
        "website": "chelseydietrich.com",
    }
]

// Acho melhor criar o array de posts fora do array de usuarios pois fica mais facil dar manutenção e manusea-lo
export const posts: Post = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 2,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 3,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 5,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }
]