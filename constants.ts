import { PricingItem, ServiceItem, Testimonial, FAQItem, DeviceCategory } from './types';

export const PHONE_NUMBER = '554132459051';
export const PHONE_DISPLAY = '(41) 3245-9051';
export const ADDRESS = 'Rua João Dembinski, 1447 - Fazendinha, Curitiba - PR';
export const WHATSAPP_DEFAULT_MESSAGE = 'Olá vi seu site e *gostaria de saber sobre:*';

export const CITIES = [
  "Curitiba", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária",
  "Balsa Nova", "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente",
  "Campo Largo", "Campo Magro", "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses",
  "Fazenda Rio Grande", "Itaperuçu", "Lapa", "Mandirituba", "Piên", "Pinhais",
  "Piraquara", "Quatro Barras", "Quitandinha", "Rio Branco do Sul", "Rio Negro",
  "São José dos Pinhais", "Tijucas do Sul", "Tunas do Paraná"
];

export const NEIGHBORHOODS = [
  "Fazendinha", "CIC", "Portão", "Santa Quitéria", "Campo Comprido", "Novo Mundo",
  "Capão Raso", "Pinheirinho", "Xaxim", "Boqueirão", "Sítio Cercado", "Tatuquara",
  "Umbará", "Ganchinho", "Água Verde", "Batel", "Centro", "Bigorrilho", "Mercês",
  "Santa Felicidade", "São Braz", "Orleans", "Mossunguê", "Santo Inácio", "Vista Alegre",
  "Pilarzinho", "Bom Retiro", "Centro Cívico", "Ahú", "Cabral", "Juvevê", "Hugo Lange",
  "Alto da Glória", "Alto da XV", "Cristo Rei", "Jardim Botânico", "Jardim das Américas",
  "Cajuru", "Capão da Imbuia", "Tarumã", "Bairro Alto", "Bacacheri", "Boa Vista",
  "Santa Cândida", "Atuba", "Tingui", "Barreirinha", "Cachoeira", "Taboão", "Abranches",
  "São Lourenço", "Vila Izabel", "Seminário", "Campina do Siqueira", "Vila Fanny",
  "Lindóia", "Guaíra", "Parolin", "Prado Velho", "Rebouças", "Alto Boqueirão",
  "Hauer", "Guabirotuba", "Uberaba", "Jardim Social", "Butiatuvinha", "Lamenha Pequena",
  "Riviera", "São Miguel", "Augusta", "Cidade Industrial", "São João", "Caximba",
  "Campo de Santana", "Vila Sandra", "Caiuá", "Vila Nossa Senhora da Luz"
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'console',
    title: 'Reparo de Consoles',
    description: 'Especialistas em PS4, PS5, Xbox Series, Xbox One e Nintendo Switch. Resolvermos problemas de placa, leitor, aquecimento e mais.',
    iconName: 'Gamepad2'
  },
  {
    id: 'pc',
    title: 'Montagem de PC Gamer',
    description: 'Montagem profissional, cable management, instalação de water cooler e otimização de sistema para máxima performance.',
    iconName: 'Cpu'
  },
  {
    id: 'gpu',
    title: 'Reparo de Placa de Vídeo',
    description: 'Recuperação de GPUs com artefatos, curto na alimentação, reballing de memória e chipset.',
    iconName: 'CircuitBoard'
  },
  {
    id: 'notebook',
    title: 'Reparo de Notebooks',
    description: 'Troca de tela, teclado, bateria, reparo de carcaça e placa mãe para notebooks gamers e de escritório.',
    iconName: 'Laptop'
  },
  {
    id: 'smartphone',
    title: 'Reparo de Smartphones',
    description: 'Troca de frontal, bateria, conectores de carga e banho químico para aparelhos molhados.',
    iconName: 'Smartphone'
  },
  {
    id: 'maintenance',
    title: 'Manutenção Preventiva',
    description: 'Limpeza interna completa e troca de pasta térmica (Arctic Silver/Thermal Grizzly) para evitar superaquecimento.',
    iconName: 'Wrench'
  }
];

export const PRICING_DATA: PricingItem[] = [
  { equipment: 'PlayStation 4', problem: 'Não liga / Luz azul', price: 'R$ 150 - R$ 350', time: '3-5 dias', warranty: '90 dias' },
  { equipment: 'PlayStation 5', problem: 'Superaquecimento / Ruído', price: 'R$ 200 - R$ 500', time: '5-7 dias', warranty: '90 dias' },
  { equipment: 'Xbox One', problem: 'Não lê disco / Travamento', price: 'R$ 120 - R$ 300', time: '3-5 dias', warranty: '90 dias' },
  { equipment: 'Nintendo Switch', problem: 'Não carrega / Tela quebrada', price: 'R$ 180 - R$ 450', time: '5-7 dias', warranty: '90 dias' },
  { equipment: 'Placa de Vídeo RTX', problem: 'Sem imagem / Artefatos', price: 'R$ 300 - R$ 800', time: '7-10 dias', warranty: '90 dias' },
  { equipment: 'Notebook Gamer', problem: 'Superaquecimento / Lentidão', price: 'R$ 150 - R$ 600', time: '3-7 dias', warranty: '90 dias' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Ricardo Santos', location: 'Fazendinha', text: 'Meu PS5 estava desligando sozinho. Fizeram a limpeza e troca da pasta térmica, ficou novo!', rating: 5 },
  { id: 2, name: 'Amanda Oliveira', location: 'CIC', text: 'Melhor assistência da região. Consertaram meu notebook gamer que ninguém dava jeito.', rating: 5 },
  { id: 3, name: 'Lucas Ferreira', location: 'Araucária', text: 'Valeu a pena vir de Araucária. Preço justo e serviço rápido no meu Xbox Series S.', rating: 5 },
  { id: 4, name: 'Beatriz Silva', location: 'Portão', text: 'Atendimento nota 10 pelo WhatsApp e serviço impecável na troca da tela do meu iPhone.', rating: 5 },
  { id: 5, name: 'João Paulo', location: 'Campo Comprido', text: 'Montaram meu PC Gamer com um cable management perfeito. Recomendo demais!', rating: 5 },
  { id: 6, name: 'Fernanda Costa', location: 'Pinheirinho', text: 'Honestidade é o forte deles. O problema era simples e não me cobraram nada a mais.', rating: 5 },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Quanto tempo leva para fazer o diagnóstico do meu dispositivo?',
    answer: 'Na maioria dos casos, conseguimos realizar o diagnóstico em até 24 horas. Para problemas mais complexos, pode levar até 48 horas, mas sempre mantemos o cliente informado sobre o andamento.'
  },
  {
    id: 'faq-2',
    question: 'A unidade da Fazendinha atende finais de semana?',
    answer: 'Sim, atendemos aos sábados das 9h às 13h. Aos domingos e feriados, nossa loja física está fechada, mas você pode entrar em contato via WhatsApp para agendar atendimentos para o próximo dia útil.'
  },
  {
    id: 'faq-3',
    question: 'Vocês oferecem serviço de busca e entrega na região?',
    answer: 'Sim, para a região da Fazendinha e bairros próximos, oferecemos o serviço de busca e entrega mediante agendamento prévio. Consulte as taxas e disponibilidade ao entrar em contato.'
  },
  {
    id: 'faq-4',
    question: 'O diagnóstico é realmente gratuito?',
    answer: 'Sim, o diagnóstico é totalmente gratuito em nossa unidade da Fazendinha. Você só paga se aprovar o orçamento e decidir realizar o reparo conosco.'
  },
  {
    id: 'faq-5',
    question: 'Quais formas de pagamento são aceitas na unidade Fazendinha?',
    answer: 'Aceitamos pagamentos em dinheiro, PIX, cartões de débito e crédito (em até 12x com juros), além de boleto bancário para empresas cadastradas.'
  },
  {
    id: 'faq-6',
    question: 'Vocês trabalham com peças originais para notebooks e smartphones?',
    answer: 'Sim, trabalhamos com peças originais para a maioria dos dispositivos. Em alguns casos específicos, oferecemos também a opção de peças compatíveis de alta qualidade, sempre com total transparência ao cliente.'
  },
  {
    id: 'faq-7',
    question: 'É possível acompanhar o status do meu reparo online?',
    answer: 'Sim, após deixar seu dispositivo conosco, você receberá um código de acompanhamento que pode ser consultado em nosso site. Além disso, enviamos atualizações por WhatsApp sobre o andamento do reparo.'
  },
  {
    id: 'faq-8',
    question: 'Vocês fazem visita técnica em residências na Fazendinha?',
    answer: 'Sim, para alguns serviços como instalação de redes, configuração de equipamentos e diagnósticos iniciais, oferecemos o serviço de visita técnica. Entre em contato para verificar disponibilidade e valores.'
  }
];

export const DEVICES_SUPPORTED: DeviceCategory[] = [
  {
    category: 'Consoles',
    brands: [
      { brand: 'Sony', models: ['PlayStation 1', 'PlayStation 2', 'PlayStation 3', 'PlayStation 4', 'PlayStation 5', 'PSP', 'PS Vita'] },
      { brand: 'Microsoft', models: ['Xbox', 'Xbox 360', 'Xbox One', 'Xbox Series S', 'Xbox Series X'] },
      { brand: 'Nintendo', models: ['Switch', 'Wii', 'WiiU', '3DS', 'GameCube'] },
      { brand: 'Retrô', models: ['Mega Drive', 'Super Nintendo', 'Master System'] },
      { brand: 'Portáteis', models: ['Game Boy', 'DS', '3DS', 'Steam Deck'] }
    ]
  },
  {
    category: 'Notebooks e PCs',
    brands: [
      { brand: 'Dell', models: ['Inspiron', 'XPS', 'Alienware', 'Vostro', 'Latitude'] },
      { brand: 'HP', models: ['Pavilion', 'Envy', 'Omen', 'Spectre', 'EliteBook'] },
      { brand: 'Lenovo', models: ['Ideapad', 'Legion', 'ThinkPad', 'Yoga'] },
      { brand: 'Apple', models: ['MacBook Pro', 'MacBook Air', 'iMac'] },
      { brand: 'Asus', models: ['Zenbook', 'VivoBook', 'ROG', 'TUF Gaming'] },
      { brand: 'Acer', models: ['Aspire', 'Nitro', 'Predator', 'Swift'] },
      { brand: 'Samsung', models: ['Book', 'Odyssey'] }
    ]
  },
  {
    category: 'Smartphones',
    brands: [
      { brand: 'Apple', models: ['iPhone (todos os modelos)'] },
      { brand: 'Samsung', models: ['Galaxy S', 'Galaxy Note', 'Galaxy A', 'Galaxy M'] },
      { brand: 'Motorola', models: ['Moto G', 'Moto E', 'Moto Edge', 'Razr'] },
      { brand: 'Xiaomi', models: ['Redmi', 'Poco', 'Mi', 'Note'] },
      { brand: 'LG', models: ['Todos os modelos'] },
      { brand: 'Asus', models: ['Zenfone', 'ROG Phone'] },
      { brand: 'Outras marcas', models: ['Huawei', 'Realme', 'OnePlus'] }
    ]
  }
];