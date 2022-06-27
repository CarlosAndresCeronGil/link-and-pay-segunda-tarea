
const USERS_REPO = {
    users: [
        {
            name: 'andres',
            email: 'andres@email.com',
            password: '123456',
        },
        {
            name: 'maria',
            email: 'maria@email.com',
            password: '123456',
        },
    ]
}

const Login = (email: string, password: string) => {
    const user = USERS_REPO.users.find(user => user.email === email && user.password === password)
    if (user) {
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW5kcmVzIiwiZW1haWwiOiJhbmRyZXNAZW1haWwuY29tIiwiaWF0IjoxNTE2MjM5MDIyfQ.YG8zRQFhVqxk6D1aRmqaHgC25tAqkOEG6Tys3e04LwQ'
    }
}

export default Login;