import { Input } from '@chakra-ui/react';
import classNames from 'classnames';
import { ComponentProps, forwardRef, Ref } from 'react';
import { compress } from '@/utils';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

interface FileUloaderOtherFields {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<any>;
}

type FileUploaderProps = ComponentProps<typeof Input> & FileUloaderOtherFields;

const FileUploader = forwardRef(({ ...props }: FileUploaderProps, ref: Ref<HTMLInputElement>) => {
  const handleFileUpload = async (
    event: HTMLInputEvent,
    setFieldValue: (arg0: string, arg1: Object) => void
  ) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const encodeBase64Image = await encodeImageToBase64(file);
      setFieldValue('image', encodeBase64Image); // Update the value of the file input field
    }
  };
  const encodeImageToBase64 = (file: Blob): Promise<any> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          const compressedBase64 = compress(reader.result as string);
          resolve(compressedBase64);
        }
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  const { setFieldValue, ...rest } = props;
  return (
    <Input
      ref={ref}
      onChange={(event: HTMLInputEvent | any) => handleFileUpload(event, setFieldValue)}
      className={classNames({
        // button colors
        'file:bg-gray-100 block file:text-white-500 hover:file:bg-gray-200': true,
        // button shape and spacing
        'file:rounded-lg p-0 file:rounded-tr-none file:rounded-br-none': true,
        'file:px-4 file:ml-{-10px} file:py-2  file:border-none': true,
        // overall input styling
        'hover:cursor-pointer border rounded-lg text-gray-400': true,
      })}
      {...rest}
    />
  );
});

FileUploader.displayName = 'FileUploader';
export default FileUploader;
