document.addEventListener('DOMContentLoaded', function (){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
 
    botaoDeAcessibilidade.addEventListener('click', function(){
     botaoDeAcessibilidade.classList.toggle('rotacao-botao');
     opcoesAcessibilidade.classList.toggle('apresenta-lista')
    })
 
    let tamanhoAtualFonte = 1;
 
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
 
    aumentaFonteBotao.addEventListener('click', function(){
     tamanhoAtualFonte +=0.1;
     document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
    
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
 
    diminuiFonteBotao.addEventListener('click', function(){
     tamanhoAtualFonte -=0.1;
     document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
 })