export const getColor = (hue, saturation, alpha) =>
  `hsla(${hue}, ${(saturation * 100).toFixed(0)}%, 50%, ${(alpha * 100).toFixed(0)})`

export const htmlForHighlight = (highlight, type = 'text') => {
  const { offset, content, properties, ...rest } = highlight

  const style = ``

  return `<span
    style='${style}'
    class='highlight highlight-${type.replace(' ', '-')} highlight-${type.replace(' ', '-')}-${offset}'
    data-type='${type}'
    data-content='${content}'
    data-offset='${offset}'
    data-properties='${JSON.stringify(properties)}'
    >${content}</span>`
}

export const htmlForSentiment = (entity) => {
  const { properties, offset, content } = entity

  const highlightColor = sentiment > 0
    ? getColor(118, Math.abs(sentiment) + 0.5, magnitude)
    : getColor(360, Math.abs(sentiment) + 0.5, magnitude)

  const style = `border-bottom: 2px solid ${highlightColor}`

  return (
    `<span
      style='${style}'
      class='highlight highlight-sentiment-${offset}'
      data-type='sentiment'
      data-content='${content}'
      data-offset='${offset}'
      data-properties='${JSON.stringify(properties)}'
      >${content}</span>`
  )
}
export const convertTokens = (text, tokens) =>
  tokens.map((token) => {
    const { type, offset, content, properties } = token

    const html = htmlForHighlight(token, type)

    return { type, offset, html, content, properties }
  })

export const convertTokensForType = (text, tokens, type) =>
  tokens
    .filter(token => token.type === type)
    .map((token) => {
      const { offset, content, properties } = token

      const html = htmlForHighlight(token, type)

      return { type, offset, html, content, properties }
    })

export const convertAiTokens = (text, entities) =>
  entities.map(entity => {
    const { offset, content } = entity
    const html = htmlForSentiment(entity)
    return { type: 'sentiment', offset, html, content }
  })

export const convertHtml = (text, html) =>
  html.map(tag => {
    const [ offset, html ] = tag

    return { type: 'html', offset, html, content: '' }
  })

export const extract = (text, markup) => {
  const byOffset = (a, b) => {
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
    content: ''
  })

  markup.push({
    type: 'end',
    offset: text.length,
    content: ''
  })

  const tokens = markup.sort(byOffset)

  const { text_tokens } = tokens.reduce(({ text_tokens, current_offset }, elem) => {
    const { offset, content } = elem

    if (offset < current_offset) return { text_tokens, current_offset }

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
