function getLinksFromMd(texto) {
  if (texto === '') {
    throw new Error("Insira um texto")
  }
  if (texto === 123) {
    throw new Error("Texto invalido")
  }

  const regex = new RegExp(/\[([\w\d\s]*)\]\(([^\s]*)\)/g);
  let searchResult = 0;
  let foundLinks = [];

  while (searchResult = regex.exec(texto)) {
    foundLinks.push({
      'href': searchResult[2],
      'text': searchResult[1]
    });
    if (searchResult === null) {
      throw new Error("[]")
    }
  }
  return foundLinks;
  };
  module.exports = getLinksFromMd;
