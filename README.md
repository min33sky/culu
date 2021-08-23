# Culu

> Hulu clone

## Modules

- nextjs
- tailwindcss

## Coding Note

### group-hover:animate-bounce 적용이 안되는 문제

tailwindcss `v2.2.7`(현 시점 최신 버전)에서는 저 css가 작동하지 않는다.
추가로 tailwindcss.config.js에 animation의 동작을 위한 속성을 추가해야 한다.

```js
module.exports = {
  mode: 'jit',
  variants: {
    extend: {
      animation: ['group', 'group-hover', 'hover', 'focus'],
    },
  },
};
```

### 전체 배경과 같은 컴포넌트 요소 외부를 스타일링 하고 싶다면?

global.css에 다음과 같이 적용

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply text-gray-300 bg-[#06202A]; // bg-[] 방식은 JIT compiler 적용 시 가능
  }
}
```

### 스크롤바 숨기기

[Link](tailwind-scrollbar-hide)

```js
// tailwind.config.js
 plugins: [require('tailwind-scrollbar-hide')],
```
