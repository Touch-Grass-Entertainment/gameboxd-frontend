import './App.css'
import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/utils/themeProvider';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='min-h-screen bg-background flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
