'use client';

import clsx from 'clsx';
import Image from 'next/image';
import SelectInput from './SelectInput';

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

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function CustomInput({
  type,
  label,
  placeholder,
  name,
  imageIconPath,
  dataOptions = [],
  selectDefault,
}: Props) {
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

  const InputComponent = () => {
    switch (type) {
      case 'select':
        return (
          <SelectInput
            placeholder={placeholder}
            name={name}
            imageIconPath={imageIconPath}
            dataOptions={dataOptions}
            selectDefault={selectDefault}
          />
        );
      case 'textarea':
        return (
          <textarea
            rows={4}
            placeholder={placeholder || ''}
            name={name}
            className="block border py-3 px-4 rounded-lg w-full outline-none focus:border-primary transition duration-300"
          />
        );

      case 'text':
      default:
        return (
          <>
            <IconImage />
            <input
              type={type || 'text'}
              placeholder={placeholder}
              name={name}
              className={clsx(
                'block border py-3 pr-4 rounded-lg w-full outline-none focus:border-primary transition duration-300',
                {
                  'pl-11': imageIconPath,
                  'pl-4': !imageIconPath,
                }
              )}
            />
          </>
        );
    }
  };

  return (
    <label>
      {label ? <div className="font-bold">{label}</div> : <></>}
      <div className={clsx('relative', { 'pt-2': label })}>
        <InputComponent />
      </div>
    </label>
  );
}

export default CustomInput;
