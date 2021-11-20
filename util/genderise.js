module.exports = (text, pronoun) => {
  switch (pronoun) {
    case 'ela':
      return text.replace(/<|>/g, 'a')

    case 'ele':
      return text.replace(/</g, '').replace(/>/g, 'o')

    case 'elu':
      return text.replace(/<|>/g, 'e')
  }
}
