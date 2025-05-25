export const regex = Object.freeze({
  // Email patterns
  email: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
  email_strict:
    "^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\\.){1,8}[a-zA-Z]{2,63}$",

  // Date patterns
  date_YYYY_MM_DD: "^\\d{4}-\\d{2}-\\d{2}$",
  date_DD_MM_YYYY:
    "^(0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[012])[-/.](19|20)\\d\\d$",
  time_24hr: "^([01]?[0-9]|2[0-3]):[0-5][0-9]$",
  datetime_ISO:
    "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,3})?(Z|[+-]\\d{2}:?\\d{2})?$",

  // URL and web-related
  url: "^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([/\\w \\.-]*)*\\/?$",
  url_strict: "^(https?:\\/\\/)?([\\w-]+\\.)+[\\w-]+(\\/[\\w- ./?%&=]*)?$",
  domain: "^([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\\.)+[a-zA-Z]{2,}$",
  slug: "^[a-z0-9]+(?:-[a-z0-9]+)*$",

  // Phone numbers
  phone_IN: "^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[789]\\d{9}$",
  phone_US: "^(\\+?1[-.]?)?\\(?([0-9]{3})\\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$",
  phone_international: "^\\+(?:[0-9] ?){6,14}[0-9]$",
  phone_IN_US: "^(\\+91|\\+1)-?\\d{10}$",

  // Numbers and currencies
  number: "^-?\\d*\\.?\\d+$",
  integer: "^-?\\d+$",
  decimal: "^-?\\d*\\.\\d+$",
  positive_number: "^\\d*\\.?\\d+$",
  currency: "^\\$?\\d{1,3}(,?\\d{3})*(\\.\\d{2})?$",
  percentage: "^-?\\d*\\.?\\d+%$",

  // User credentials
  username: "^[a-zA-Z0-9]{3,16}$",
  username_strict: "^[a-zA-Z0-9_-]{3,32}$",
  password:
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
  password_complex:
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,32}$",
  onlyAlphabates: "^[a-zA-Z\\s]+$",

  // Location and addresses
  zipcode_US: "^\\d{5}(-\\d{4})?$",
  zipcode_UK: "^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$",
  latitude: "^-?([1-8]?[0-9]\\.{1}\\d+|90\\.{1}0+)$",
  longitude: "^-?((1?[0-7]?|[1-9]?)\\d\\.{1}\\d+|180\\.{1}0+)$",

  // Web colors
  hex_color: "^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$",
  rgb_color:
    "^rgb\\((0|255|25[0-4]|2[0-4]\\d|1\\d\\d|0?\\d?\\d),(0|255|25[0-4]|2[0-4]\\d|1\\d\\d|0?\\d?\\d),(0|255|25[0-4]|2[0-4]\\d|1\\d\\d|0?\\d?\\d)\\)$",

  // File paths and names
  file_path: "^(.+)/([^/]+)$",
  file_extension: "\\.([0-9a-z]+)(?:[?#]|$)",

  // Common data formats
  ssn_US: "^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$",
  credit_card:
    "^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\\d{3})\\d{11})$",
  ip_address:
    "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$",
  ipv6_address:
    "^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$",

  // Text formatting
  alpha: "^[a-zA-Z]+$",
  alphanumeric: "^[a-zA-Z0-9]+$",
  alphanumeric_space: "^[a-zA-Z0-9 ]+$",
  name: "^[a-zA-Z\\s'.-]{2,}$",
  html_tag: "<[^>]*>",
  markdown_link: "\\[([^\\[\\]]*?)\\]\\((.*?)\\)",

  // Social media
  twitter_username: "^@?([a-zA-Z0-9_]){1,15}$",
  instagram_username: "^(?!.*\\.\\.)(?!.*\\.$)[^\\W][\\w.]{0,29}$",
  hashtag: "#[\\w-]+",

  // Programming
  variable_name: "^[a-zA-Z_$][a-zA-Z0-9_$]*$",
  json_property: '"([^"\\\\]|\\\\.)*"\\s*:\\s*',

  fileNameReplacer: "/[s.,]/g",
  // Input Field Validation Patterns
  input_validation: {
    // Text Input Patterns
    text: {
      // Basic text validation - letters, numbers, spaces, common punctuation
      basic: "^[\\w\\s.,!?-]{1,}$",

      // Letters only (with spaces)
      letters_only: "^[A-Za-z\\s]{1,}$",

      // Letters and numbers only (with spaces)
      alphanumeric: "^[A-Za-z0-9\\s]{1,}$",

      // Single line text (no newlines)
      single_line: "^[^\\n\\r]{1,}$",

      // Multi-word text (ensures at least two words)
      multi_word: "^[A-Za-z]+(?:\\s+[A-Za-z]+){1,}$",

      // Limited length text (example: 3-50 characters)
      length_limited: "^.{3,50}$",

      // No special characters
      no_special: "^[A-Za-z0-9\\s]{1,}$",

      // With limited special characters
      limited_special: "^[A-Za-z0-9\\s@!#$%&*()_+-=\\[\\]{}|;:,.<>?]{1,}$",
    },

    // Name Input Patterns
    name: {
      // Basic name (letters, spaces, hyphens, apostrophes)
      basic: "^[A-Za-z\\s'-]{2,}$",

      // First name (2-25 characters)
      first_name: "^[A-Za-z\\s]{2,25}$",

      // Last name (allows compound names)
      last_name: "^[A-Za-z\\s'-]{2,35}$",

      // Full name (ensures at least two words)
      full_name: "^[A-Za-z'-]+(?:\\s+[A-Za-z'-]+){1,}$",

      // Company name
      company_name: "^[A-Za-z0-9\\s&'-,.()]{2,100}$",
    },

    // Number Input Patterns
    number: {
      // Whole numbers only
      whole: "^\\d+$",

      // Decimal numbers
      decimal: "^\\d*\\.?\\d+$",

      // Negative and positive numbers
      signed: "^-?\\d*\\.?\\d+$",

      // Phone number formats
      phone: {
        // International format with optional country code
        international:
          "^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$",

        // US format
        us: "^(\\+1|1)?[-.]?\\(?[0-9]{3}\\)?[-.]?[0-9]{3}[-.]?[0-9]{4}$",

        // Extension allowed
        with_extension:
          "^(\\+\\d{1,3}[- ]?)?\\d{10}(\\s?ext\\.?\\s?\\d{1,5})?$",
      },

      // Currency amounts
      currency: {
        // Basic (allows decimals)
        basic: "^\\d+(\\.\\d{2})?$",

        // With optional thousands separators
        formatted: "^\\$?\\d{1,3}(,?\\d{3})*(\\.\\d{2})?$",

        // Negative amounts allowed
        with_negative: "^-?\\$?\\d{1,3}(,?\\d{3})*(\\.\\d{2})?$",
      },

      // Range validations
      range: {
        // 0-100
        percentage: "^100$|^\\d{1,2}$|^\\d{1,2}\\.\\d{1,2}$",

        // 1-5 rating
        rating: "^[1-5]$",

        // Custom range (example: 0-999)
        custom: "^(?:999|[1-9]\\d{0,2})$",
      },
    },

    // Date Input Patterns
    date: {
      // YYYY-MM-DD
      iso: "^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$",

      // MM/DD/YYYY
      us: "^(0[1-9]|1[0-2])/(0[1-9]|[12]\\d|3[01])/\\d{4}$",

      // DD/MM/YYYY
      european: "^(0[1-9]|[12]\\d|3[01])/(0[1-9]|1[0-2])/\\d{4}$",

      // Time HH:MM (24hr)
      time_24: "^([01]\\d|2[0-3]):([0-5]\\d)$",

      // Time HH:MM AM/PM
      time_12: "^(0?[1-9]|1[0-2]):[0-5][0-9]\\s?(AM|PM|am|pm)$",
    },

    // Web Related Input Patterns
    web: {
      // URL with optional protocol
      url: "^(https?:\\/\\/)?([\\w\\-]+\\.)+[\\w\\-]+(\\/[\\w\\-\\.\\/?\\&=]*)?$",

      // Domains only
      domain: "^([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\\.)+[a-zA-Z]{2,}$",

      // Social media handles
      social: {
        // Twitter handle
        twitter: "^@?[A-Za-z0-9_]{1,15}$",

        // Instagram handle
        instagram: "^[A-Za-z0-9._]{1,30}$",

        // LinkedIn public URL
        linkedin: "^[A-Za-z0-9-]{3,100}$",
      },
    },

    // File Input Patterns
    file: {
      // Image files
      image: "\\.(jpg|jpeg|png|gif|webp)$",

      // Document files
      document: "\\.(pdf|doc|docx|txt|rtf)$",

      // Video files
      video: "\\.(mp4|mov|avi|wmv)$",

      // Audio files
      audio: "\\.(mp3|wav|ogg|m4a)$",
    },

    // Address Input Patterns
    address: {
      // Street address
      street: "^\\d+\\s+[A-Za-z0-9\\s.-]+$",

      // Apartment/Suite number
      unit: "^(#|Apt|Suite|Unit)\\s*[A-Za-z0-9-]+$",

      // City name
      city: "^[A-Za-z\\s'-]+$",

      // State code (US)
      state: "^[A-Z]{2}$",

      // ZIP/Postal codes
      postal: {
        us: "^\\d{5}(-\\d{4})?$",
        canada: "^[A-Za-z]\\d[A-Za-z]\\s?\\d[A-Za-z]\\d$",
        uk: "^[A-Z]{1,2}\\d[A-Z\\d]?\\s?\\d[A-Z]{2}$",
      },
    },

    // Custom Input Patterns
    custom: {
      // Password strength levels
      password: {
        // Basic (8+ chars, 1 upper, 1 lower, 1 number)
        basic: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,}$",

        // Medium (8+ chars, 1 upper, 1 lower, 1 number, 1 special)
        medium:
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",

        // Strong (12+ chars, 1 upper, 1 lower, 1 number, 1 special)
        strong:
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{12,}$",
      },

      // Credit card validation
      credit_card: {
        // Any card (basic format check)
        any: "^\\d{13,19}$",

        // Visa
        visa: "^4\\d{12}(?:\\d{3})?$",

        // Mastercard
        mastercard: "^5[1-5]\\d{14}$",

        // American Express
        amex: "^3[47]\\d{13}$",
      },
    },
  },
});



// Usage examples:
export const  validateInput = (value:any, pattern:any) => new RegExp(pattern).test(value);

