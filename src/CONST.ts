const CONST = {
  REGEX: {
    EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    SPECIAL_CHARS_WITHOUT_NEWLINE: /((?!\n)[()-\s\t])/g,
    US_PHONE: /^\+1\d{10}$/,
    US_PHONE_WITH_OPTIONAL_COUNTRY_CODE: /^(\+1)?\d{10}$/,
    DIGITS_AND_PLUS: /^\+?[0-9]*$/,
    PHONE_E164_PLUS: /^\+?[1-9]\d{1,14}$/,
    PHONE_WITH_SPECIAL_CHARS: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\\./0-9]{0,12}$/,
    ALPHABETIC_CHARS: /[a-zA-Z]+/,
    POSITIVE_INTEGER: /^\d+$/,
    NON_ALPHA_NUMERIC: /[^A-Za-z0-9+]/g,
    PO_BOX:
      /\b[P|p]?(OST|ost)?\.?\s*[O|o|0]?(ffice|FFICE)?\.?\s*[B|b][O|o|0]?[X|x]?\.?\s+[#]?(\d+)\b/,
    ANY_VALUE: /^.+$/,
    ZIP_CODE: /[0-9]{5}(?:[- ][0-9]{4})?/,
    INDUSTRY_CODE: /^[0-9]{6}$/,
    SSN_LAST_FOUR: /^(?!0000)[0-9]{4}$/,
    SSN_FULL_NINE: /^(?!0000)[0-9]{9}$/,
    NUMBER: /^[0-9]+$/,
    CARD_NUMBER: /^[0-9]{15,16}$/,
    CARD_SECURITY_CODE: /^[0-9]{3,4}$/,
    CARD_EXPIRATION_DATE: /^(0[1-9]|1[0-2])([^0-9])?([0-9]{4}|([0-9]{2}))$/,
    PAYPAL_ME_USERNAME: /^[a-zA-Z0-9]+$/,
    ROOM_NAME: /^#[a-z0-9-]{1,80}$/,

    WEBSITE:
      /^((https?|ftp):\/\/)(([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i,

    TAX_ID: /^\d{9}$/,
    NON_NUMERIC: /\D/g,
    EMOJI_NAME: /:[\w+-]+:/g,
    EMOJI_SUGGESTIONS: /:[a-zA-Z0-9_+-]{1,40}$/,
    AFTER_FIRST_LINE_BREAK: /\n.*/g,
    CODE_2FA: /^\d{6}$/,
    ATTACHMENT_ID: /chat-attachments\/(\d+)/,
    UPPERCASE: /(?=.*?[A-Z])/,
    LOWERCASE: /(?=.*?[a-z])/,
    DIGITS: /(?=.*?[0-9])/,
    SPECIALCHAR: /(?=.*?[#?!@$%^&*-])/,
    MINLENGTH: /.{8,}/,
  },
};

export default CONST;
