/**
 * Projeto: Cardápio Online
 * Desenvolvido por Ana Júlia de Lima Aguiar Leite
 * Copyright © 2026 AJ - Criar e Desenvolver. Todos os direitos reservados.
 *
 * Este código é destinado exclusivamente para fins acadêmicos e comerciais
 * da autora. A reprodução, distribuição, modificação, comercialização ou
 * utilização deste código, total ou parcial, sem autorização expressa da
 * autora é proibida.
 */

// Dados de configuração e itens do cardápio

const STORE_INFO = {
  name: "Menu Online",
  slogan: "Pedido Online",
  address: "Rua dos Confeiteiros do Brasil, 3121 - Centro, Luzânia/GO",
  phone: "(61) 3621-1084",
  phone2: "(61) 3621-3833",
  whatsapp: "(61) 99677-3513",
  minOrder: 10,
  deliveryTypes: ["delivery", "balcao"],
  schedule: [
    { day: "Domingo", open: "14:00", close: "21:40" },
    { day: "Segunda", open: "07:00", close: "21:40" },
    { day: "Terça", open: "07:00", close: "21:40" },
    { day: "Quarta", open: "07:00", close: "21:40" },
    { day: "Quinta", open: "07:00", close: "21:40" },
    { day: "Sexta", open: "07:00", close: "21:40" },
    { day: "Sábado", open: "07:00", close: "21:40" },
  ],
  paymentMethods: [
    { name: "Dinheiro", accepted: true, icon: "💵" },
    { name: "Cartão de Débito", accepted: true, icon: "💳" },
    { name: "Cartão de Crédito", accepted: true, icon: "💳" },
    { name: "Pix", accepted: true, icon: "📱" },
  ],
};

let CATEGORIES = [
  {
   
    id: "bebidas",
    name: "Bebidas",
    icon: "🥤",
    products: [
      { id: "bb1", name: "Cappuccino Tradicional", desc: null, price: 10.90, available: true, image: "images/products/cappuccino.webp" },
      { id: "bb2", name: "Coca Cola Zero lata 310ml", desc: null, price: 5.90, available: true, image: "images/products/coca_cola_zero_lata.webp" },
      { id: "bb3", name: "Coca Cola lata 310ml", desc: null, price: 5.90, available: true, image: "images/products/refrigerante_lata.webp" },
      { id: "bb4", name: "Guaraná Antarctica Zero lata 350ml", desc: null, price: 5.90, available: true, image: "images/products/guarana_zero_lata.webp" },
      { id: "bb5", name: "Guaraná Antarctica lata 350ml", desc: null, price: 5.90, available: true, image: "images/products/guarana_lata.webp" },
      { id: "bb6", name: "Tampico 450ml", desc: null, price: 5.90, available: true, image: "images/products/tampico_450ml.webp" },
      { id: "bb7", name: "Água Tônica 350ml", desc: null, price: 4.90, available: true, image: "images/products/agua_tonica_lata.webp" },
      { id: "bb8", name: "Coca Cola 600 ml", desc: null, price: 8.50, available: true, image: "images/products/coca_cola_600ml.webp" },
      { id: "bb9", name: "Coca Cola Zero 600ml", desc: null, price: 8.50, available: true, image: "images/products/coca_cola_zero_600ml.webp" },
      { id: "bb10", name: "Guaraná Antarctica 600ml", desc: null, price: 6.90, available: true, image: "images/products/guarana_600ml.webp" },
      { id: "bb11", name: "Coca Cola 1,5L", desc: null, price: 11.90, available: false },
      { id: "bb12", name: "Coca Cola Zero 1,5L", desc: null, price: 11.90, available: false },
      { id: "bb13", name: "Fanta Laranja 1,5L", desc: null, price: 7.90, available: false },
      { id: "bb14", name: "Fanta Uva 1,5L", desc: null, price: 7.90, available: false },
      { id: "bb15", name: "Guaraná Kuat 1,5L", desc: null, price: 6.90, available: false },
      { id: "bb16", name: "Sprite 1,5L", desc: null, price: 7.90, available: false },
      { id: "bb17", name: "Coca Cola 2L", desc: null, price: 13.90, available: false },
      { id: "bb18", name: "Coca Cola Zero 2L", desc: null, price: 13.90, available: false },
      { id: "bb19", name: "Guaraná Antarctica 2L", desc: null, price: 11.90, available: false },
      { id: "bb20", name: "Red Bull 250 ml", desc: null, price: 12.90, available: true, image: "images/products/red_bull_250ml.webp" },
      { id: "bb21", name: "Monster Energy 473ml", desc: null, price: 13.90, available: true, image: "images/products/monster_energy_473ml.webp" },
      { id: "bb22", name: "Agua Mineral com gás 500ml", desc: null, price: 3.50, available: true, image: "images/products/agua_mineral_com_gas.webp" },
      { id: "bb23", name: "Agua Mineral sem gás 500ml", desc: null, price: 3.00, available: true, image: "images/products/agua_mineral_sem_gas.webp" },
      { id: "bb24", name: "Suco Natural de laranja 300ml", desc: null, price: 7.90, available: true, image: "images/products/suco_laranja.webp" },
      { id: "bb25", name: "Suco Natural de laranja 500ml", desc: null, price: 11.90, available: true, image: "images/products/suco_laranja_500ml.webp" },
      { id: "bb26", name: "Suco Natural de laranja 1L", desc: null, price: 19.90, available: true, image: "images/products/suco_laranja_1l.webp" },
      {
        id: "bb27", name: "Suco de Polpa (300ml)", desc: null, price: 7.90, available: false,
        complements: [{ title: "Sabores de Polpa", type: "radio", required: false, options: ["Graviola", "Morango", "Caju", "Acerola", "Goiaba", "Manga", "Maracujá", "Abacaxi", "Cajá"] }]
      },
      {
        id: "bb28", name: "Suco de Polpa (500ml)", desc: null, price: 11.90, available: false,
        complements: [{ title: "Sabores de Polpa", type: "radio", required: false, options: ["Graviola", "Morango", "Caju", "Acerola", "Goiaba", "Manga", "Maracujá", "Abacaxi", "Cajá"] }]
      },
    ],
    extras: []
  },
];

// =============================================
// DADOS DAS PIZZAS
// =============================================
let PIZZAS= {
  name: "Monte Seu Açaí",
  icon: "🍕",
  sizes: [
    { id: "brotinho", name: "Brotinho", desc: "Até 2 Sabores - 4 Fatias", basePrice: 24.90, maxFlavors: 3 },
    { id: "grande", name: "Grande 8 Fatias", desc: "Até 2 Sabores - 8 Fatias", basePrice: 32.50, maxFlavors: 4 },
    { id: "grande", name: "Grande 8 Fatias", desc: "Até 2 Sabores - 8 Fatias", basePrice: 36.90, maxFlavors: 5 },
  ],
  flavors: [
    { name: "Calabresa", desc: "Muçarela, molho pomodoro, calabresa e cebola", type: "Tradicional", prices: { brotinho: 34.90, grande: 59.90 }, image: "images/products/pizza_calabresa.webp" },
    { name: "Frango", desc: "Muçarela, molho pomodoro, frango, milho e azeitona", type: "Tradicional", prices: { brotinho: 34.90, grande: 59.90 }, image: "images/products/pizza_frango.webp" },
    { name: "Marguerita", desc: "Muçarela, molho pomodoro, tomate cereja, parmesão e manjericão", type: "Tradicional", prices: { brotinho: 34.90, grande: 59.90 }, image: "images/products/pizza_marguerita.webp" },
    { name: "Muçarela", desc: "Muçarela, molho pomodoro e tomate", type: "Tradicional", prices: { brotinho: 34.90, grande: 59.90 }, image: "images/products/pizza_mucarela.webp" },
    { name: "Napolitana", desc: "Muçarela, molho pomodoro, presunto, cebola e azeitona, manjericão e alho frito", type: "Tradicional", prices: { brotinho: 34.90, grande: 59.90 }, image: "images/products/pizza_napolitana.webp" },
    { name: "Peito de Peru", desc: "Muçarela, molho pomodoro, peito de peru e tomate", type: "Tradicional", prices: { brotinho: 34.90, grande: 59.90 }, image: "images/products/pizza_peito_peru.webp" },
    { name: "Pizzaiolo", desc: "Muçarela, molho pomodoro, lombo canadense, bacon, milho, cebola, tomate e azeitona", type: "Especial", prices: { brotinho: 39.90, grande: 69.90 }, image: "images/products/pizza_pizzaiolo.webp" },
    { name: "Abobrinha", desc: "Muçarela, molho pomodoro, abobrinha e tomate", type: "Especial", prices: { brotinho: 39.90, grande: 69.00 }, available: false },
    { name: "Frango Especial", desc: "Muçarela, molho pomodoro, frango, requeijão e cebola", type: "Especial", prices: { brotinho: 39.90, grande: 69.90 }, image: "images/products/pizza_frango_catupiry.webp" },
    { name: "Portuguesa", desc: "Muçarela, molho pomodoro, calabresa, presunto, cebola, pimentão, tomate, azeitona e ovos", type: "Especial", prices: { brotinho: 39.90, grande: 69.90 }, image: "images/products/pizza_portuguesa.webp" },
    { name: "Luziânia", desc: "Muçarela, molho pomodoro, frango, bacon, ovos, milho e cebola", type: "Especial", prices: { brotinho: 39.90, grande: 69.90 }, image: "images/products/pizza_luziania.webp" },
    { name: "Especiale", desc: "Muçarela, molho pomodoro, calabresa, presunto, bacon, milho, azeitona e palmito", type: "Gourmet", prices: { brotinho: 35.90, grande: 64.90 }, image: "images/products/pizza_especiale.webp" },
    { name: "Quitanda", desc: "Muçarela, molho pomodoro, carne seca, azeitona, tomate cereja e manjericão", type: "Gourmet", prices: { brotinho: 38.90, grande: 69.90 }, available: false },
    { name: "Peperoni", desc: "Muçarela, molho pomodoro e peperoni", type: "Gourmet", prices: { brotinho: 37.90, grande: 69.90 }, image: "images/products/pizza_peperoni.webp" },
    { name: "Quatro queijos", desc: "Muçarela, molho pomodoro, parmesão, provolone e gorgonzola", type: "Gourmet", prices: { brotinho: 35.90, grande: 69.90 }, image: "images/products/pizza_quatro_queijos.webp" },
    { name: "Vegetariana", desc: "Muçarela, molho pomodoro, muçarela de búfala, abobrinha grelhada, tomate cereja, palmito e manjericão", type: "Gourmet", prices: { brotinho: 37.90, grande: 69.90 }, image: "images/products/pizza_vegetariana.webp" },
    { name: "Americana", desc: "Muçarela, molho pomodoro, peperoni, frango, requeijão, azeitona e cebola", type: "Gourmet", prices: { brotinho: 42.90, grande: 79.90 }, image: "images/products/pizza_americana.webp" },
    { name: "Tomate seco", desc: "Muçarela, molho pomodoro, muçarela de búfala, tomate seco e rúcula", type: "Gourmet", prices: { brotinho: 36.90, grande: 69.90 }, image: "images/products/pizza_tomate_seco.webp" },
    { name: "Maria bonita", desc: "Muçarela, molho pomodoro, carne seca, requeijão, cebola e pimenta calabresa", type: "Gourmet", prices: { brotinho: 36.90, grande: 69.90 }, available: false },
    { name: "Do chef", desc: "Muçarela, molho pomodoro, lombo canadense, provolone, pimenta calabresa e abacaxi", type: "Gourmet", prices: { brotinho: 37.90, grande: 69.90 }, available: false },
    { name: "Camarão", desc: "Muçarela, molho pomodoro, camarão, tomate cereja e manjericão", type: "Gourmet", prices: { brotinho: 44.90, grande: 84.90 }, image: "images/products/pizza_camarao.webp" },
    { name: "Sonho de pizza", desc: "Muçarela, leite condensado, chocolate meio amargo e bombom sonho de valsa", type: "Doce", prices: { brotinho: 34.90, grande: 59.90 }, available: false },
    { name: "Choconana", desc: "Muçarela, banana e chocolate", type: "Doce", prices: { brotinho: 33.90, grande: 49.90 }, image: "images/products/pizza_choconana.webp" },
    { name: "Morango", desc: "Muçarela, morango e chocolate", type: "Doce", prices: { brotinho: 34.90, grande: 59.90 }, image: "images/products/pizza_morango.webp" },
    { name: "Prestígio", desc: "Muçarela, coco ralado e chocolate", type: "Doce", prices: { brotinho: 34.90, grande: 59.90 }, image: "images/products/pizza_prestigio.webp" },
    { name: "Banana", desc: "Muçarela, banana, leite condensado e canela", type: "Doce", prices: { brotinho: 33.90, grande: 49.90 }, image: "images/products/pizza_banana.webp" },
  ],
  borders: [
    { name: "Sem borda", prices: { brotinho: 0, grande: 0 } },
    { name: "Requeijão", prices: { brotinho: 7, grande: 10 } },
    { name: "Cheddar", prices: { brotinho: 7, grande: 10 } },
    { name: "Muçarela", prices: { brotinho: 7, grande: 10 } },
    { name: "Chocolate", prices: { brotinho: 7, grande: 10 } },
  ]
};

// =============================================
// ÁREAS DE ENTREGA E TAXAS (LUZIÂNIA-GO)
// =============================================
let DELIVERY_AREAS = {
  city: "Porto Alegre",
  state: "RS",
  neighborhoods: [
    { name: "Cidade Baixa", fee: 0.00 },
    { name: "Centro", fee: 0.00 },
    { name: "Jardim Botatico", fee: 10.00 },
    { name: "Azenha", fee: 0.00 },
    { name: "Menini Deus", fee: 0.00 },
    { name: "Santa Tereza", fee: 8.00 },
    { name: "Bom fim", fee: 9.00 },
    { name: "Setor Leste", fee: 6.00 },
    { name: "Setor Norte", fee: 7.00 },
    { name: "Vila Guará", fee: 8.00 }
  ]
};
