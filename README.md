# QlnsX 

### Page 1: Login Page (View1)

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
If users enter their exist password then they will redircet to page3 but can see the insurance data(blank erray).
But if users enter and submit their desired password, then they will redirect to page3 but get error message.
- Redirect to Page 3:
Upon completion, users are redirected to Page 3.

### Page 3: Insurance Information(View2)
- Accessing Insurance Data:
Page 3 leverages a GET request to the insurance API.
Users can view a comprehensive list of insurance information, though some details may currently be unavailable (displaying an empty array).

### All three view Images

View1:
<div align="center">
  <img width="961" alt="view1" src="https://github.com/Dayasuvagiya/hello-qlnsx/assets/130157117/106eaa45-23ec-434c-8392-e3e9ed17a29d">
</div>

View2:
<div align="center">
  <img width="961" alt="view2" src="https://github.com/Dayasuvagiya/hello-qlnsx/assets/130157117/eb8f1ee0-5519-4cd2-b05b-90d30aeb6fef">
</div>

View3:
<div align="center">
  <img width="961" alt="view3" src="https://github.com/Dayasuvagiya/hello-qlnsx/assets/130157117/fc552921-04f6-4480-a6e5-6e1a6e6a82e0">
</div>


### API overview

Usercreate: 
<div align="center">
  <img width="1470" alt="create_user" src="https://github.com/Dayasuvagiya/hello-qlnsx/assets/130157117/5d6ba347-acd6-4fc0-80a9-cd544be8392a">
</div>

Useralreadyexist: 
<div align="center">
  <img width="1470" alt="use_exist" src="https://github.com/Dayasuvagiya/hello-qlnsx/assets/130157117/766eb281-4b4d-439c-9a4f-d62dfb8f6b89">
</div>

Insurance Auth: 
<div align="center">
  <img width="1470" alt="insurance_api" src="https://github.com/Dayasuvagiya/hello-qlnsx/assets/130157117/c3969e20-02b6-435f-9875-bb5bf6e3f5d6">
</div>


