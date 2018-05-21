import {ADD_PERSON, ADD_PERSON_REQUEST, addPersonSaga} from './people'
import {put, call} from 'redux-saga/effects'
import {generateId} from './utils'

it("should dispatch person with id", () => {
  const person= {
    firstName : 'Roman',
    email : 'admin@admin.com'
  }
  const saga = addPersonSaga({
    type: ADD_PERSON_REQUEST,
    payload: person
  })

  expect(saga.next().value).toEqual(call(generateId))

  const id = generateId()

  expect(saga.next(id).value).toEqual(put({
    type: ADD_PERSON,
    payload: {id, ...person}
  }))
})