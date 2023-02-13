// Быстрая загрузка фотографий [data-src]
(async () => {
    for (let node of document.getElementsByTagName('img')) {
      await new Promise(res => {
        node.src = node.dataset.src;
        node.onload = () => res();
      })
    }
  })();

// table

document.getElementsByClassName()