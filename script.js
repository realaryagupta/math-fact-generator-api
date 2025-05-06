const factBox = document.getElementById('fact');
const button = document.getElementById('newFactBtn');

async function fetchMathFact() {
  try {
    const res = await fetch('https://cors-anywhere.herokuapp.com/http://numbersapi.com/random/math')
    
    const fact = await res.text();
    factBox.textContent = fact;
  } catch (err) {
    factBox.textContent = 'Oops! Could not fetch a fact. Try again.';
    console.error(err);
  }
}

window.onload = fetchMathFact;
button.addEventListener('click', fetchMathFact);
