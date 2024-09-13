
/* SLIDE UP */
let slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = duration + 'ms'
	target.style.boxSizing = 'border-box'
	target.style.height = target.offsetHeight + 'px'
	target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	target.style.border = 'none'

	window.setTimeout(() => {
		target.style.display = 'none'
		target.style.removeProperty('height')
		target.style.removeProperty('padding-top')
		target.style.removeProperty('padding-bottom')
		target.style.removeProperty('margin-top')
		target.style.removeProperty('margin-bottom')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		target.style.removeProperty('border')
	}, duration)
}
/* SLIDE DOWN */
let slideDown = (target, duration = 500) => {
	target.style.removeProperty('display')
	let display = window.getComputedStyle(target).display
	if (display === 'none') display = 'grid'
	target.style.display = display
	let height = target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	target.offsetHeight
	target.style.boxSizing = 'border-box'
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = duration + 'ms'
	target.style.height = height + 'px'
	target.style.border = 'none'

	target.style.removeProperty('padding-top')
	target.style.removeProperty('padding-bottom')
	target.style.removeProperty('margin-top')
	target.style.removeProperty('margin-bottom')
	target.style.removeProperty('border')

	window.setTimeout(() => {
		target.style.removeProperty('height')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		target.style.removeProperty('border')
	}, duration)
}
/* TOGGLE */
const slideToggle = (target, duration = 300) => {
	if (window.getComputedStyle(target).display === 'none') {
		return slideDown(target, duration)
	} else {
		return slideUp(target, duration)
	}
}

// const btnMore = document.querySelector(".item__button-more")
// const btnClose = document.querySelector(".item__button-close")

// const more = document.querySelector(".more")

function buttonMoore(){
	const items = document.querySelectorAll(".item")
	const btnsMore = document.querySelectorAll(".item__button-more")
	const mores = document.querySelectorAll(".more")
	const btnsClose = document.querySelectorAll(".item__button-close")

	btnsMore.forEach((btn, index) => {
		mores.forEach((more, mIndex) => {
		btn.addEventListener("click", () =>{
			if (!more.classList.contains("show") && index === mIndex) {
				more.classList.add("show")
				slideDown(more)
			}else{
				more.classList.remove("show")
				slideUp(more)
			}
		})
		})
	})

	btnsClose.forEach((btn, index) => {
		mores.forEach((more, mIndex) => {
			btn.addEventListener("click", () => {
			if (more.classList.contains("show") && index === mIndex) {
				more.classList.remove("show")
				slideUp(more)
			}
		})
		})
	})
	console.log(items, btnsMore, mores)
}
buttonMoore()

// btnMore.addEventListener("click", () => {
//     if (!more.classList.contains("show")){
//         more.classList.add("show")
//         slideDown(more)
//     }
//     else {
//         more.classList.remove("show")
//         slideUp(more)
//     }
// })

// btnClose.addEventListener("click", () => {
//     if (more.classList.contains("show")){
//         more.classList.remove("show")
//         slideUp(more)
//     }
// })







