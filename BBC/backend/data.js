import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Makmak',
      email: 'kingmckevin@gmail.com',
      password: bcrypt.hashSync('Makmak.11'),
      isAdmin: true,
    },
    {
      name: 'Admin',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('Admin123'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Air Jordan 1 Low',
      slug: 'air-jordan1-low',
      category: 'shoes',
      image: '/images/airjordan1low.jpg',
      price: 5000,
      countInStock: 5,
      brand: 'Nike',
      rating: 5,
      numReviews: 10,
      description: 'High Quality Jordans',
    },
    {
      // _id: '2',
      name: 'Air Jordan 1 Mid',
      slug: 'air-jordan1-mid',
      category: 'shoes',
      image: '/images/airjordan1mid.jpg',
      price: 7000,
      countInStock: 5,
      brand: 'Nike',
      rating: 3.5,
      numReviews: 10,
      description: 'High Quality Jordans',
    },
    {
      // _id: '3',
      name: 'Air Jordan 1 High',
      slug: 'air-jordan1-high',
      category: 'shoes',
      image: '/images/airjordan1high.jpg',
      price: 10000,
      countInStock: 0,
      brand: 'Nike',
      rating: 4,
      numReviews: 10,
      description: 'High Quality Jordans',
    },
  ],
};
export default data;
