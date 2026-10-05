export interface Member {
  id: number
  name: string
  instrument: string
  image: string
}

export const members: Member[] = [
  {
    id: 1,
    name: 'Gabriela Almeida',
    instrument: 'Violino',
    image: 'https://images.unsplash.com/photo-1725215956940-91f616b95443?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Mario Souza',
    instrument: 'Viola',
    image: 'https://novabrasilfm.com.br/app/uploads/2024/11/paulinho-viola.webp',
  },
  {
    id: 3,
    name: 'Lucas Oliveira',
    instrument: 'Violoncelo',
    image: 'https://plus.unsplash.com/premium_photo-1703617664488-fb903c2bc7a9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Ana Beatriz',
    instrument: 'Flauta',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9jzJIkQPzCq8jB6dQ6KDkJK4UKGcZZz6c4WbRDUK8pvhpRnnX15SRYyz&s=10',
  },
  {
    id: 5,
    name: 'Rafael Martins',
    instrument: 'Trompete',
    image: 'https://souguri.art.br/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDhvIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cf11ba5e4bd349bef8a2335ffc1347cc57f605df/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDSUFOcEFsZ0MiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e8d74a18ecfed7ece005553123609cdb8e6273ce/Louis_Armstrong,_by_Harry_Warnecke_and_Gus_Schoenbaechler,_1947.jpg',
  },
  {
    id: 6,
    name: 'Carolina Lima',
    instrument: 'Piano',
    image: 'https://cdn.pixabay.com/photo/2022/01/07/08/55/piano-6921439_1280.jpg',
  },
]