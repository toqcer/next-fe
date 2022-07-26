export const firstName = [
  'Georgetta',
  'Laurie',
  'Wilona',
  'Flin',
  'Bertram',
  'Rebe',
  'Torrance',
  'Roseann',
  'Maxim',
  'Perle',
  'Maire',
  'Ricki',
  'Tamqrah',
  'Rand',
  'Edin',
  'Domenic',
  'Lou',
  'Clarissa',
  'Rodie',
  'Paul',
  'Jehanna',
  'Anjela',
  'Addison',
  'Remus',
  'Addi',
  'Idaline',
  'Winnifred',
  'Terrence',
  'Otis',
  'Marshal',
  'Ellerey',
  'Glynnis',
  'Karalee',
  'Adeline',
  'Arnie',
  'Bobbie',
  'Raffarty',
  'Shurwood',
  'Colene',
  'Wini',
  'Xerxes',
  'Corey',
  'Adora',
  'Chrissy',
  'Sonja',
  'Mavis',
  'Tann',
  'Erl',
  'Nat',
  'Aleda',
  'Weber',
  'Raff',
  'Shani',
  'Clarice',
  'Isaac',
  'Pippa',
  'Ruth',
  'Hilde',
  'William',
  'Melisandra',
  'Giorgia',
  'Lorelle',
  'Wilone',
  'Rowena',
  'Alexandrina',
  'Leigha',
  'Renaldo',
  'Ronna',
  'Martyn',
  'Ansley',
  'Loella',
  'Suzette',
  'Ernaline',
  'Roxine',
  'Ilario',
  'Kareem',
  'Jock',
  'Leroy',
  'Marne',
  'Terence',
  'Cori',
  'Cornelius',
  'Colette',
  'Isabel',
  'Donovan',
  'Cecelia',
  'Brigida',
  'Adamo',
  'Hailee',
  'Cristy',
  'Alick',
  'Arlette',
  'Iver',
  'Trixie',
  'Valery',
  'Iseabal',
  'Addia',
  'Royal',
  'Connor',
  'Claudetta',
];

export const lastName = [
  'Mulvaney',
  'Ruste',
  'Driffield',
  'Farres',
  'Simonini',
  'Shakesby',
  'Ellif',
  'Munks',
  'Fisby',
  'Stubbins',
  'Ecclesall',
  'Trubshawe',
  'Kenyon',
  "O'Mullaney",
  'Macken',
  'Francklin',
  'Howselee',
  'Onslow',
  'Kingett',
  'Hallum',
  'Cregeen',
  'Wybourne',
  'Tranckle',
  'Sumsion',
  'Thirkettle',
  'Dowtry',
  'Ripper',
  'Lenham',
  'Poker',
  'Riceards',
  'Stute',
  'Dougliss',
  'Hemphall',
  "O'Henecan",
  'Heinzel',
  'Jencey',
  'Scupham',
  'Isakson',
  'Saldler',
  'Imos',
  'Paula',
  'McCerery',
  'Beresford',
  'Keld',
  'Kinnier',
  'Folonin',
  'Connue',
  'Wellwood',
  'Robertson',
  'Nicely',
  "O'Dyvoie",
  'Bramstom',
  'Manger',
  'Schelle',
  'Marin',
  'Carnow',
  'Jillis',
  'Burnside',
  'Hendrickson',
  'Goldfinch',
  'Durrance',
  'Ashwood',
  'Paolotto',
  'Corkett',
  'Lannon',
  'Manton',
  'Vant',
  'Brezlaw',
  'Altamirano',
  'Willman',
  'Victor',
  'Clynman',
  'Pithcock',
  'Petrakov',
  'Hearley',
  'Elgram',
  'Blare',
  'Presshaugh',
  'Redolfi',
  'Ellph',
  'Hallut',
  'Milmoe',
  'Routledge',
  'Occleshaw',
  'Tiley',
  'Roughsedge',
  'Balasini',
  'Ebsworth',
  'Ahlin',
  'Hubatsch',
  'Carryer',
  'Claiton',
  'Tawse',
  'Ruseworth',
  'Bearcock',
  'Whapham',
  'Nesby',
  'Sonley',
  'McFarlane',
  'Fripps',
];

export const fullName = firstName.map((name, idx) => {
  return `${name} ${lastName[idx]}`;
});