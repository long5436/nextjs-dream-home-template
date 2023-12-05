'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { MenuItem } from './HeaderListMenu';
import HeaderListMenuItemDropDown from './HeaderListMenuItemDropDown';

interface Props {
  data: MenuItem;
  active?: boolean;
  mobile?: boolean;
}

function HeaderListMenuItem({ data, active, mobile }: Props) {
  const [showDropdown, isShowDropdown] = useState<boolean>(false);

  const classes = clsx(
    'relative flex items-center gap-2 opacity-95 font-semibold h-full justify-between',
    {
      'text-primary': active,
      'text-base py-4': !mobile,
      'py-2': mobile,
    }
  );

  const handleSelectMenu = () => {
    isShowDropdown(!showDropdown);
  };

  return (
    <li className="relative group">
      <Link href="#" className={classes} onClick={handleSelectMenu}>
        {data.name}
        {data.child.length > 0 ? <FaChevronDown size="12" /> : <></>}
      </Link>

      <div className={clsx({ 'hidden group-hover:block': !mobile })}>
        <HeaderListMenuItemDropDown
          data={data.child}
          mobile={mobile}
          show={showDropdown}
        />
      </div>
    </li>
  );
}

export default HeaderListMenuItem;
