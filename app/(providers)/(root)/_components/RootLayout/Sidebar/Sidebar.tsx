import SearchInput from '@/components/SearchInput';
import Link from 'next/link';
import { BsFillTrophyFill, BsMusicNoteList } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';
import Profile from './Profile/Profile';
import SidebarNavItem from './SidebarNavItem';

function Sidebar() {
  return (
    <header className="fixed left-0 w-[245px] h-screen bg-rhythm text-white">
      <h1 className="my-5 ml-6">
        <Link href="/today" className="flex items-center gap-x-1">
          <span className="font-black text-sm">SKN</span>
          <span className="text-2xl font-bold tracking-wide">RHYTHM</span>
        </Link>
      </h1>
      <nav className="px-5">
        <Profile />
        <div className="relative mb-7">
          <SearchInput />
          <span className="absolute text-[26px] top-2 left-2 text-gray-400">
            <CiSearch />
          </span>
        </div>

        <div>
          <ul className="flex flex-col">
            <li>
              <SidebarNavItem
                href="/today"
                label="투데이"
                icon={<SiYoutubemusic />}
              />
            </li>
            <li>
              <SidebarNavItem
                href="/chart"
                label="차트"
                icon={<BsFillTrophyFill />}
              />
            </li>
            <li>
              <SidebarNavItem
                href="/user-rhythm"
                label="유저 리듬"
                icon={<BsMusicNoteList />}
              />
            </li>
            <li>
              <SidebarNavItem
                href="/my/likedMusic"
                label="MY"
                icon={<FaHeart />}
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Sidebar;