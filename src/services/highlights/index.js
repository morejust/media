export const getTipMessage = (data) => {
  const { offset, type, content } = data
  console.log('highlight', { offset, type, content })

  switch (type) {
    case 'sentiment':
      const _sentiment = parseFloat(data.sentiment) || 0.0

      return {
        title: `
          '${content}' has ${
          _sentiment > 0 ? 'positive' : 'negative'}
          sentiment here (${_sentiment.toFixed(2)})
        `,
        message: `
          Pay attention to strong emotional message text sends.
          Usually, it can be used to manipulate your opinion.
        `
      }
    case 'fact':
      return {
        title: `
          Does the article prove this fact?
        `,
        message: `
          Looks like this is one of the main messages in the article.
          Try asking yourself: Could this statement be false?

          <a href="#">It is false? Help us collect the data</a>
        `
      }
    case 'generalization':
      return {
        title: `
          '${content}' is a generalization
        `,
        message: `
          Any general statement is false.
          No jokes, generalizations tend to overcome need for proof using
          cherry-picked examples. Look what happens if you replace '${content}'
          by 'one of the'
        `
      }
    case 'journalism cliches':
      return {
        title: `
          '${content}' is a cliche
        `,
        message: `
          That's unprofessional journalism.
          Writer uses these words when he has nothing to say, but wants to sound smart.
        `
      }
    default:
      return {
        title: `
          '${content}' is of type '${type}'
        `,
        message: `
          Our AI highlighter asks you to look closely at this statement.
        `
      }
  }
}
