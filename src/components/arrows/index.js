import React from 'react'

const ArrowLeft = props => (
  <svg height={18} viewBox='0 0 482.239 482.239' width={16} {...props}>
    <path
      d='M206.812 34.446L0 241.119l206.743 206.674 24.353-24.284L65.929 258.342h416.31v-34.445H65.929L231.165 58.661z'
      fill='#FFF'
    />
  </svg>
)

const ArrowRight = props => (
  <svg height={18} viewBox='0 0 482.238 482.238' width={16} {...props}>
    <path
      d='M275.429 447.793l206.808-206.674-206.74-206.674-24.354 24.287 165.164 165.164H0v34.446h416.306L251.075 423.573z'
      fill='#FFF'
    />
  </svg>
)

export {
  ArrowLeft,
  ArrowRight
}
