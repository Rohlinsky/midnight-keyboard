function addKeyboard () {
	let list = {
		letter: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
		number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
		symbol: [",", ".", "\/"]
	},
	storage = "",
	register = false,
	display = 1,
	input
	$('div.keyboard').append('<div class="number list"></div>')
					 .append('<div class="letter list"></div>')
					 .append('<div class="symbol list"></div>')
					 .append(`
					 	<div class="control">
					 		<button class="caps lock">↑</button>
					 		<button class="copy">Copy</button>
					 		<button class="alt">1234...</button>
					 		<br/>
					 		<button class="space">Space</button>
					 	</div>
					 `)
	list.letter.map(function (item) {
		$('div.keyboard div.letter.list').append('<div class="button letter">' + item + '</div>')
	})
	list.number.map(function (item) {
		$('div.keyboard div.number.list').append('<div class="button number">' + item + '</div>')
	})
	list.symbol.map(function (item) {
		$('div.keyboard div.symbol.list').append('<div class="button symbol">' + item + '</div>')
	})
	$('div.keyboard div.control button.caps.lock').click(function () {
		register = !register
		$('div.keyboard div.letter.list div').each(function (index) {
			$(this).css('text-transform', (register) ? 'uppercase' : 'lowercase')
		})
		$(this).text((register) ? "↓" : "↑")
		// $('div.keyboard div.letter.list').html("")
		// list.letter[(register) ? "uppercase" : "lowercase"].map(function (item) {
		// 	$('div.keyboard div.letter.list').append('<div class="button letter">' + item + '</div>')
		// })
	})
	$('div.keyboard div.control button.alt').click(function () {
		display = !display
		$(this).text((!display) ? "abcd..." : "1234...")
		if (display) {
			$('div.keyboard div.number.list').hide()
			$('div.keyboard div.symbol.list').hide()
			$('div.keyboard div.letter.list').show()
		} else {
			$('div.keyboard div.number.list').show()
			$('div.keyboard div.symbol.list').show()
			$('div.keyboard div.letter.list').hide()
		}
		// $('div.keyboard div.letter.list').html("")
		// list.letter[(register) ? "uppercase" : "lowercase"].map(function (item) {
		// 	$('div.keyboard div.letter.list').append('<div class="button letter">' + item + '</div>')
		// })
	})
	$('input').on('click', function () {
		input = $(this)
		storage = ""
	})
	$('div.keyboard div.list .button').click(function () {
		if (!input) return
		storage += (($(this).attr('class')).replace('button ', '') === 'letter' && register) 
						? $(this).text().toUpperCase() : $(this).text()
		input.val(storage)
	})
	$('div.keyboard div.control button.copy').click(function () {
		if (input) {
			input.select();
			// input.setSelectionRange(0, 99999); 
			document.execCommand("copy");
		}
	})
	$('div.keyboard div.control button.space').click(function () {
		if (input) {
			storage += " "
		}
	})
}