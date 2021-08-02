<h2>O que eu aprendi</h2>

* **scrollLeft**: Element.scrollLeft retorna a quantidade de pixels que o elemento foi rolado à esquerda.

1. No primeiro slider, como ainda não houve alteração da imagem -> **scrollLeft = 0**
2. Na primeira troca de imagens o scrollLeft vai ser igual à largura da imagem (como ela está como 100%, dependerá do tamanho da tela) -- no meu caso: **scrollLeft = 1366px** na 2 volta
3. Na segunda - e última - troca de imagens, o scrollLeft vai ter se movimentado 1366px + 1366px, então: **scrollLeft = 2732px**

* sliderEl.scrollLeft / sliderWidth -> a largura do slider nunca vai mudar então teremos:
    * 1 volta: 0 / 1366 = 0
    * 2 volta: 1366 / 1366 = 1
    * 3 volta: 2732 / 1366 = 2

Aqui, então podemos concluir que **a divisão da quantidade scrollada pela largura do slider retornará o index - posição - das imagens no slider**

---

* **parentNode.childElementCount**: Essa propriedade retorna a quantidade de filhos que um elemento pai possui

---

* **Element.offSetWidth**: Essa propriedade retorna um número inteiro corresponde a largura do elemento HTML, incluindo bordas, padding horizontal e vertical scrollbar.


_fonte: [MDN WEB DOCS](https://developer.mozilla.org/pt-BR/)_