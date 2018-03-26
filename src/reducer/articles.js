import {normalizedArticles} from '../fixtures'
import {DELETE_ARTICLE} from '../constansts'

export default (articleState = normalizedArticles, action) => {
  const {type, payload} = action

  switch (type) {
    case DELETE_ARTICLE: return articleState.filter(article => article.id !== payload.id)
  }
  return articleState
}