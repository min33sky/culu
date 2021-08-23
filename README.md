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
