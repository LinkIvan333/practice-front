import * as React from 'react';
import { useLocation } from 'react-router';

import { Header } from 'components/Header';
import { AboutAnchorArray, AboutAnchorEnum } from 'config/routes';

import SideBar from '../SideBar/SideBar';
import { StickyHeader } from '../StickyHeader';

import { LayoutWrapper } from './Layout.styles';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>();

  const handleMenuClick = React.useCallback(() => setIsSidebarOpen(true), []);

  const handleClose = React.useCallback(() => setIsSidebarOpen(false), []);

  const layout = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (
      layout.current &&
      !AboutAnchorArray.includes(location.pathname as AboutAnchorEnum)
    ) {
      layout.current.scrollIntoView();
    }
  }, [location.pathname]);

  return (
    <div ref={layout}>
      <StickyHeader onMenuClick={handleMenuClick} />
      <Header />
      <SideBar isSidebarOpen={isSidebarOpen} onClose={handleClose} />
      <LayoutWrapper>{children}</LayoutWrapper>
    </div>
  );
};

export default Layout;
