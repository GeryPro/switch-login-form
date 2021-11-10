const $logInCard = document.getElementById('log-in-card');
const $signUpCard = document.getElementById('sign-up-card');
const $formCollection = document.querySelector('.form-collection');

function showCardAbove(element) {
	element.classList.remove('below');
	element.classList.remove('turned');

	element.classList.add('above');
}

function showCardBelow(element) {
	element.classList.remove('above');

	element.classList.add('below');
	element.classList.add('turned');
}

// Animate Forms
function animate() {
	$formCollection.classList.add('animation-state-1');

	setTimeout(() => {
		$formCollection.classList.remove('animation-state-1');
		$formCollection.classList.add('animation-state-finish');

		setTimeout(() => {
			$formCollection.classList.remove('animation-state-finish');
		}, 300);
	}, 10);
}

// Handlers
function turnLogInCardHandler() {
	if ($logInCard.classList.contains('below')) {
		showCardAbove($logInCard);
		showCardBelow($signUpCard);

		animate();
	}
}

function turnSignUpCardHandler() {
	if ($signUpCard.classList.contains('below')) {
		showCardAbove($signUpCard);
		showCardBelow($logInCard);

		animate();
	}
}

$logInCard.addEventListener('click', turnLogInCardHandler);
$signUpCard.addEventListener('click', turnSignUpCardHandler);
