import Image from "next/image";
import { Images } from "@constants/images";
import "./header.css";
import { SearchInput } from "@components/search-input/search-input"

interface HeaderProps {
  isLoggedIn: boolean;
  username?: string;
}

export function Header({ isLoggedIn, username }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="left">
          <Image
            src={Images.logo}
            alt="Logo"
            width={120}
            height={32}
            style={{ width: 'auto', height: '32px' }}
          />
          <SearchInput placeholder="Search" />
        </div>

        <div className="actions">
          {isLoggedIn ? (
            <>
              <Image
                src={Images.emptyAvatar}
                alt={username!}
                width={32}
                height={32}
                className="rounded-full"
              />
              <button>
                <Image
                  src={Images.bell}
                  alt="Notifications"
                  width={24}
                  height={24}
                />
              </button>
              <button className="font-medium">Logout</button>
            </>
          ) : (
            <button className="font-medium">Log In</button>
          )}
        </div>
      </div>
    </header>
  );
}
