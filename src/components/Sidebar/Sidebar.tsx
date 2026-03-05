import type { NavNode } from '@mintlify/astro/helpers';
import { unwrapNav } from '@mintlify/astro/helpers';
import { type SidebarItemStyle, type AnchorItem } from './types';
import { SidebarEntries } from './SidebarEntries';
import { Anchors } from './Anchors';

interface SidebarProps {
  navigation: NavNode;
  currentPath: string;
  anchors?: AnchorItem[];
  sidebarItemStyle?: SidebarItemStyle;
  showDivider?: boolean;
}

export default function Sidebar({
  navigation,
  currentPath,
  anchors = [],
  sidebarItemStyle = 'container',
  showDivider = false,
}: SidebarProps) {
  const entries = unwrapNav(navigation, currentPath);

  return (
    <div className="hidden lg:flex flex-col sticky top-28 h-[calc(100vh-7rem)] w-[18rem] shrink-0 bg-[#EBF3FE] isolate relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:right-full before:w-screen before:bg-[#EBF3FE]">
      <nav className="relative lg:text-sm lg:leading-6 flex-1 overflow-y-auto pr-8 pb-10">
        <div className="sticky top-0 h-8 z-5 bg-linear-to-b from-[#EBF3FE]" />

        {anchors.length > 0 && <Anchors anchors={anchors} />}

        <SidebarEntries
          entries={entries}
          currentPath={currentPath}
          sidebarItemStyle={sidebarItemStyle}
          showDivider={showDivider}
        />
      </nav>
    </div>
  );
}
