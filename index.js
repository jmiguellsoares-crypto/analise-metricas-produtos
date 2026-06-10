let produtos = [];

function criarProdutos() {
  let quantidadeProdutos = parseInt(prompt('Quantos produtos você tem? '));
  
  for (let i = 0; i < quantidadeProdutos; i++) {
    console.log('\n--- PRODUTO ' + (i + 1) + ' ---');
    
    let nome = prompt('Nome do produto: ');
    let preco = parseFloat(prompt('Preço de venda: '));
    let custo = parseFloat(prompt('Custo do produto: '));
    let quantidadeVendida = parseInt(prompt('Quantidade vendida: '));
    let quantidadeClientes = parseInt(prompt('Quantidade de clientes: '));
    
    let produto = {
      nome: nome,
      preco: preco,
      custo: custo,
      quantidadeVendida: quantidadeVendida,
      quantidadeClientes: quantidadeClientes
    };
    
    produtos.push(produto);
  }
}

function calcularTicketMedio(produto) {
  let totalVendas = produto.preco * produto.quantidadeVendida;
  let ticketMedio = totalVendas / produto.quantidadeClientes;
  return ticketMedio;
}

function calcularMargemLucro(produto) {
  let lucroUnitario = produto.preco - produto.custo;
  let margemLucro = (lucroUnitario / produto.preco) * 100;
  return margemLucro;
}

function calcularROI(produto) {
  let totalVendas = produto.preco * produto.quantidadeVendida;
  let totalCustos = produto.custo * produto.quantidadeVendida;
  let lucro = totalVendas - totalCustos;
  let roi = (lucro / totalCustos) * 100;
  return roi;
}

function mostrarMetricasIndividuais() {
  console.log('\nResultados por produto:\n');
  
  for (let i = 0; i < produtos.length; i++) {
    let produto = produtos[i];
    let ticketMedio = calcularTicketMedio(produto);
    let margemLucro = calcularMargemLucro(produto);
    let roi = calcularROI(produto);
    
    let totalVendas = produto.preco * produto.quantidadeVendida;
    let totalCustos = produto.custo * produto.quantidadeVendida;
    let lucro = totalVendas - totalCustos;
    
    console.log('Produto: ' + produto.nome);
    console.log('Preço: R$ ' + produto.preco.toFixed(2));
    console.log('Custo: R$ ' + produto.custo.toFixed(2));
    console.log('Quantidade vendida: ' + produto.quantidadeVendida + ' un');
    console.log('Clientes: ' + produto.quantidadeClientes);
    console.log('Ticket médio: R$ ' + ticketMedio.toFixed(2));
    console.log('Margem de lucro: ' + margemLucro.toFixed(2) + '%');
    console.log('ROI: ' + roi.toFixed(2) + '%');
    console.log('Total de vendas: R$ ' + totalVendas.toFixed(2));
    console.log('Total de custos: R$ ' + totalCustos.toFixed(2));
    console.log('Lucro: R$ ' + lucro.toFixed(2));
    console.log('');
  }
}

function calcularTotaisGerais() {
  let totalVendasGeral = 0;
  let totalCustosGeral = 0;
  let totalClientesGeral = 0;
  
  for (let i = 0; i < produtos.length; i++) {
    let produto = produtos[i];
    
    totalVendasGeral = totalVendasGeral + (produto.preco * produto.quantidadeVendida);
    totalCustosGeral = totalCustosGeral + (produto.custo * produto.quantidadeVendida);
    totalClientesGeral = totalClientesGeral + produto.quantidadeClientes;
  }
  
  return {
    totalVendas: totalVendasGeral,
    totalCustos: totalCustosGeral,
    totalClientes: totalClientesGeral
  };
}

function mostrarMetricasTotais() {
  let totais = calcularTotaisGerais();
  
  let lucroTotal = totais.totalVendas - totais.totalCustos;
  let margemTotal = (lucroTotal / totais.totalVendas) * 100;
  let roiTotal = (lucroTotal / totais.totalCustos) * 100;
  let ticketMedioTotal = totais.totalVendas / totais.totalClientes;
  
  console.log('Resultado geral do negócio:\n');
  console.log('Total de vendas: R$ ' + totais.totalVendas.toFixed(2));
  console.log('Total de custos: R$ ' + totais.totalCustos.toFixed(2));
  console.log('Lucro total: R$ ' + lucroTotal.toFixed(2));
  console.log('Total de clientes: ' + totais.totalClientes);
  console.log('');
  console.log('Ticket médio geral: R$ ' + ticketMedioTotal.toFixed(2));
  console.log('Margem de lucro geral: ' + margemTotal.toFixed(2) + '%');
  console.log('ROI geral: ' + roiTotal.toFixed(2) + '%');
  console.log('');
}

criarProdutos();
mostrarMetricasIndividuais();
mostrarMetricasTotais();
