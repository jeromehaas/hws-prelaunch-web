import { gsap } from "gsap";

class ContactCard {

	constructor() {
		this.timing = 15;
		this.timeline = null;
		this.elements = {
			contactCard: {
				card: document.querySelector('.contact-card__inner'),
				thick: document.querySelector('.contact-card__thick'),
				sides: {
					all: document.querySelectorAll('.contact-card__side'),
					front: document.querySelector('.contact-card--front'),
					back: document.querySelector('.contact-card--front'),
				}
			}
		}
		this.init();
	}

	init() {
		this.setTimeLine();
		this.setEventListeners();
		this.appear();
	}

	appear() {
		gsap.from('.contact-card__inner', { top: '-100vh', duration: 3, ease: 'power4' })
	}

	setTimeLine() {
		this.timeline = gsap.timeline({ repeat: -1 });
		this.timeline.to(".contact-card__inner", { rotationY: "+=360", duration: this.timing, ease: "linear" });
	}

	enterFocus() {
		this.timeline.pause();
		gsap.to('.contact-card__inner', { rotationY: "0", rotation: "0", scale: 1.25 })
	}
	
	exitFocus() {
		gsap.to('.contact-card__inner', { rotationY: "0", rotation: "15deg", scale: 1 })
		this.setTimeLine();
		this.timeline.resume();
		console.log('exit');
	}


	setEventListeners() {
		gsap.utils.toArray(".contact-card").forEach(flip => {
			flip.addEventListener("mouseenter", event => this.enterFocus());
			flip.addEventListener("mouseleave", event => this.exitFocus());
		});
	};

};

new ContactCard();









