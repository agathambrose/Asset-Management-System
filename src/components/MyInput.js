import {
  EyeButton,
  FormControl,
  FormErrorMessage,
  IconWrapper,
  Input,
  InputControl,
} from "./AuthForm";

const MyInput = props => {
  const {
    name,
    type,
    placeholder,
    leftIcon,
    w,
    className,
    pl,
    showPassword,
    setShowPassword,
  } = props;
  const LeftIcon = leftIcon;
  return (
    <FormControl w={w} className={className}>
      <InputControl>
        <IconWrapper>{leftIcon && <LeftIcon className="h-5 w-5" />}</IconWrapper>
        <Input name={name} type={type} placeholder={placeholder} pl={pl} />
        {(name === "password" || name === "confirmPassword") && (
          <EyeButton showPassword={showPassword} setShowPassword={setShowPassword} />
        )}
      </InputControl>
      <FormErrorMessage name={name} />
    </FormControl>
  );
};

export default MyInput;
