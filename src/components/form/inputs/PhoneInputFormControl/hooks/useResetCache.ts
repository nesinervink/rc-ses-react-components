import React from 'react'
import { VariableSizeList } from 'react-window'

function useResetCache(data: any) {
  const ref = React.useRef<VariableSizeList>(null)

  React.useEffect(() => {
    if (ref.current != null) ref.current.resetAfterIndex(0, true)
  }, [data])

  return ref
}

export default useResetCache
