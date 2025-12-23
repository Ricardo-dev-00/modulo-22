export interface Destino {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
  detalhes: string;
  curiosidades: string[];
  locais: string[];
  restaurantes: string[];
}

export const destinos: Destino[] = [
  {
    id: '1',
    nome: 'Paris, França',
    imagem: 'https://img.freepik.com/fotos-gratis/bela-foto-ampla-da-torre-eiffel-em-paris-rodeada-de-agua-com-navios-sob-o-ceu-colorido_181624-5118.jpg?semt=ais_hybrid&w=740&q=80',
    descricao: 'A cidade do amor, com a Torre Eiffel e museus incríveis.',
    detalhes: 'Paris é conhecida por sua arquitetura histórica, arte e gastronomia. Visite a Torre Eiffel, o Louvre e caminhe pelas margens do Sena.',
    curiosidades: [
      'Paris tem mais de 2.000 anos de história.',
      'A Torre Eiffel foi construída em 1889 para a Exposição Universal.',
      'Paris é chamada de "Cidade Luz" por ter sido uma das primeiras cidades a ter iluminação pública.'
    ],
    locais: [
      'Torre Eiffel',
      'Museu do Louvre',
      'Arco do Triunfo',
      'Catedral de Notre-Dame',
      'Campos Elísios'
    ],
    restaurantes: [
      'Le Comptoir du Relais (gastronomia francesa)',
      'Pierre Gagnaire (alta cozinha)',
      'Chez Gladines (basco-francês)',
      'L\'As du Fallafel (comida judaica)'
    ]
  },
  {
    id: '2',
    nome: 'Tóquio, Japão',
    imagem: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCVDMyVCM3F1aW98ZW58MHx8MHx8fDA%3D',
    descricao: 'Uma metrópole moderna com tradições antigas.',
    detalhes: 'Tóquio oferece uma mistura única de tecnologia avançada e templos tradicionais. Explore Shibuya, o Palácio Imperial e desfrute de sushi autêntico.',
    curiosidades: [
      'Tóquio é a maior metrópole do mundo com mais de 13 milhões de habitantes.',
      'A cidade abriga o maior número de restaurantes Michelin do mundo.',
      'Tóquio tem mais de 100 estações de trem subterrâneo.'
    ],
    locais: [
      'Shibuya Crossing',
      'Palácio Imperial',
      'Templo Senso-ji',
      'Torre de Tóquio',
      'Parque Ueno'
    ],
    restaurantes: [
      'Sushi Zanmai (sushi)',
      'Niku Kappo (carne wagyu)',
      'Tsukiji Outer Market (frutos do mar)',
      'Robot Restaurant (experiência única)'
    ]
  },
  {
    id: '3',
    nome: 'Rio de Janeiro, Brasil',
    imagem: 'https://media.istockphoto.com/id/608540602/pt/foto/aerial-panorama-of-botafogo-bay-rio-de-janeiro.jpg?s=612x612&w=0&k=20&c=-ABPKnNReviA_zMhTN3-m1_4RjSqBVaTtbHPI4kUBpc=',
    descricao: 'Praias deslumbrantes e o Cristo Redentor.',
    detalhes: 'O Rio de Janeiro é famoso por suas praias como Copacabana e Ipanema, o Pão de Açúcar e o Cristo Redentor. Aproveite o Carnaval e a cultura vibrante.',
    curiosidades: [
      'O Rio é a única cidade do mundo cortada por uma floresta tropical.',
      'O Cristo Redentor é uma das Sete Maravilhas do Mundo Moderno.',
      'O Carnaval do Rio é o maior do mundo, com mais de 2 milhões de foliões.'
    ],
    locais: [
      'Cristo Redentor',
      'Pão de Açúcar',
      'Praia de Copacabana',
      'Praia de Ipanema',
      'Jardim Botânico'
    ],
    restaurantes: [
      'Aprazível (brasileira contemporânea)',
      'Bar do Mineiro (comida mineira)',
      'CT Boucherie (steakhouse)',
      'Quadrifoglio (italiana)'
    ]
  },
  {
    id: '4',
    nome: 'Nova York, EUA',
    imagem: 'https://thumbs.dreamstime.com/b/est%C3%A1tua-de-liberdade-e-de-skyline-de-new-york-city-16070453.jpg',
    descricao: 'A cidade que nunca dorme, com arranha-céus icônicos.',
    detalhes: 'Nova York é o centro financeiro e cultural do mundo. Veja a Estátua da Liberdade, Times Square e museus como o MoMA.',
    curiosidades: [
      'Nova York tem 5 distritos: Manhattan, Brooklyn, Queens, Bronx e Staten Island.',
      'A Estátua da Liberdade foi um presente da França em 1886.',
      'Times Square recebe mais de 50 milhões de visitantes por ano.'
    ],
    locais: [
      'Estátua da Liberdade',
      'Times Square',
      'Central Park',
      'Empire State Building',
      'Museu Metropolitano de Arte'
    ],
    restaurantes: [
      'Le Bernardin (francesa, 3 estrelas Michelin)',
      'Katz\'s Delicatessen (sanduíches)',
      'Joe\'s Pizza (pizza nova-iorquina)',
      'Per Se (alta cozinha americana)'
    ]
  },
  {
    id: '5',
    nome: 'Machu Picchu, Peru',
    imagem: 'https://aventurasnahistoria.com.br/wp-content/uploads/feedsync/macchu2.jpg',
    descricao: 'Cidade antiga dos Incas nas montanhas dos Andes.',
    detalhes: 'Machu Picchu é uma cidadela inca localizada a 2.430 metros de altitude. Explore ruínas antigas, trilhas e vistas panorâmicas incríveis.',
    curiosidades: [
      'Machu Picchu foi construída no século XV pelos Incas.',
      'Foi "descoberta" pelo mundo em 1911 pelo explorador Hiram Bingham.',
      'É considerada uma das Sete Maravilhas do Mundo Moderno.'
    ],
    locais: [
      'Cidadela de Machu Picchu',
      'Templo do Sol',
      'Templo da Lua',
      'Trilha Inca',
      'Vale Sagrado dos Incas'
    ],
    restaurantes: [
      'Tree House Restaurant (cusine peruana)',
      'Indio Feliz (peruana contemporânea)',
      'Green Point (orgânica e saudável)',
      'Quinoa (vegetariana)'
    ]
  },
  {
    id: '6',
    nome: 'Santorini, Grécia',
    imagem: 'https://media.istockphoto.com/id/166471469/pt/foto/arquitetura-de-oia-cidade-em-santorini.jpg?s=612x612&w=0&k=20&c=LZJ4LbflIvMLPQsmts8zq0KhIjQHYLE_7W0iViNPBE0=',
    descricao: 'Ilhas vulcânicas com casas brancas e praias de areia negra.',
    detalhes: 'Santorini é famosa por suas casas caiadas de branco, igrejas com cúpulas azuis e pores do sol espetaculares. Relaxe nas praias e prove vinhos locais.',
    curiosidades: [
      'Santorini foi formada por uma erupção vulcânica há 3.600 anos.',
      'As casas brancas refletem a luz do sol para manter o interior fresco.',
      'É um dos destinos mais românticos do mundo.'
    ],
    locais: [
      'Oia (para pores do sol)',
      'Fira (capital da ilha)',
      'Praia Vermelha',
      'Akrotiri (ruínas antigas)',
      'Museu de Pré-história de Thera'
    ],
    restaurantes: [
      'Selene (grega contemporânea)',
      'Argo (mediterrânea)',
      'Mama\'s House (grega tradicional)',
      'Metaxi Mas (vinho e culinária local)'
    ]
  },
  {
    id: '7',
    nome: 'Dubai, Emirados Árabes Unidos',
    imagem: 'https://media.istockphoto.com/id/467829216/pt/foto/dubai-marina.jpg?s=612x612&w=0&k=20&c=rMSi5l4MtA1Ew_L-aGK04sVrcWSsI0b2IFs-NeB3QKo=',
    descricao: 'Cidade futurista com arranha-céus e luxo extremo.',
    detalhes: 'Dubai impressiona com o Burj Khalifa, shopping centers enormes e hotéis de luxo. Desfrute de desertos, compras e aventuras aquáticas.',
    curiosidades: [
      'O Burj Khalifa é o prédio mais alto do mundo, com 828 metros.',
      'Dubai tem mais de 70 shoppings centers.',
      'A cidade tem palmeiras artificiais e ilhas em forma de mapa-múndi.'
    ],
    locais: [
      'Burj Khalifa',
      'Dubai Mall',
      'Palm Jumeirah',
      'Dubai Fountain',
      'Deserto de Dubai'
    ],
    restaurantes: [
      'At.mosphere (no Burj Khalifa, alta cozinha)',
      'Al Hadheerah (árabe tradicional)',
      'Nobu (japonês contemporâneo)',
      'Pierchic! (frutos do mar)'
    ]
  },
  {
    id: '8',
    nome: 'Bali, Indonésia',
    imagem: 'https://www.shutterstock.com/image-photo/ulun-danu-temple-bratan-lake-600nw-2601531619.jpg',
    descricao: 'Ilha paradisíaca com templos, vulcões e surf.',
    detalhes: 'Bali oferece praias deslumbrantes, arrozais em terraços, templos hindus e uma cena de surf vibrante. Perfeita para relaxamento e aventura.',
    curiosidades: [
      'Bali é conhecida como "Ilha dos Deuses" devido aos milhares de templos.',
      'Tem mais de 20.000 templos hindus.',
      'É um paraíso para surfistas com ondas consistentes.'
    ],
    locais: [
      'Ubud (centro cultural)',
      'Praia de Kuta',
      'Templo Tanah Lot',
      'Monte Batur',
      'Arrozais de Tegallalang'
    ],
    restaurantes: [
      'Bebek Tepi Sawah (frango betutu)',
      'Locavore (orgânica e saudável)',
      'Sardine (frutos do mar)',
      'Mozaic (mediterrânea)'
    ]
  },
  {
    id: '9',
    nome: 'Toronto, Canadá',
    imagem: 'https://panoramadeviagem.com.br/wp-content/uploads/2019/11/locais-instagramaveis-toronto.jpg',
    descricao: 'Cidade multicultural com torres gêmeas icônicas.',
    detalhes: 'Toronto é uma metrópole diversificada com a CN Tower, museus de classe mundial e bairros vibrantes. Explore parques, lagos e culinária internacional.',
    curiosidades: [
      'Toronto é a maior cidade do Canadá e a quarta maior da América do Norte.',
      'É conhecida por sua diversidade cultural, com mais de 200 etnias.',
      'A CN Tower foi a estrutura mais alta do mundo de 1975 a 2007.'
    ],
    locais: [
      'CN Tower',
      'Toronto Islands',
      'Distillery District',
      'Royal Ontario Museum',
      'High Park'
    ],
    restaurantes: [
      'Canoe (canadense contemporânea)',
      'Richmond Station (alta cozinha)',
      'St. Lawrence Market (mercado com comidas variadas)',
      'Kensington Market (comidas étnicas)'
    ]
  }
];