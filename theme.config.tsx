import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 337 88.5" width="182" height="48">
      <g>
        <path fill="#640E0A" d="M56.6,36.5h-8.2c-3.1,0-5.7,0.5-7.7,1.6s-3.5,2.7-4.5,4.8L18.5,76.6c7,5.4,15.7,8.7,25.2,8.7
          c4.5,0,8.8-0.7,12.9-2.1V36.5z"/>
        <path fill="#E3191B" d="M43.7,2.9C21,2.9,2.6,21.3,2.6,44.1c0,7.4,2,14.4,5.4,20.4l13.2-26.9c5-10.8,13.5-16.2,25.3-16.2h24.9v53.1
          C79.7,67,84.9,56.1,84.9,44C84.9,21.3,66.5,2.9,43.7,2.9"/>
      </g>
      <path fill="currentColor" d="M110.7,19.9h19.2V49h-5.5V24.6h-9l-2.2,17.8c-0.2,1.6-0.6,2.8-1.1,3.8c-0.5,0.9-1.2,1.6-2.1,2.1c-0.9,0.5-2,0.7-3.4,0.7
        h-3.4v-4.6h2.5c0.7,0,1.3-0.2,1.6-0.5c0.4-0.3,0.6-0.9,0.7-1.7L110.7,19.9z M145.3,43.7l-5.8-15.2H134l8.8,20.5l-0.5,1.2
        c-0.3,0.8-0.8,1.4-1.3,1.7c-0.6,0.4-1.2,0.5-2.1,0.5h-2.4v4.4h2.6c2,0,3.6-0.5,4.8-1.4c1.2-0.9,2.2-2.3,3-4.1l9.7-22.8h-5.4
        L145.3,43.7z M179.7,34.2c0.7,1.4,1.1,3,1,5c0,2.1-0.4,3.9-1.3,5.5c-0.8,1.6-2.1,2.8-3.7,3.7c-1.6,0.9-3.5,1.3-5.6,1.3
        c-3.6,0-6.3-1.2-8.2-3.7c-1.9-2.5-2.9-6.1-2.9-10.7c0-4.6,0.9-8,2.5-10.3c1.7-2.3,4.3-3.6,7.9-4.1l8.9-1.1l0.6,4.4l-8.7,1.2
        c-1.5,0.2-2.7,0.6-3.6,1.3c-0.8,0.7-1.5,1.7-1.9,3c-0.3,1.1-0.6,2.5-0.7,4.2c0.2-0.4,0.5-0.8,0.8-1.2c0.8-1,1.8-1.6,2.9-2.2
        c1.1-0.6,2.4-0.8,3.8-0.8c2,0,3.6,0.4,5,1.2C177.9,31.7,178.9,32.8,179.7,34.2z M175.1,39.5c0-1.8-0.4-3.1-1.3-4.1
        c-0.9-0.9-2.1-1.4-3.8-1.4c-1,0-1.8,0.2-2.6,0.6c-0.8,0.4-1.5,1-2,1.7c-0.4,0.5-0.7,1.1-0.9,1.8c0.1,2.2,0.5,3.8,1.2,5
        c0.9,1.3,2.2,2,4.1,2c1.7,0,3.1-0.5,4-1.5C174.8,42.6,175.2,41.2,175.1,39.5z M206.5,33c1,1.6,1.4,3.5,1.4,5.7s-0.5,4.1-1.4,5.7
        c-0.9,1.6-2.1,2.9-3.7,3.8c-1.5,0.9-3.3,1.4-5.2,1.4c-1.8,0-3.3-0.3-4.6-1.1c-0.9-0.5-1.7-1.3-2.3-2.1v10.5h-5.4V28.5h5.3v3.1
        c0.1-0.2,0.1-0.3,0.2-0.4c0.7-1,1.6-1.9,2.8-2.5c1.2-0.6,2.5-0.9,4-0.9c1.8,0,3.5,0.5,5.1,1.4C204.2,30.2,205.4,31.4,206.5,33z
        M202.2,38.7c0-1.3-0.2-2.4-0.7-3.4s-1.2-1.8-2-2.3s-1.8-0.8-3-0.8c-1.1,0-2.1,0.3-3,0.8c-0.9,0.6-1.5,1.3-2.1,2.3
        c-0.6,1-0.8,2.1-0.8,3.5v2.7c0.1,0.5,0.4,1,0.7,1.4c0.5,0.7,1.2,1.3,2.1,1.7c0.9,0.4,1.8,0.6,2.8,0.6c1.2,0,2.2-0.3,3.1-0.8
        c0.9-0.6,1.6-1.3,2.1-2.3S202.1,40,202.2,38.7z M217.2,41.7V28.5h-5.1V49h4.7l10-13.2V49h5.1V28.5h-4.7L217.2,41.7z M249.9,41.5
        l-6.8-13h-5.5V49h4.6V35.7l5.9,11.2h3.4l6-11.5V49h4.8V28.5h-5.7L249.9,41.5z M286.9,33c0.8,1.6,1.3,3.5,1.3,5.6v0.2v1.6h-15.9
        c0.1,0.7,0.4,1.3,0.7,1.9c0.6,1,1.4,1.8,2.4,2.3s2.2,0.8,3.5,0.8c2.5,0,4.5-0.9,6.2-2.8l2.9,3.3c-1.1,1.2-2.4,2.1-4,2.7
        c-1.7,0.7-3.4,1-5.4,1c-2.3,0-4.4-0.5-6.2-1.4c-1.8-0.9-3.2-2.2-4.2-3.8c-1-1.7-1.5-3.6-1.5-5.7c0-2.2,0.5-4.1,1.5-5.7
        s2.4-2.9,4-3.8c1.6-0.9,3.5-1.4,5.6-1.4c2,0,3.8,0.5,5.4,1.4C284.8,30.1,286,31.4,286.9,33z M282.9,37c-0.1-0.7-0.3-1.4-0.6-2
        c-0.4-1-1-1.7-1.8-2.2s-1.7-0.8-2.8-0.8c-1.1,0-2.1,0.3-2.9,0.8c-0.8,0.6-1.5,1.3-1.9,2.4c-0.3,0.5-0.5,1.1-0.6,1.8H282.9z
        M312.5,28.5h-6.4l-8,9v-9h-5.4V49h5.4v-9.3l8.5,9.3h6.8l-9.8-10.5L312.5,28.5z M330.8,42.2c-0.7,0.9-1.4,1.6-2.3,2.1
        c-0.9,0.5-1.9,0.8-3.1,0.8s-2.2-0.3-3.1-0.8c-0.9-0.5-1.6-1.3-2.1-2.3s-0.8-2.1-0.8-3.3s0.3-2.4,0.8-3.3c0.5-1,1.2-1.7,2.1-2.3
        c0.9-0.5,1.9-0.8,3.1-0.8s2.2,0.3,3.1,0.8c0.9,0.5,1.6,1.2,2.2,2.1L334,32c-1.1-1.3-2.3-2.3-3.8-3s-3.2-1.1-5-1.1
        c-2.1,0-4.1,0.5-5.8,1.4c-1.7,0.9-3,2.2-4,3.9c-1,1.6-1.5,3.5-1.5,5.6c0,2.1,0.5,4,1.5,5.6c1,1.6,2.3,2.9,4,3.9
        c1.7,0.9,3.6,1.4,5.7,1.4c1.9,0,3.6-0.4,5.1-1.1c1.5-0.7,2.8-1.7,3.9-3.1L330.8,42.2z"/>
      <path fill="currentColor" d="M112.3,65.1H106l-0.6,5.2c-0.1,0.4-0.1,0.8-0.2,1c-0.1,0.2-0.2,0.4-0.3,0.5c-0.2,0.1-0.4,0.1-0.6,0.1h-0.7v3.8h1.8v-2.2h6.3
        v2.2h1.8v-3.8h-1.2V65.1z M107,71.7c0.1-0.3,0.2-0.7,0.3-1.3l0.5-3.8h2.7v5.3h-3.6C106.9,71.8,107,71.8,107,71.7z M116.3,65h6.4v8.4
        h-1.9v-6.9h-2.9l-0.5,4.7c-0.1,0.8-0.3,1.4-0.7,1.7c-0.4,0.3-0.9,0.5-1.7,0.5h-0.8v-1.6h0.6c0.3,0,0.5-0.1,0.7-0.2
        c0.2-0.1,0.2-0.4,0.3-0.8L116.3,65z M126.5,65.4c-0.5,0.2-0.9,0.5-1.2,0.9c-0.3,0.4-0.4,0.9-0.4,1.4c0,0.8,0.4,1.4,0.9,1.9
        c0.3,0.3,0.7,0.5,1.2,0.6l-2.5,3.2h2.1l2.3-3.1h1.5v3.1v0.1h1.8v-8.4h-4C127.5,65.1,127,65.2,126.5,65.4z M130.4,66.5v2.4h-2.1
        c-0.5,0-0.8-0.1-1.1-0.3c-0.3-0.2-0.4-0.5-0.4-0.9c0-0.4,0.1-0.7,0.4-0.9c0.3-0.2,0.7-0.3,1.1-0.3H130.4z M144.9,65.3
        c-0.6-0.4-1.3-0.6-2.1-0.6c-0.6,0-1.1,0.2-1.6,0.4c-0.5,0.2-0.9,0.6-1.2,1c-0.1,0.1-0.1,0.2-0.2,0.4V65h-1.9v11.7h1.9h0.1v-4.3
        c0.3,0.3,0.5,0.6,0.9,0.8c0.5,0.3,1.2,0.5,1.9,0.5c0.8,0,1.6-0.2,2.2-0.6c0.6-0.4,1.1-0.9,1.5-1.6c0.4-0.7,0.6-1.4,0.6-2.3
        c0-0.9-0.2-1.6-0.6-2.3C146,66.2,145.5,65.7,144.9,65.3z M144.8,70.7c-0.2,0.4-0.5,0.7-0.9,1c-0.4,0.3-0.9,0.4-1.4,0.4
        s-0.9-0.1-1.3-0.3c-0.4-0.2-0.8-0.5-1-0.8c-0.1-0.2-0.2-0.4-0.3-0.5v-1.2c0-0.6,0.1-1.2,0.3-1.6c0.2-0.4,0.5-0.7,0.9-1
        c0.4-0.3,0.9-0.4,1.4-0.4c0.6,0,1,0.2,1.4,0.4c0.4,0.2,0.7,0.6,0.9,1c0.2,0.5,0.3,1,0.3,1.5C145.1,69.8,145,70.3,144.8,70.7z
        M155.6,66.2c-0.3-0.5-0.8-0.9-1.4-1.2c-0.6-0.3-1.3-0.4-2.1-0.4c-0.7,0-1.4,0.1-2,0.4c-0.6,0.3-1.1,0.6-1.6,1.1l1.1,1.2
        c0.3-0.3,0.7-0.6,1.1-0.8c0.4-0.2,0.9-0.3,1.4-0.3c0.6,0,1.2,0.1,1.6,0.5c0.4,0.4,0.6,0.9,0.6,1.5h-2.1c-0.8,0-1.5,0.1-2.1,0.3
        c-0.6,0.2-1.1,0.5-1.4,0.9c-0.3,0.4-0.5,0.9-0.5,1.5c0,0.5,0.1,1,0.4,1.4c0.2,0.4,0.6,0.7,1.1,1s1.1,0.4,1.7,0.4
        c0.7,0,1.4-0.2,2-0.4c0.4-0.2,0.7-0.5,1-0.8v0.9h1.7V68C156.1,67.3,155.9,66.7,155.6,66.2z M153.2,72c-0.4,0.2-0.8,0.3-1.3,0.3
        s-0.9-0.2-1.2-0.4c-0.3-0.3-0.5-0.6-0.5-1c0-0.4,0.2-0.8,0.6-1c0.4-0.3,0.9-0.4,1.6-0.4h1.9V71c0,0.1-0.1,0.1-0.1,0.2
        C153.9,71.5,153.6,71.8,153.2,72z M164.5,69.9c0.3,0.4,0.5,0.8,0.5,1.3s-0.2,1-0.5,1.4c-0.3,0.4-0.8,0.7-1.4,1c-0.6,0-1.3,0.1-2,0.1
        c-0.7,0-1.4-0.1-2.1-0.4s-1.3-0.6-1.7-1.1l1-1.1c0.7,0.7,1.6,1.1,2.7,1.1c0.6,0,1.2-0.1,1.5-0.3c0.4-0.2,0.6-0.5,0.6-0.9
        c0-0.7-0.6-1.1-1.9-1.1h-1.7v-1.3h1.7c0.5,0,0.9-0.1,1.2-0.3s0.4-0.4,0.4-0.8c0-0.3-0.2-0.6-0.5-0.8c-0.3-0.2-0.8-0.3-1.4-0.3
        c-1,0-1.8,0.4-2.5,1.1l-1-1.2c0.9-1,2.1-1.4,3.6-1.4c0.7,0,1.3,0.1,1.9,0.3c0.5,0.2,1,0.5,1.3,0.9s0.5,0.8,0.5,1.3
        c0,0.4-0.1,0.8-0.4,1.2c-0.3,0.3-0.5,0.5-0.9,0.6C163.9,69.4,164.2,69.6,164.5,69.9z M173.7,65.3c-0.6-0.4-1.3-0.6-2.1-0.6
        c-0.6,0-1.1,0.2-1.6,0.4c-0.5,0.2-0.9,0.6-1.2,1c-0.1,0.1-0.1,0.2-0.2,0.4V65h-1.9v11.7h1.9h0.1v-4.3c0.3,0.3,0.5,0.6,0.9,0.8
        c0.5,0.3,1.2,0.5,1.9,0.5c0.8,0,1.6-0.2,2.2-0.6c0.6-0.4,1.1-0.9,1.5-1.6c0.4-0.7,0.6-1.4,0.6-2.3c0-0.9-0.2-1.6-0.6-2.3
        C174.8,66.2,174.3,65.7,173.7,65.3z M173.6,70.7c-0.2,0.4-0.5,0.8-0.9,1c-0.4,0.3-0.9,0.4-1.4,0.4s-0.9-0.1-1.3-0.3
        c-0.4-0.2-0.7-0.4-1-0.8c-0.1-0.2-0.2-0.4-0.3-0.5v-1.2c0-0.6,0.1-1.2,0.3-1.6c0.2-0.4,0.5-0.7,0.9-1c0.4-0.3,0.9-0.4,1.4-0.4
        c0.6,0,1,0.2,1.4,0.4c0.4,0.2,0.7,0.5,0.9,1s0.3,1,0.3,1.5C173.9,69.8,173.8,70.3,173.6,70.7z M184.4,66.2c-0.3-0.5-0.8-0.9-1.4-1.2
        c-0.6-0.3-1.3-0.4-2.1-0.4c-0.7,0-1.4,0.1-2,0.4c-0.6,0.3-1.1,0.6-1.6,1.1l1.1,1.2c0.3-0.3,0.7-0.6,1.1-0.8c0.4-0.2,0.9-0.3,1.4-0.3
        c0.6,0,1.2,0.1,1.6,0.5c0.4,0.4,0.6,0.9,0.6,1.5H181c-0.8,0-1.5,0.1-2.1,0.3c-0.6,0.2-1.1,0.5-1.4,0.9c-0.3,0.4-0.5,0.9-0.5,1.5
        c0,0.5,0.1,1,0.4,1.4c0.2,0.4,0.6,0.7,1.1,1s1.1,0.4,1.7,0.4c0.7,0,1.4-0.2,2-0.4c0.4-0.2,0.7-0.5,1-0.8v0.9h1.7V68
        C184.9,67.3,184.7,66.7,184.4,66.2z M182,72c-0.4,0.2-0.8,0.3-1.3,0.3s-0.9-0.2-1.2-0.4c-0.3-0.3-0.5-0.6-0.5-1c0-0.4,0.2-0.8,0.6-1
        c0.4-0.3,0.9-0.4,1.6-0.4h1.9V71c0,0.1-0.1,0.1-0.1,0.2C182.7,71.5,182.4,71.8,182,72z M193.7,66.1c-0.6-0.3-1.3-0.5-2.1-0.5
        c-0.6,0-1.1,0.1-1.6,0.3c-0.5,0.2-1,0.5-1.3,0.9c-0.2,0.2-0.3,0.3-0.4,0.5c0-0.8,0.1-1.3,0.3-1.8c0.2-0.6,0.4-1,0.8-1.3
        c0.4-0.3,0.9-0.5,1.5-0.6l3.6-0.6l-0.2-1.6l-3.7,0.5c-1.4,0.2-2.4,0.8-3.1,1.7c-0.7,0.9-1,2.3-1,4.2s0.4,3.4,1.2,4.4
        s1.9,1.5,3.3,1.5c0.9,0,1.6-0.2,2.5-0.3c0.6-0.3,1.2-0.8,1.5-1.5c0.3-0.7,0.5-1.4,0.5-2.3c0-0.8-0.2-1.5-0.5-2.1
        C194.7,66.9,194.3,66.4,193.7,66.1z M192.8,71.4c-0.4,0.5-1,0.7-1.8,0.7c-0.9,0-1.5-0.3-1.8-1c-0.4-0.5-0.5-1.3-0.6-2.3
        c0.1-0.3,0.2-0.6,0.4-0.8c0.2-0.3,0.5-0.6,0.9-0.8c0.4-0.2,0.8-0.3,1.2-0.3c0.7,0,1.3,0.2,1.7,0.7c0.4,0.5,0.6,1.1,0.6,1.9
        S193.2,70.9,192.8,71.4z M203.7,65.3c-0.7-0.4-1.5-0.6-2.4-0.6c-0.9,0-1.7,0.2-2.4,0.6s-1.2,0.9-1.6,1.6c-0.4,0.7-0.6,1.4-0.6,2.3
        c0,0.9,0.2,1.6,0.6,2.3c0.4,0.7,0.9,1.2,1.6,1.6c0.7,0.4,1.5,0.6,2.4,0.6c0.9,0,1.7-0.2,2.4-0.6c0.7-0.4,1.2-0.9,1.6-1.6
        c0.4-0.7,0.6-1.4,0.6-2.3c0-0.9-0.2-1.6-0.6-2.3C204.9,66.2,204.4,65.7,203.7,65.3z M203.6,70.7c-0.2,0.4-0.5,0.8-0.9,1
        c-0.4,0.3-0.9,0.4-1.4,0.4s-1-0.1-1.4-0.4c-0.4-0.2-0.7-0.6-0.9-1c-0.2-0.4-0.3-0.9-0.3-1.5c0-0.6,0.1-1.1,0.3-1.5
        c0.2-0.4,0.5-0.8,0.9-1c0.4-0.3,0.9-0.4,1.4-0.4s1,0.2,1.4,0.4c0.4,0.2,0.7,0.6,0.9,1c0.2,0.4,0.3,0.9,0.3,1.5
        C203.9,69.8,203.8,70.3,203.6,70.7z M206.6,65h7.7v1.5h-2.8v6.9h-1.9v-6.9h-3V65z M221.4,65h1.9v8.4h-1.9V70
        c-0.1,0.1-0.3,0.1-0.4,0.2c-0.3,0.2-0.7,0.3-1.1,0.3c-0.4,0-0.7,0.3-1.1,0.3c-1.1,0-1.9-0.3-2.5-0.9c-0.6-0.6-0.9-1.4-0.9-2.5V65
        h1.9v2.2c0,0.7,0.2,1.2,0.5,1.5c0.3,0.3,0.8,0.4,1.5,0.4c0.7,0,1.4-0.2,2.1-0.6V65z M232,65h1.6v8.4h-1.8v-5.9l-4.5,5.8h-1.6V65h1.8
        v5.8L232,65z M240,69.1l4.3,4.3h-2.5l-3.8-3.9v3.9h-1.9V65h1.9v3.7l3.6-3.7h2.3L240,69.1z M251.5,65.3c-0.7-0.4-1.5-0.6-2.4-0.6
        c-0.9,0-1.7,0.2-2.4,0.6s-1.2,0.9-1.6,1.6c-0.4,0.7-0.6,1.4-0.6,2.3c0,0.9,0.2,1.6,0.6,2.3c0.4,0.7,0.9,1.2,1.6,1.6
        c0.7,0.4,1.5,0.6,2.4,0.6c0.9,0,1.7-0.2,2.4-0.6c0.7-0.4,1.2-0.9,1.6-1.6c0.4-0.7,0.6-1.4,0.6-2.3c0-0.9-0.2-1.6-0.6-2.3
        C252.7,66.2,252.2,65.7,251.5,65.3z M251.4,70.7c-0.2,0.4-0.5,0.8-0.9,1c-0.4,0.3-0.9,0.4-1.4,0.4s-1-0.1-1.4-0.4
        c-0.4-0.2-0.7-0.6-0.9-1c-0.2-0.4-0.3-0.9-0.3-1.5c0-0.6,0.1-1.1,0.3-1.5c0.2-0.4,0.5-0.8,0.9-1c0.4-0.3,0.9-0.4,1.4-0.4
        s1,0.2,1.4,0.4c0.4,0.2,0.7,0.6,0.9,1c0.2,0.4,0.3,0.9,0.3,1.5C251.7,69.8,251.6,70.3,251.4,70.7z M262.8,69.5
        c-0.2-0.2-0.6-0.5-1-0.6c0.3-0.1,0.5-0.4,0.7-0.6c0.3-0.3,0.4-0.7,0.4-1.1c0-0.7-0.3-1.2-0.8-1.6c-0.6-0.4-1.3-0.6-2.2-0.6h-4.3v8.2
        h4.5c0.6,0,1.1-0.1,1.6-0.3c0.5-0.2,0.9-0.4,1.2-0.8c0.3-0.4,0.4-0.8,0.4-1.3S263.1,69.8,262.8,69.5z M260.5,66.7
        c0.2,0.1,0.3,0.4,0.3,0.7c0,0.4-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-1,0.3h-2.4v-2h2.4C260,66.5,260.3,66.5,260.5,66.7z M260.9,71.7
        c-0.3,0.2-0.7,0.3-1.2,0.3h-2.6v-2.2h2.6c0.6,0,0.9,0.1,1.2,0.3s0.4,0.4,0.4,0.8C261.3,71.2,261.2,71.5,260.9,71.7z"/>
      </svg>
    </>
  ),
  docsRepositoryBase: 'https://github.com/Lubrimex/lubricomarket-api-docs',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Лубрикомаркет API'
      }
    }
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://lubricomarket.ru/" target="_blank">
          ООО «Лубримекс»
        </a>
      </span>
    )
  },
  toc: {
    title: "На этой странице"
  },
  /* editLink: {
    text: "Редактировать эту страницу на GitHub →"
  }, */
  editLink: {
    text: null
  },
  feedback: {
    content: "Вопросы. Обратная связь — titovai@gkunion.ru",
    labels: "",
    useLink:() => "mailto:titovai@gkunion.ru"
  },
  search: {
    placeholder: "Поиск по документации",

  }
}

export default config