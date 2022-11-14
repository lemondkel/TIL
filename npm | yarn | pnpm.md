⬜️ npm | yarn | pnpm
================


npm, yarn, pnpm은 모두 Node.js의 패키지 관리자이다.

이를 이용해 자바스크립트로 만들어진 다양한 패키지들을 설치, 삭제뿐 아니라 버전 관리 등도 편하게 할 수 있다.

## ◾️ npm

npm(Node Package Manager)은 노드를 설치할 때 자동적으로 설치되는 기본 패키지 관리자이다.  
가장 많이 사용되는 패키지 관리 툴로, npm과 npm registry로 이루어져 있다.

`
node -v
npm -v
`

노드 설치 후 위 명령어를 통해 npm이 설치된 걸 확인할 수 있다.

## ◾️yarn

yarn은 페이스북에서 만든 Node.js의 패키지 관리자로, npm 과 수행하는 기능은 같다.  
yarn은 npm의 단점을 보완하여 만들어진 관리자 툴로, npm보다 속도가 빠르고, 보완성이 좋다.

`
npm install yarn --global
`

yarn은 npm을 통해 설치하는데, brew를 이용해 설치할 수도 있다.


## ◽️ npm과 yarn 비교

1. yarn은 다운받은 패키지 데이터를 캐시에 저장해, 중복된 데이터는 다운로드하지 않고 캐시에 저장된 파일을 활용하고,여러 개의 패키지를 설치할 때는 병렬로 처리한다.  
 때문에 패키지를 한 번에 하나씩 순차적으로 설치하는 npm에 비해 속도는 훨씬 빠르다.

2. npm은 자동으로 패키지에 포함된 다른 패키지 코드를 실행한다.  
 이로 인해 보안 시스템에 몇 가지 취약성이 발생하며 나중에 심각한 문제가 발생할 수 있다.  
 반면에 yarn은 yarn.lock이나 package.json 파일에 있는 파일만 설치하며, 모든 디바이스에 같은 패키지를 설치하는 것을 보장하여 버전 차이로 발생하는 버그를 방지해 준다.

3. yarn은 디스크 공간 점유율이 높고, npm은 디스크 공간 점유율이 낮아, yarn이 디스크 공간을 더 많이 잡아먹는다.

##### ❗️ 비교만 본다면 yarn이 npm보다 상대적으로 훨씬 좋아 보이지만, npm도 점점 발전하며 단점을 많이 보완해왔기 때문에 현재로썬 둘 다 비슷하다고 봐도 무관하다.


## ◾️pnpm

pnpm은 npm의 설정을 바꿀 필요 없이 바로 사용 가능하고 속도, 안정성 등이 향상된 대체품으로, npm만 있다면 바로 사용이 가능하다.

pnpm 개발자 본 npm과 yarn의 큰 문제는, 프로젝트 간에 사용되는 의존성의 중복 저장이다. yarn이 npm에 비해 속도가 빠르긴 하지만, 둘 모두 node_modules에 flat 하여 관리했다.

이러한 의존성 문제 해결을 위해 호이스팅 방식 대신, 내용 주소화 저장소(Content-addressable-storage)를 도입했다. 이를 사용하면 home 폴더의 (~/.pnpm-store/)에 파일을 저장하는 중첩된 node_modules 폴더가 생성되게 된다. 따라서 의존성의 모든 버전은 해당 폴더에 물리적으로 한 번만 저장되어, 단일 정보 소스를 구성하고, 디스크 공간을 상당히 절약한다.

`
npm i -g pnpm
`

pnpm은 위처럼 npm을 통해 설치가 가능하다.


## ◽️CLI commands 비교

### ▪️패키지 관련 명령어

**ntl** 이란 node task list의 약자로, development 환경에서 유틸리티 도구를 구성하는 패키지 관리 명령어를 나타낸다.

&nbsp;

|----|npm|yarn|pnpm|
|------|---|---|---|
|패키지 설치/업데이트/삭제|npm i -g ntl|yarn global add ntl|pnpm add --global ntl|
|스크립트로 바이너리 실행|ntl|ntl|ntl|
|터미널에서 바이너리 실행|npm exec ntl|yarn ntl|pnpm ntl|
|동적 패키지 실행|npx ntl|N/A|pnpm dlx ntl|

&nbsp;


### ▪️공통 명령어
&nbsp;

|----|npm|yarn|pnpm|
|---------|---|---|---|
|패키지 게시|npm publish|yarn publish|pnpm publish|
|설치된 의존성 나열|npm ls|yarn list|pnpm list|
|오래된 의존성 나열|npm outdated|yarn outdated|pnpm outdated|
|의존성 정보 출력|npm explain nil|yarn why ntl|pnpm why ntl|
|프로젝트 초기화|npm init -y|yarn init -y|pnpm init -y|
|보안 감사 수행|npm audit|yarn audit|pnpm audit|

&nbsp;

### ▪️의존성 관리
&nbsp;

|----|npm|yarn|pnpm
|---------|---|---|---|
|package.json의 의존성 설치|npm install|yarn install|pnpm install|
|package.json의 의존성 업데이트|npm update|yarn upgrade|pnpm update|
|package, json의 의존성 최신으로 업데이트|N/A|yarn upgrade latest|pnpm update latest|
|의존성 업데이트|npm update react|yarn upgrade react|pnpm up react|
|의존성 최신으로 업데이트|npm update react@latest|yarn upgrade react latest|pnpm up -L react|
|개발 의존성 추가|npm i -D babel|yarn add -D babel|pnpm add -D babel|
|런타임 의존성 추가|npm i react|yarn add react|pnpm add react|
|의존성 제거하고 package.json에서 제거|npm install react|yarn remove react|pnpm remove react|
|package.json의 업데이트 없이 의존성 제거|npm uninstall --no--save|N/A|N/A|
