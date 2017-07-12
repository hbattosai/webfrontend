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


	$(window).scroll(()=>{
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
	})

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

	function sendForm($form){
		$.ajax({
		    url: $form.attr("action"), 
		    method: "POST",
		    data: $form.formObject(),
		    dataType: "json",
		    success: function(){
		    	alert("Todo Salio Bien")
		    }
		})
	}


	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()

		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2.5)
	}

})()