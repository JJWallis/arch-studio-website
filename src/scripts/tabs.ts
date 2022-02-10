const tabList = document.querySelector('[role="tablist"]')
const tabs = document.querySelectorAll('[role="tab"]')
let tabsFocus = 0

function changeTabFocus(e: Event) {
   const key = (e as KeyboardEvent).key
   const targetBtn = tabs[tabsFocus] as HTMLElement
   const keyRight = 'ArrowRight'
   const keyLeft = 'ArrowLeft'

   if (key === keyRight || key === keyLeft)
      tabs[tabsFocus].setAttribute('tabindex', '-1')
   if (key === keyRight && tabsFocus < tabs.length - 1) tabsFocus++
   if (key === keyLeft && tabsFocus > 0) tabsFocus--

   tabs[tabsFocus].setAttribute('tabindex', '0')
   targetBtn.focus()
}

function handleTabClick(e: Event) {
   const target = e.target as HTMLElement
   const hiddenContent = target
      .closest('[role="tab"]')
      .getAttribute('aria-controls')
   const hiddenContentBody = document.getElementById(hiddenContent)
   // const hiddenContentImage = document.getElementById(hiddenContent)
   document
      .querySelectorAll('[role="tabpanel"]')
      .forEach((panel) => panel.setAttribute('hidden', '')) // true
   hiddenContentBody.removeAttribute('hidden')

   document
      .querySelectorAll('picture')
      .forEach((pic) => pic.setAttribute('data-visible', 'false'))

   // document.querySelector([`#${hiddenContentImage}`]).removeAttribute('hidden')
}

tabList.addEventListener('keydown', changeTabFocus)
tabs.forEach((tab) => tab.addEventListener('click', handleTabClick))
