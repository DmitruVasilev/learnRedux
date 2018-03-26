import {normalizedComments} from '../fixtures'
import {} from '../constansts'

const commentsMap = normalizedComments.reduce((acc, comment)=>{
  acc[comment.id] = comment
  return acc
}, {})

export default (commentsState = commentsMap, action) => {
  const {type, payload} = action

  switch (type) {
    // case DELETE_ARTICLE: return articleState.filter(article => article.id !== payload.id)
  }
  return commentsState
}