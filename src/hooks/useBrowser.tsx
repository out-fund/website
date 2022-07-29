import React from "react"
// Returns true only when running in a browser
// Returns false when doing SSR rendering
export default function useBrowser() {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  return hasMounted
}
