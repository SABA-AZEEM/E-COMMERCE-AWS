import bcrypt from 'bcryptjs';

const users=[
    {
        name:'Admin User',
        email:'admin@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name:'Saba Azeem',
        email:'saba@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
    },
    {
        name:'Ameer Ali',
        email:'ali@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
    },
];

export default users;