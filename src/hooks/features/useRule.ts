import { FormRule } from "@/components/Control/type";
import { useLang } from "..";

export const PHONE_REGEX =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const WHITE_SPACE_REGEX = /^\S{3,}$/;
export const REPLACE_NUM_REGEX = /\{\{\s*num\s*\}\}/gi;
export const REPLACE_MIN_NUM_REGEX = /\{\{\s*min\s*\}\}/gi;
export const REPLACE_MAX_NUM_REGEX = /\{\{\s*max\s*\}\}/gi;

const useRule = () => {
  const { lang } = useLang();

  const common = (): FormRule[] => {
    return [{ required: true, message: lang.common.form.rule.required }];
  };

  const email = (): FormRule[] => {
    return [
      { required: true, message: lang.common.form.rule.required },
      { whiteSpace: true, pattern: WHITE_SPACE_REGEX, message: lang.common.form.rule.whiteSpace },
      { email: true, pattern: EMAIL_REGEX, message: lang.common.form.rule.email },
    ];
  };

  const password = (min = 6, max = 20): FormRule[] => {
    return [
      { required: true, message: lang.common.form.rule.required },
      { whiteSpace: true, pattern: WHITE_SPACE_REGEX, message: lang.common.form.rule.whiteSpace },
      {
        minLength: min,
        message: lang.common.form.rule.minLength.replace(REPLACE_MIN_NUM_REGEX, String(min)),
      },
      {
        maxLength: max,
        message: lang.common.form.rule.maxLength.replace(REPLACE_MAX_NUM_REGEX, String(max)),
      },
    ];
  };

  const phone = (): FormRule[] => {
    return [
      { whiteSpace: true, pattern: WHITE_SPACE_REGEX, message: lang.common.form.rule.whiteSpace },
      { phone: true, pattern: PHONE_REGEX, message: lang.common.form.rule.phone },
    ];
  };

  return { common, email, password, phone };
};

export default useRule;