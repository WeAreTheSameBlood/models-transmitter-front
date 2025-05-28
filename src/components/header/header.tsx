import Image from "next/image";
import { Images } from "@constants/images";
import "./header.css";
import { SearchInput } from "@components/search-input/search-input"
import { UserBlock } from "@components/user_block/user_block";

interface HeaderProps {
  isLoggedIn: boolean;
  username?: string;
}

export function Header({ isLoggedIn, username }: HeaderProps) {
  return (
    <header className="header">
      
      <div className="header-content">
        
        {/* // MARK: - Logo */}
        <div className="left">
          <Image
            src={Images.logo}
            alt="Logo"
            width={100}
            height={30}
            style={{ width: 'auto', height: '30px' }}
          />
        </div>

        {/* // MARK: - Search */}
        <div className="center">
          <SearchInput placeholder="Search" />
        </div>

        {/* // MARK: - User Block */}
        <div className="actions">
          <UserBlock
            isLoggedIn={isLoggedIn}
            username={username}
          />
        </div>
        
      </div>

    </header>
  );
}
