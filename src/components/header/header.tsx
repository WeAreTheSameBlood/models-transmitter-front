import Image from "next/image";
import { Images } from "@constants/images";
import "@/styles/header/header.css";

interface HeaderProps {
  isLoggedIn: boolean;
  username?: string;
}

export function Header({ isLoggedIn, username }: HeaderProps) {
  return (
    <header className="header">
      <div className="left">
        <Image src={Images.logo} alt="Logo" width={120} height={32} />
        <div className="relative">
          <input type="text" placeholder="Search" className="search-input" />
          <Image
            src={Images.loupe}
            alt=""
            width={16}
            height={16}
            className="search-icon"
          />
        </div>
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
    </header>
  );
}
