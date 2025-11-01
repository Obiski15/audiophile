import { useEffect, useState } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === "undefined") {
      return
    }

    const mediaQuery = window.matchMedia(query)

    // Set initial value asynchronously to avoid cascading renders
    const initialUpdateId = window.setTimeout(() => {
      setMatches(mediaQuery.matches)
    }, 0)

    // Create event listener
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Add listener
    mediaQuery.addEventListener("change", handleChange)

    // Cleanup
    return () => {
      window.clearTimeout(initialUpdateId)
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

// Predefined breakpoint hooks for convenience
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)")
}

export function useIsTablet(): boolean {
  return useMediaQuery("(min-width: 768px) and (max-width: 1023px)")
}

export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 1024px)")
}

export function useIsLargeDesktop(): boolean {
  return useMediaQuery("(min-width: 1280px)")
}

// Tailwind breakpoints
export function useIsSm(): boolean {
  return useMediaQuery("(min-width: 640px)")
}

export function useIsMd(): boolean {
  return useMediaQuery("(min-width: 768px)")
}

export function useIsLg(): boolean {
  return useMediaQuery("(min-width: 1024px)")
}

export function useIsXl(): boolean {
  return useMediaQuery("(min-width: 1280px)")
}

export function useIs2xl(): boolean {
  return useMediaQuery("(min-width: 1536px)")
}
