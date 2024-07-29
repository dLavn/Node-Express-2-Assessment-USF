Bug #1: Email validation missing in registration
Bug #2: Authentication does not check for non-existent users
Bug #3: Deleting non-existent user does not return 404
Bug #4: authUser middleware does not verify JWT properly
Bug #5: User update allows changing username
Bug #6: Subtle bug in authUser middleware allows access with invalid JWT
