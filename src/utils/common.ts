import moment from 'moment';

const filterLastSlash = (str: string): string => {
  return str.replace(/^(.+?)\/*?$/, '$1');
};

const convertToCreditCardNumber = (str: string): string => {
  return str.replace(/^(.{4})(.{4})(.{4})(.*)$/, '$1 $2 $3 $4');
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const passwordRegExp =
  /^(?=(.*\d){2})(?=(.*[a-z]){2})(?=(.*[A-Z]){2})(?=(.*[#?!@$%^/&*_()~`:;'"\\\[+={}\]\/>\.\<,|-]){2}).{8,}$/;

const nameRegExp =
  /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9\sàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ._]+(?<![_.])$/;

const passwordDontHaveSpacesRegExt = /^\S*$/;

const formatDate = 'DD-MM-YYYY';
const formatDateFilter = 'YYYY-MM-DD';
const formatDatepicker = 'dd-MM-yyyy';

const momentFormatDate = (date: string): string => date && moment(date).format(formatDate);

const SMC_AUTH_TOKEN = 'SMC_AUTH_TOKEN'

export {
  filterLastSlash,
  convertToCreditCardNumber,
  phoneRegExp,
  passwordRegExp,
  passwordDontHaveSpacesRegExt,
  formatDate,
  formatDateFilter,
  formatDatepicker,
  momentFormatDate,
  nameRegExp,
  SMC_AUTH_TOKEN
};
