if (navigator.serviceWorker){
	navigator.serviceWorker.register("/sw.js")
}

;(function(){

	let sticky = false
	let currentPosition = 0

	const imageCounter = $("[data-name='image-counter']").attr("content")
	const email = "marianodellaporta@gmail.com"

	$("#contact-form").on("submit",function(ev){
		ev.preventDefault()

		sendForm($(this))

		return false;
	})

	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)
	checkScroll()
	isOpen()

	$("#menu-opener").on("click",toggleNav)

	$(".menu-link").on("click",toggleNav)

	setInterval(()=>{

		if (currentPosition < imageCounter) {
			currentPosition++			
		}else{
			currentPosition = 0
		}

		$("#galeria .inner").css({
			left:"-"+currentPosition*100+"%"
		})


	},4000)


	$(window).scroll(checkScroll)


	function checkScroll(){
		const inBottom = isInBottom()

		if (inBottom && !sticky) {
			//Mostrar la navegacion sticky
			sticky = true
			stickNavigation()
		}
		if(!inBottom && sticky){
			// Ocultar la navegacion sticky
			sticky = false
			unStickNavigation()
		}
	}

	function isOpen(){
		// Reloj 24 => 5pm 11pm => 17 -- 23
		let date = new Date()
		const current_hour = date.getHours()

		if(current_hour < 17 || current_hour > 23){
			$("#is-open .text").html("Cerrado ahora <br> Abierto de 5:00pm a 23:00pm")
		}
	}

	function toggleNav(){
		$("#responsive-nav ul").toggleClass("active")
		$("#menu-opener").toggleClass("glyphicon-menu-hamburger")
	}

	function stickNavigation(){
		$("#description").addClass("fixed").removeClass("absolute")
		$("#navigation").slideUp()
		$("#sticky-navigation").slideDown("fast")
	}

	function unStickNavigation(){
		$("#description").removeClass("fixed").addClass("absolute")
		$("#navigation").slideDown("fast")
		$("#sticky-navigation").slideUp("fast")
	}

	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()

		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2.5)
	}

})()