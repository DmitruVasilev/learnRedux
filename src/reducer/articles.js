import {normalizedArticles} from '../fixtures'
import {arrToMap} from '../helpers'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constansts'

export default (articleState = arrToMap(normalizedArticles), action) => {
  const {type, payload, randomId} = action

  switch (type) {
    case DELETE_ARTICLE:
      const tmpState ={...articleState}
      delete tmpState[payload.id]
      return tmpState

    case ADD_COMMENT:
      const article = articleState[payload.articleId]
      return {
        ...articleState,
        [payload.articleId]: {
          ...article,
          comments: (article.comments || []).concat(randomId)
        }
      }
  }
  return articleState
}