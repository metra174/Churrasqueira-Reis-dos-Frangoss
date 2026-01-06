
import { MenuCategory } from './types';

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'entradas_frangos',
    title: '🍗 Entradas & Frangos',
    description: 'O sabor autêntico da brasa, temperado com a nossa tradição real.',
    icon: 'fa-fire',
    items: [
      { name: 'Frango à Passarinho', price: '3.500 Kz', numericPrice: 3500 },
      { name: 'Asinha BBQ', price: '5.500 Kz', numericPrice: 5500 },
      { name: 'Asinha Sweet Chilli', price: '5.500 Kz', numericPrice: 5500 },
      { name: 'Tiras de Frango', price: '6.500 Kz', numericPrice: 6500 },
      { name: 'Meio Frango no Churrasco', price: '6.500 Kz', numericPrice: 6500 },
      { name: 'Frango Inteiro no Churrasco', price: '12.000 Kz', numericPrice: 12000, popular: true },
    ]
  },
  {
    id: 'compostos',
    title: '⭐ Pratos Compostos',
    description: 'Nossas estrelas. Refeições completas e generosas para os reis da mesa.',
    icon: 'fa-star',
    items: [
      { name: 'Frango Composto', price: '10.000 Kz', numericPrice: 10000, description: 'Meio frango, batata frita, arroz e feijão.', popular: true },
      { name: 'Bitoque de Frango', price: '9.500 Kz', numericPrice: 9500, description: 'Bife de frango, ovo, batata frita e arroz de cenoura.' },
      { name: 'Bitoque', price: '13.500 Kz', numericPrice: 13500, description: 'Bife da rabadilha, arroz, ovo, batata frita e salada.' },
      { name: 'Costela / Entrecosto', price: '6.500 Kz', numericPrice: 6500 },
    ]
  },
  {
    id: 'peixes',
    title: '🐟 Peixes Grelhados',
    description: 'O frescor do mar encontra o calor da brasa.',
    icon: 'fa-fish',
    items: [
      { name: 'Peixe Grelhado', price: '7.000 Kz', numericPrice: 7000, description: 'Carapau ou corvina com molho vinagrete.' },
      { name: 'Peixe Composto', price: '10.500 Kz', numericPrice: 10500, description: 'Carapau ou corvina com legumes salteados, ovo fervido e batata rena.', popular: true },
    ]
  },
  {
    id: 'hamburgueres',
    title: '🍔 Hambúrgueres & Saladas',
    description: 'Artesanais e frescos. Uma explosão de sabores em cada mordida.',
    icon: 'fa-hamburger',
    items: [
      { name: 'Hambúrguer de Frango', price: '4.500 Kz', numericPrice: 4500, description: 'Pão, queijo, carne de frango, molhos, tomate, bacon, alface e batata frita.' },
      { name: 'Hambúrguer Simples', price: '5.500 Kz', numericPrice: 5500, description: 'Pão, queijo cheddar, carne bovina, bacon, alface, tomate, pickles e batata frita.' },
      { name: 'Hambúrguer Kombo', price: '8.500 Kz', numericPrice: 8500, description: 'Hambúrguer, batata frita e refrigerante.', popular: true },
      { name: 'Salada Caesar', price: '8.500 Kz', numericPrice: 8500, description: 'Mix de vegetais, frango, croutons, queijo mussarela e molho Caesar caseiro.' },
      { name: 'Salada Simples', price: '800 Kz', numericPrice: 800 },
      { name: 'French Fries', price: '8.500 Kz', numericPrice: 8500 },
    ]
  },
  {
    id: 'guarnicoes',
    title: '🍚 Guarnições & Molhos',
    description: 'Acompanhamentos perfeitos para elevar o seu prato.',
    icon: 'fa-bowl-rice',
    items: [
      { name: 'Arroz Branco', price: '400 Kz', numericPrice: 400 },
      { name: 'Arroz de Cenoura', price: '450 Kz', numericPrice: 450 },
      { name: 'Feijão Preto', price: '600 Kz', numericPrice: 600 },
      { name: 'Mix de Kitutes Grelhados', price: '1.000 Kz', numericPrice: 1000 },
      { name: 'Feijão de Óleo de Palma', price: '850 Kz', numericPrice: 850 },
      { name: 'Funge de Bombó', price: '500 Kz', numericPrice: 500 },
      { name: 'Funge de Milho', price: '400 Kz', numericPrice: 400 },
      { name: 'Molho de Tomate', price: '450 Kz', numericPrice: 450 },
      { name: 'Molho de Berinjela e Quiabo', price: '550 Kz', numericPrice: 550 },
      { name: 'Kizaca de Muamba', price: '1.000 Kz', numericPrice: 1000 },
      { name: 'Molho BBQ', price: '1.000 Kz', numericPrice: 1000 },
      { name: 'Molho Sweet Chilli', price: '1.000 Kz', numericPrice: 1000 },
    ]
  },
  {
    id: 'sopas',
    title: '🍲 Sopas',
    description: 'Conforto e nutrição em cada colherada.',
    icon: 'fa-spoon',
    items: [
      { name: 'Sopa de Legumes', price: '2.500 Kz', numericPrice: 2500 },
      { name: 'Sopa de Feijão', price: '3.950 Kz', numericPrice: 3950 },
    ]
  }
];

export const FEATURED_DISHES = [
  {
    name: 'Frango Inteiro',
    price: '12.000 Kz',
    tag: 'Favorito do Rei',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Frango Composto',
    price: '10.000 Kz',
    tag: 'Mais Popular',
    image: 'https://images.unsplash.com/photo-1606728035253-49df5915eaef?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Asinhas BBQ',
    price: '5.500 Kz',
    tag: 'Destaque',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=800&auto=format&fit=crop'
  }
];

export const CONTACT_INFO = {
  phone: '932 815 377',
  whatsapp: '244932815377',
  instagram: 'https://www.instagram.com/churrasqueira_reis_dos_frangos',
  address: 'Maianga, Luanda',
  delivery: {
    maianga: '500 – 1.000 Kz',
    others: 'Valor negociável'
  }
};
