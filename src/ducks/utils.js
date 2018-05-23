import {OrderedMap, Map} from 'immutable'

export function fbDataEntities(data, RecordModel = Map) {
  return (new OrderedMap(data)).mapEntries(([uid, value]) => (
    [uid, (new RecordModel(value)).set('uid', uid)]
  ))
}

export function generateId() {
  return Date.now()
}

