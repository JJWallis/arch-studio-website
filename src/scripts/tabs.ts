const tabList = document.querySelector('[role="tablist"]')
const tabs = [...document.querySelectorAll('[role="tab"]')]

let tabsFocus = 0

tabList.addEventListener('keydown', (e) => {
   const event = e as KeyboardEvent
   const targetBtn = tabs[tabsFocus] as HTMLElement
   const keyRight = 'ArrowRight'
   const keyLeft = 'ArrowLeft'

   if (event.key === keyRight || event.key === keyLeft)
      tabs[tabsFocus].setAttribute('tabindex', '-1')
   if (event.key === keyRight && tabsFocus < tabs.length - 1) tabsFocus++
   if (event.key === keyLeft && tabsFocus > 0) tabsFocus--

   tabs[tabsFocus].setAttribute('tabindex', '0')
   targetBtn.focus()
})
