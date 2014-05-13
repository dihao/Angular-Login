Angular-Login
=============

AngularJS login, register and password retrieval

==========
LOGIN VIEW
==========

The login view allows current members to enter a username and password, which is checked against being valid and that it matches ones already stored in the list of current members.

Input fileds will apply a green border when the text entered passes validation to indicate to the users their details pass validation.

If the details do not pass validation for some reason (not enough characters etc.) relevant error messages will be displayed.

If details are valid but do not match ones already stored, error messages will be displayed.

If all details are valid and have a match the welcome view will be loaded in, where the user can see a lis of current members.

=============
REGISTER VIEW
=============

The register view will allow new accounts to be made using a username, email and password, which if valid will allow users to log in on the login view.

If the details are valid and are not already present in the ones already stored the user will be directed to the login view.

If the details are not valid error messages will be displayed.

If the details are valid but they match ones already stored, error messages will be displayed.

============
WELCOME VIEW
============

The welcome view will be what users see after a successful login.

This view will have a list of current members, which can be filtered by username, type or by using a text input to type a name.

The list of memebers uses images from social media accounts for users.

=======================
PASSWORD RETRIEVAL VIEW
=======================

The password retrieval view will aallow users to retrieve their assword using their username and email combination.

If the user provides the required details they will be displayed with the matching password to those details.

If the details entered are invalid error messages will be displayed.

