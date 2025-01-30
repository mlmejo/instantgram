import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';

export default function SiteFooter() {
  return (
    <>
      <div className="text-ig-secondary-text dark:text-ig-secondary-text-dark mx-auto flex w-full max-w-[935px] flex-wrap justify-center gap-3 text-xs">
        <a href="#">FakeMeta</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Jobs</a>
        <a href="#">Help</a>
        <a href="#">API</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Locations</a>
        <a href="#">InstanTgram Lite</a>
        <a href="#">Threads</a>
        <a href="#">Contact Uploading & Non-Users</a>
        <a href="#">FakeMeta Verified</a>
      </div>

      <div className="text-ig-secondary-text dark:text-ig-secondary-text-dark mx-auto mt-2 flex w-full max-w-[935px] items-center justify-center gap-x-3 pb-14 text-xs">
        <ThemeSwitcher />
        <a href="">&copy; 2025 InstanTgram from FakeMeta</a>
      </div>
    </>
  );
}

function ThemeSwitcher() {
  const themeContext = useContext(ThemeContext);

  return (
    <select
      onChange={(e) => themeContext?.changeTheme(e.target.value)}
      defaultValue={themeContext?.theme}
      className="border-0 text-xs focus:outline-none focus:ring-0 dark:bg-black"
    >
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
}
