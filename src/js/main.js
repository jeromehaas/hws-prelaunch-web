import { gsap } from "gsap";

class ContactCard {

	constructor() {
		this.contactCardConfigs = {
				timing: 15,
				timeline: null,
				elements: {
					card: document.querySelector('.contact-card__inner'),
					thick: document.querySelector('.contact-card__thick'),
					sides: {
						all: document.querySelectorAll('.contact-card__side'),
						front: document.querySelector('.contact-card--front'),
						back: document.querySelector('.contact-card--front'),
					}
				}
			};
		this.init();
	};

	init() {
		this.contactCard.setTimeLine();
		this.contactCard.setEventListeners();
		this.contactCard.appear();
	}

	contactCard = {
		appear: () => {
			gsap.from('.contact-card__inner', { top: '-100vh', duration: 3, ease: 'power4' })
		},
		setTimeLine: () => {
			this.contactCardConfigs.timeline = gsap.timeline({ repeat: -1 });
			this.contactCardConfigs.timeline.to(".contact-card__inner", { rotationY: "+=360", duration: this.contactCardConfigs.timing, ease: "linear" });
		},
		setEventListeners() {
			gsap.utils.toArray(".contact-card").forEach(card => {
				card.addEventListener("mouseenter", () => this.enterFocus());
				card.addEventListener("mouseleave", () => this.exitFocus());
			});
		},
		enterFocus: () => {
			this.contactCardConfigs.timeline.pause();
			gsap.to('.contact-card__inner', { rotationY: "0", rotation: "0", translateX: 0, scale: 1.25, duration: 1 })
		},
		exitFocus: () => {
			gsap.to('.contact-card__inner', { rotationY: "0", rotation: "15deg", translateX: 16,  scale: 1, duration: 1 })
			this.contactCard.setTimeLine();
			this.contactCardConfigs.timeline.resume();
		}
	};

};

new ContactCard();









