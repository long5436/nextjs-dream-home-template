import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { GoArrowDownRight } from 'react-icons/go';
import { MenuItem } from './HeaderListMenu';

interface Props {
  data: MenuItem[];
  sub?: boolean;
  mobile?: boolean;
  show?: boolean;
}

function HeaderListMenuItemDropDown({ data, sub, mobile, show }: Props) {
  const [showDropdownIndex, setShowDropdownIndex] = useState<number>(-1);

  const handleSubSelect = (index: number) => {
    setShowDropdownIndex(index !== showDropdownIndex ? index : -1);
  };

  return (
    <>
      {data.length > 0 && (mobile ? show : true) ? (
        <>
          <ul
            className={clsx('text-black py-5', {
              'top-14 left-0': !sub,
              'top-0 left-full z-20': sub,
              'absolute bg-white shadow-2xl w-72 px-7': !mobile,
              'bg-primary/20 rounded-md': mobile && !sub,
              'px-5': mobile,
            })}
          >
            {data.map((item, index) => {
              return (
                <li key={index} className="relative group/item">
                  <Link
                    href={item.href || '#'}
                    className={clsx(
                      'font-medium flex flex-row items-center justify-between py-2 hover:text-primary transition-colors duration-100',
                      {
                        'text-base': !mobile,
                      }
                    )}
                    onClick={() => handleSubSelect(index)}
                  >
                    <div className="flex flex-row items-center relative">
                      <GoArrowDownRight
                        size="18"
                        className={clsx(
                          'opacity-0 group-hover/item:opacity-100 transition duration-500',
                          {
                            hidden: mobile,
                          }
                        )}
                      />
                      <span
                        className={clsx('transition duration-500', {
                          '-translate-x-3 group-hover/item:translate-x-2':
                            !mobile,
                        })}
                      >
                        {item.name}
                      </span>
                    </div>
                    {item.child.length > 0 ? (
                      <FaChevronRight size="12" />
                    ) : (
                      <></>
                    )}
                  </Link>

                  <div
                    className={clsx({
                      'hidden group-hover/item:block': !mobile,
                    })}
                  >
                    <HeaderListMenuItemDropDown
                      mobile={mobile}
                      data={item.child}
                      sub
                      show={showDropdownIndex === index}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default HeaderListMenuItemDropDown;
