export const getColor = (hue, saturation, alpha) =>
  `hsla(${hue}, ${(saturation * 100).toFixed(0)}%, 50%, ${(alpha * 100).toFixed(0)})`

export const htmlForHighlight = (highlight, type = 'text') => {
  const { offset, content, ...rest } = highlight

  const style = ``

  return `<span
    style="${style}"
    class="highlight highlight-${type} highlight-${type}-${offset}"
    data-type="${type}"
    data-content="${content}"
    data-offset="${offset}"
    >${content}</span>`

}

export const htmlForSentiment = (entity) => {
  const { sentiment, magnitude, offset, content } = entity

  const highlightColor = sentiment > 0
    ? getColor(118, Math.abs(sentiment) + 0.5, magnitude)
    : getColor(360, Math.abs(sentiment) + 0.5, magnitude)

  const style = `text-decoration-color: ${highlightColor}`

  return (
    `<span
      style="${style}"
      class="highlight highlight-sentiment-${offset}"
      data-type="sentiment"
      data-content="${content}"
      data-offset="${offset}"
      data-magnitude=${magnitude}
      data-sentiment=${sentiment}
      >${content}</span>`
  )
}

export const convertTokens = (text, tokens, type) =>
  tokens.map((token) => {
    const { offset, content } = token

    const html = htmlForHighlight(token, type)

    return { type, offset, html, content }
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
