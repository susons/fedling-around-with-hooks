import { useState, useEffect, useDebugValue } from 'react';

export function useTitleInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    // mostly component did mount and component did update
    document.title = value;
  })

  useDebugValue(value.length > 0 ? 'full' : 'empty')
  return [value, setValue]
}
