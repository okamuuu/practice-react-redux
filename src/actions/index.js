let nextId = 1

export const addMemo = (text) => {
  return {
    type: 'ADD_MEMO',
    id: nextId++,
    text
  }
}
