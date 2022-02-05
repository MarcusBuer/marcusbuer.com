import React from 'react'

function UsePersistentState(key, initialState) {
  const [state, setState] = React.useState(() => {
    const storageValue = localStorage.getItem(key)
    return storageValue ? JSON.parse(storageValue) : initialState
  })
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default UsePersistentState
