# React Form Validation Project

A minimal yet comprehensive registration form with client-side validation and success display. Implements core React concepts for form handling without external libraries.

## Key Features

- **Native Validation**: HTML5 validation attributes + custom JavaScript logic
- **Dynamic Fields**: Country-city dependency with auto-populated country codes
- **Security**: Password visibility toggle + secure data handling
- **Responsive UI**: Mobile-first design with dark mode support
- **Data Display**: Dedicated success page with submitted data grid

## Validation Highlights

| Field          | Validation Rules                      |
|----------------|---------------------------------------|
| Name Fields    | Alphabetical, max 15 chars            |
| Email          | RFC 5322 compliant format             |
| Password       | 8+ chars, mixed case, special symbol  |
| Phone          | Country code validation + number      |
| PAN            | 10-char alphanumeric (ABCDE1234F)     |
| Aadhar         | 12-digit numeric format               |

## Usage Flow
1. Complete all required fields with valid data
2. Submit enabled only when all validations pass
3. View submitted data on success page
4. Return to form using navigation button
---
> **Note**: Sensitive fields (password) are never displayed post-submission.