# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]: 유안네 옷장
    - navigation [ref=e4]:
      - link "홈" [ref=e5] [cursor=pointer]:
        - /url: /
      - link "로그인" [ref=e6] [cursor=pointer]:
        - /url: /login/
      - link "회원가입" [ref=e7] [cursor=pointer]:
        - /url: /register/
  - main [ref=e8]:
    - heading "회원가입" [level=2] [ref=e9]
    - generic [ref=e10]:
      - list [ref=e11]:
        - listitem [ref=e12]: A user with that username already exists.
      - paragraph [ref=e13]:
        - generic [ref=e14]: "Username:"
        - textbox "Username:" [active] [ref=e15]: MargaretteGleason
        - generic [ref=e16]: Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
      - paragraph [ref=e17]:
        - generic [ref=e18]: "Password:"
        - textbox "Password:" [ref=e19]
      - list [ref=e20]:
        - listitem [ref=e21]: Your password can’t be too similar to your other personal information.
        - listitem [ref=e22]: Your password must contain at least 8 characters.
        - listitem [ref=e23]: Your password can’t be a commonly used password.
        - listitem [ref=e24]: Your password can’t be entirely numeric.
      - paragraph
      - paragraph [ref=e25]:
        - generic [ref=e26]: "Password confirmation:"
        - textbox "Password confirmation:" [ref=e27]
        - generic [ref=e28]: Enter the same password as before, for verification.
      - button "가입하기" [ref=e29] [cursor=pointer]
  - contentinfo [ref=e30]:
    - paragraph [ref=e31]: © 2025 유안네 옷장. All Rights Reserved.
```