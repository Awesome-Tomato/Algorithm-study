# countrySearch_js 프로젝트 모킹을 위한 폴더입니다
목업 역할을 해주는 MSW를 적용하시려면, `countrySearch_js/msw.js` 파일을 스크립트 태그로 불러와주시면 됩니다.
```javascript
<script src="../msw.js"></script>
```

## API 응답 문서
### GET : `/api/search`
#### 요청
- keyword(옵셔널) : `string`

#### 응답
```javascript
[
  'string',
  'string2',
  // ...
]
```

#### 사용 예시
```bash
# 요청
GET /api/search?keyword=kor

# 응답
["South Korea", "North Korea"]
```
