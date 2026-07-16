export const useTheme = () => {
  const isDark = useState('isDark', () => false)

  function toggleTheme() {
    isDark.value = !isDark.value
    localStorage.theme = isDark.value ? 'dark' : 'light' // store preference for reload
  }

  function initTheme() {
    if (localStorage.theme === 'dark') isDark.value = true
  }

  return { isDark, toggleTheme, initTheme }
}
