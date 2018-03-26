import {normalizedComments} from '../fixtures'
import {ADD_COMMENT} from '../constansts'
import {ADD_COMMENT} from '../constansts'

const commentsMap = normalizedComments.reduce((acc, comment)=>{
  acc[comment.id] = comment
  return acc
}, {})

export default (commentsState = commentsMap, action) => {
  const {type, payload, randomId} = action

  switch (type) {
    case ADD_COMMENT:
      return {...commentsState, [randomId]: payload.comment}
  }
  return commentsState
}