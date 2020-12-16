import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Irtiza',
    email: 'irtiza@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Ishad User',
    email: 'ishad@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
]

export default users
