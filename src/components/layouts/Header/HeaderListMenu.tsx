import clsx from 'clsx';
import HeaderListMenuItem from './HeaderListMenuItem';

export type MenuItem = { name: string; href: string; child: MenuItem[] };
const menu: MenuItem[] = [
  {
    name: 'Home',
    href: '',
    child: [
      {
        name: 'Home 1',
        href: '',
        child: [],
      },
      {
        name: 'Home 2',
        href: '',
        child: [],
      },
      {
        name: 'Home 3',
        href: '',
        child: [],
      },
      {
        name: 'Home 4',
        href: '',
        child: [],
      },
    ],
  },
  {
    name: 'Property',
    href: '',
    child: [
      {
        name: 'Property List',
        href: '',
        child: [
          { name: 'Property List', href: '', child: [] },
          { name: 'Property List Sidebar V1', href: '', child: [] },
          { name: 'Property List Sidebar V2', href: '', child: [] },
        ],
      },
      {
        name: 'Property Grid',
        href: '',
        child: [
          { name: 'Property List', href: '', child: [] },
          { name: 'Property List Sidebar V1', href: '', child: [] },
          { name: 'Property List Sidebar V2', href: '', child: [] },
        ],
      },
      {
        name: 'Property Detail',
        href: '',
        child: [
          { name: 'Property List', href: '', child: [] },
          { name: 'Property List Sidebar V1', href: '', child: [] },
          { name: 'Property List Sidebar V2', href: '', child: [] },
        ],
      },
      {
        name: 'Property Map',
        href: '',
        child: [
          { name: 'Property List', href: '', child: [] },
          { name: 'Property List Sidebar V1', href: '', child: [] },
          { name: 'Property List Sidebar V2', href: '', child: [] },
        ],
      },
    ],
  },
  {
    name: 'Page',
    href: '',
    child: [
      { name: 'About Us', href: '', child: [] },
      { name: "Faq's", href: '', child: [] },
      { name: 'Pricing', href: '', child: [] },
      { name: 'Error', href: '', child: [] },
      { name: 'Agents', href: '', child: [] },
      { name: 'Agencies Detail', href: '', child: [] },
      { name: 'Dashboard', href: '', child: [] },
    ],
  },
  {
    name: 'Blog',
    href: '',
    child: [
      { name: 'Blog Gird', href: '', child: [] },
      { name: 'Blog List', href: '', child: [] },
      { name: 'Blog Detail', href: '', child: [] },
    ],
  },
  { name: 'Contact', href: '', child: [] },
];

interface Props {
  mobile?: boolean;
}

function HeaderListMenu({ mobile }: Props) {
  const classes = clsx('flex transition-all duration-300', {
    'gap-4 2xl:gap-5': !mobile,
    'flex-col': mobile,
  });

  return (
    <ul className={classes}>
      {menu.map((item, index) => {
        return (
          <HeaderListMenuItem
            data={item}
            active={index === 0}
            key={index}
            mobile={mobile}
          />
        );
      })}
    </ul>
  );
}

export default HeaderListMenu;
