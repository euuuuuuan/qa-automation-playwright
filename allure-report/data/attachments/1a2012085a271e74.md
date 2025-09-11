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
        - listitem [ref=e12]: 해당 사용자 이름은 이미 존재합니다.
      - paragraph [ref=e13]:
        - generic [ref=e14]: "사용자 이름:"
        - textbox "사용자 이름:" [active] [ref=e15]: WarrenTurner
        - generic [ref=e16]: 150자 이하 문자, 숫자 그리고 @/./+/-/_만 가능합니다.
      - paragraph [ref=e17]:
        - generic [ref=e18]: "비밀번호:"
        - textbox "비밀번호:" [ref=e19]
      - list [ref=e20]:
        - listitem [ref=e21]: 다른 개인 정보와 유사한 비밀번호는 사용할 수 없습니다.
        - listitem [ref=e22]: 비밀번호는 최소 8자 이상이어야 합니다.
        - listitem [ref=e23]: 통상적으로 자주 사용되는 비밀번호는 사용할 수 없습니다.
        - listitem [ref=e24]: 숫자로만 이루어진 비밀번호는 사용할 수 없습니다.
      - paragraph
      - paragraph [ref=e25]:
        - generic [ref=e26]: "비밀번호 확인:"
        - textbox "비밀번호 확인:" [ref=e27]
        - generic [ref=e28]: 확인을 위해 이전과 동일한 비밀번호를 입력하세요.
      - button "가입하기" [ref=e29] [cursor=pointer]
  - contentinfo [ref=e30]:
    - paragraph [ref=e31]: © 2025 유안네 옷장. All Rights Reserved.
```