# QlnsX 

## Page 1: Login Page (View1)

- User Input:

Users input their email addresses on the login page.
- User Verification:
A user verification process begins with a GET request to the user API.
- If the user does not exist:
A new user is created with a randomly generated password.
The user is promptly redirected to Page 3.

### Page 2: Set Password (For Existing Users)(View3)

- Password Setting:

Existing users are redirected to Page 2, where they set their password.
- Password Submission:
Users enter and submit their desired password.
- Redirect to Page 3:
Upon completion, users are redirected to Page 3.

### Page 3: Insurance Information(View2)
- Accessing Insurance Data:
Page 3 leverages a GET request to the insurance API.
Users can view a comprehensive list of insurance information, though some details may currently be unavailable (displaying an empty array).