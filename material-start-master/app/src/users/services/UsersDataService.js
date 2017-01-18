/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function UsersDataService($q) {
  var users = [
    {
      name: 'Caixa Econômica',
      avatar: 'svg-1',
      content: '​​Para apoiar a excelência de sua atuação e garantir seu constante desenvolvimento e aprimoramento, a Caixa tem uma política de conduta e transparência que norteia todas as suas ações.'
    },
    {
      name: 'Banco do Brasil',
      avatar: 'svg-2',
      content: 'A missão do Banco do Brasil é ser um banco de mercado, competitivo e rentável, atuando com espírito público em cada uma de suas ações junto à sociedade. Nossa visão é a de ser o banco mais relevante e confiável para a vida dos clientes, funcionários, acionistas e para o desenvolvimento do Brasil.'
    },
    {
      name: 'Banco do Nordeste',
      avatar: 'svg-3',
      content: "Ser o banco preferido do Nordeste, reconhecido pela sua capacidade de promover o bem-estar das famílias e a competitividade das empresas da Região."
    },
    {
      name: 'Itaú Unibanco',
      avatar: 'svg-4',
      content: 'Nosso sonho de transformar a vida das pessoas para melhor permitiu que, ao longo dos anos, implementássemos uma sólida cultura interna, baseada na valorização pessoal e no foco no cliente. Como banco, também cumprimos nosso objetivo de investir na sociedade destinando parte de nosso lucro.'
    },
    {
      name: 'Bradesco',
      avatar: 'svg-2',
      content: 'Fornecer soluções, produtos e serviços financeiros e de seguros com agilidade e competência, principalmente por meio da inclusão bancária e da promoção da mobilidade social, contribuindo para o desenvolvimento sustentável e a construção de relacionamentos duradouros para a criação de valor aos acionistas e a toda a sociedade.'
    },
    {
      name: 'Santander',
      avatar: 'svg-4',
      content: "Nossa visão e meta é a de nos tornarmos o melhor banco comercial, ganhando a confiança de nossos funcionários, clientes, acionistas e da sociedade em geral."
    }
  ];

  // Promise-based API
  return {
    loadAllUsers: function() {
      // Simulate async nature of real remote calls
      return $q.when(users);
    }
  };
}

export default ['$q', UsersDataService];
