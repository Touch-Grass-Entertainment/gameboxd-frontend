import { Button } from '@/components/ui/button';
import { useTheme } from '@/utils/themeProvider';

function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const handleToggle = () => {
        if(theme === 'light') setTheme('dark');
        if(theme === 'dark') setTheme('light');
        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light";
            setTheme(systemTheme);
        }
    }

    return (
        <Button onClick={handleToggle}>
            Toggle Theme
        </Button>
    )
}

export { ThemeToggle };