# VS Code에서 TypeScript 설정하기

> 출처: https://code.visualstudio.com/docs/typescript/typescript-compiling

## TypeScript 컴파일러 설치하기

```bash
npm install -g typescript
```

## tsconfig.json

프로젝트 폴더에 `tsconfig.json` 파일을 생성하고 아래와 같이 입력합니다.

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "sourceMap": true
  }
}
```

이제 `.ts` 확장자 파일에 대해 자동완성 기능과 문법 검사 기능이 동작합니다.

## TypeScript를 JavaScript로 바꾸기

1. `.ts` 파일을 작성합니다.
2. `command` + `shift` + `B` 키를 눌러 `tsc: build - tsconfig.json` 옵션을 선택합니다.
3. TypeScript 빌드를 기본으로 설정합니다.
    - VS Code의 Terminal 메뉴에서 `Configure Default Build Task`를 입력하고, `tsc: build` 옵션을 선택합니다.
    - `.vscode` 폴더에 `tasks.json` 파일이 생성됩니다.
4. 빌드 이슈를 검토합니다.
    - problem matcher를 통해 확인할 수 있습니다.
    - `^` 단축키로 `PROBLEMS` 패널을 열어 확인합니다.
