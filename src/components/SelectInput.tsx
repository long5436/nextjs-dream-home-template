import clsx from 'clsx';
import Image from 'next/image';
import { MouseEventHandler, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  type?: 'text' | 'email' | 'number' | 'select' | 'textarea';
  label?: string;
  placeholder?: string;
  name: string;
  imageIconPath?: string;
  dataOptions?: { value: string; name: string }[];
  selectDefault?: string;
}

type Select = { name?: string; value?: string };

function SelectInput({
  type,
  label,
  placeholder,
  name,
  imageIconPath,
  dataOptions = [],
  selectDefault,
}: Props) {
  const [select, setSelect] = useState<Select>(() => {
    selectDefault || dataOptions[0]?.value || '';

    const find = dataOptions.find(
      (e) => e.value === selectDefault || dataOptions[0]?.value || ''
    );
    if (find) return find;
    return {};
  });
  const [selectOpen, setSelectOpen] = useState<boolean>(false);

  const handleSelect = (e: MouseEventHandler) => {
    const element = (e as any).target;
    if (element.nodeName === 'LI') {
      const find = dataOptions.find((e) => e.value === element.dataset.value);
      setSelect(find || {});

      // console.log(element.dataset.value);
    }

    setSelectOpen(!selectOpen);
  };

  const IconImage = () => {
    return (
      <>
        {imageIconPath ? (
          <Image
            src={imageIconPath || ''}
            alt=""
            height={18}
            width={18}
            className="absolute bottom-4 left-4"
          />
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <div
      className="relative cursor-pointer"
      // @ts-ignore
      onClick={handleSelect}
    >
      <div
        placeholder="Your message"
        className={clsx(
          'block border py-3 pr-4 rounded-lg w-full outline-none focus:border-primary transition duration-300',
          {
            'pl-11': imageIconPath,
            'pl-4': !imageIconPath,
          }
        )}
      >
        {select?.name}
      </div>
      <IconImage />
      <BsChevronDown
        className={clsx(
          'absolute right-5 bottom-4 transition-transform duration-300',
          {
            'rotate-180': selectOpen,
          }
        )}
      />
      <ul
        className={clsx(
          'absolute top-38 rounded-lg bg-white z-10 w-full border overflow-hidden custom-select max-h-40 overflow-y-auto',
          {
            'opacity-0': !selectOpen,
            'custom-select-open': selectOpen,
          }
        )}
      >
        {dataOptions?.map((item, index) => {
          return (
            <li
              key={index}
              className={clsx('px-4 py-2 hover:bg-black/5', {
                'text-primary font-bold': item.value === select,
              })}
              data-value={item.value}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SelectInput;
