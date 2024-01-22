import { Moon, Sun, X, List } from "@phosphor-icons/react";

import { Button } from "@/components/ui/Button";
import { Switch } from "@/components/ui/Switch";

import cn from "@/utils/cn";

interface MobileMenuProps {
  isOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MobileDropdownProps {
  routes: { path: string; name: string }[];
  currentSection: string;
  toggleDarkMode: (isChecked: boolean) => void;
  isDark: boolean;
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  setMobileMenuOpen,
}) => {
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((state) => !state);
  };

  return (
    <div className="lg:hidden">
      <Button variant="ghost" onClick={handleMobileMenuToggle} className="px-0">
        {isOpen ? <X size={24} /> : <List size={24} />}
      </Button>
    </div>
  );
};

const MobileDropdown: React.FC<MobileDropdownProps> = ({
  routes,
  currentSection,
  toggleDarkMode,
  isDark,
  isOpen,
}) => {
  return (
    <nav
      className={`fixed z-10 top-16 w-full bg-opacity-10 backdrop-filter backdrop-blur-lg border-b-2 left-0 right-0 items-center space-y-2 ${
        isOpen ? "py-6 flex flex-col animate-slide-down" : "hidden"
      }`}
    >
      {routes.map((route) => (
        <a
          key={route.path}
          href={route.path}
          className={cn(
            "font-semibold text-lg transition-all",
            currentSection === route.path ? "text-primary tracking-wider" : "",
          )}
        >
          {route.name}
        </a>
      ))}
      <div className="flex space-x-2">
        <Switch
          id="toggle-dark"
          onCheckedChange={toggleDarkMode}
          checked={isDark}
        />
        <label htmlFor="toggle-dark">
          {isDark ? (
            <Moon size={24} weight="bold" />
          ) : (
            <Sun size={24} weight="bold" />
          )}
        </label>
      </div>
    </nav>
  );
};

export const Mobile = { Menu: MobileMenu, Dropdown: MobileDropdown };
