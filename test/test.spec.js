const mocha = require("mocha");
const chai = require('chai');
const getLinksFromMd = require('../index');
const expect = chai.expect;


describe('getLinksFromMd()', () =>{
  it('Se não houver parametro', () =>{
    expect(() => getLinksFromMd('')).to.throw (Error);
  });
  it('Se texto for um numero', () =>{
    expect(() => getLinksFromMd(123)).to.throw (Error);
  });
  it('Se não houver Url no texto', () =>{
    expect(getLinksFromMd('str')).to.deep.equal ([]);
  });
  it('Se houver uma Url no texto', () =>{
    let test = "Oi você quer entrar no site [google](www.google.com) ?";
      expect(getLinksFromMd(test)).to.deep.equal(
        [{href: 'www.google.com', text: 'google'}]);
    })
    it('Se houver três URLs no texto', () =>{
      let test = `[labore](https://en.wiktionary.org/wiki/labore) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam,

        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [foo](http://foo.com) `;
        expect(getLinksFromMd(test)).to.deep.equal([
          { href: 'https://en.wiktionary.org/wiki/labore',
             text: 'labore' },
          { href: 'https://en.wiktionary.org/wiki/dolore',
             text: 'dolore' },
          { href: 'http://foo.com',
             text: 'foo' },
      ]);
    });
});

  // it('Should return an array with URLs from a string that has MORE THAN ONE link', () => {
  //   let message = `[labore](https://en.wiktionary.org/wiki/labore) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam,
  //
  //   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [foo](http://foo.com) `;
  //   expect(getLinksFromMd(message)).to.deep.equal([
  //     { href: 'https://en.wiktionary.org/wiki/labore',
  //       text: 'labore' },
  //     { href: 'https://en.wiktionary.org/wiki/dolore',
  //       text: 'dolore' },
  //     { href: 'http://foo.com',
  //       text: 'foo' },
  //   ]);
  // });
  // it('Should return an empty array from a string that has NO LINK inside', () => {
  //   let message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  //   expect(getLinksFromMd(message)).to.deep.equal([]);
  // });
  // it('Should return "Error: missing argument"', () => {
  //   expect(() => getLinksFromMd()).to.throw('missing argument');
  // });
//   it('Should return "Error: argument is not a string"', () => {
//     expect(() => getLinksFromMd(436437)).to.throw('argument is not a string');
//   });
// });
