const itens = [
    { nome: "Camiseta", preco: 50, quantidade: 2 },
    { nome: "Tênis", preco: 150, quantidade: 1 }
  ];
  
  function calcularSubtotal(itens) {
    let subtotal = 0;
  
    for (const item of itens) {
      subtotal += item.preco * item.quantidade;
    }
  
    return subtotal;
  }
  
  function contarItens(itens) {
    let total = 0;
  
    for (const item of itens) {
      total += item.quantidade;
    }
  
    return total;
  }
  
  function aplicarCupom(subtotal, codigo) {
    let desconto = 0;
  
    if (codigo === "DESC10") {
      desconto = subtotal * 0.10;
    } else if (codigo === "DESC20" && subtotal >= 200) {
      desconto = subtotal * 0.20;
    } else if (codigo === "FRETEGRATIS") {
      desconto = 15;
    }
  
    return Math.max(0, subtotal - desconto);
  }
  
  function finalizarCompra(itens, codigoCupom) {
    const subtotal = calcularSubtotal(itens);
    const valorFinal = aplicarCupom(subtotal, codigoCupom);
  
    return {
      subtotal: subtotal,
      desconto: subtotal - valorFinal,
      total: valorFinal
    };
  }
  
  console.log("Quantidade de itens:", contarItens(itens));
  
  console.log("DESC10:", finalizarCompra(itens, "DESC10"));
  console.log("DESC20:", finalizarCompra(itens, "DESC20"));
  console.log("FRETEGRATIS:", finalizarCompra(itens, "FRETEGRATIS"));
  console.log("SEM CUPOM:", finalizarCompra(itens, ""));