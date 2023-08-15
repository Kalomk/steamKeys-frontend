import { useFormik, Form, FormikProvider } from 'formik';
import { Box, Button, FormControl, FormLabel } from '@chakra-ui/react';
import usePost from '@/hooks/usePost';
import { Input } from '@chakra-ui/react';
import { ComponentProps } from 'react';

type FormPropsType = ComponentProps<typeof Form>;

type ContactDataSenderProps = {
  id: string;
  price: string;
  setIsShow: (arg0: boolean) => void;
  isFormShow: boolean;
} & FormPropsType;

const ContactDataSender: React.FC<ContactDataSenderProps> = (props) => {
  const { functionTypeDetector } = usePost();
  const { id, price, isFormShow, setIsShow, ...rest } = props;
  const fields = ['buyerEmail', 'userName'];

  const initialValues = {
    buyerEmail: '',
    userName: '',
    postId: '',
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const buyingInfo = {
        postId: id,
        buyerEmail: values.buyerEmail,
        userName: values.userName,
      };
      functionTypeDetector({
        method: 'BuyItemFromThePost',
        buyerInfo: buyingInfo,
        postId: id,
        buyingPrice: price,
      });
      console.log(buyingInfo);
      formik.resetForm();
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form
        className={`absolute bg-[rgba(12,10,29,1.0)] z-100 w-[100%] h-[100%] flex items-center justify-center flex-col p-[10px] transition-transform ease-in-out delay-250`}
        style={{
          transform: isFormShow ? 'translateY(0px)' : 'translateY(100%)',
        }}
        {...rest}
      >
        {fields.map((field) => (
          <FormControl key={field} color={'white'} mt={5} variant="floating">
            <Input
              type={'text'}
              placeholder=" "
              name={field}
              onChange={formik.handleChange}
              value={formik.values[field as keyof typeof initialValues]}
            />
            <FormLabel bg={'rgba(12,10,29,1.0)'}>{field}</FormLabel>
          </FormControl>
        ))}
        <Box>
          <Button colorScheme={'blue'} color={'white'} mt={4} type="submit">
            Save
          </Button>
          <Button onClick={() => setIsShow(false)} colorScheme={'blue'} color={'white'} mt={4}>
            Close
          </Button>
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default ContactDataSender;
