export const split = (text, { offset, content }) => {
  const head = text.substr(0, offset)
  const need = text.substr(offset, wordLength)
  const tail = text.substr(offset + wordLength)

  return {
    head,
    need,
    offset,
    tail,
    wordLength,
  }
}


export const extract = (text, markup) => {
  const byOffset = (a,b) => {
    return a.offset - b.offset || (
      a.type === 'begin' ? -1 : 0
    ) || (
      b.type === 'begin' ? 1 : 0
    ) || (
      a.type === 'end' ? 1 : 0
    ) || (
      b.type === 'end' ? -1 : 0
    ) || (
      a.type === 'html' ? -1 : 0
    ) || (
      b.type === 'html' ? 1 : 0
    ) || (
      a.type === 'text' ? -1 : 0
    ) || (
      b.type === 'text' ? 1 : 0
    )
  }

  markup.push({
    type: 'begin',
    offset: 0,
    content: '',
  })

  markup.push({
    type: 'end',
    offset: text.length,
    content: '',
  })

  const tokens = markup.sort(byOffset)

  const { text_tokens } = tokens.reduce(({ text_tokens, current_offset }, elem) => {
    const { offset, content } = elem

    const extract = text.slice(current_offset, offset)

    text_tokens.push({ type: 'text', offset: current_offset, content: extract })

    console.log(current_offset)
    console.log(extract)
    console.log(elem)

    current_offset += extract.length + content.length

    return { text_tokens, current_offset }
  }, { text_tokens: [], current_offset: 0 })

  return [ ...markup, ...text_tokens ].sort(byOffset)
}
