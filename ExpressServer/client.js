let form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
 e.preventDefault();
 let formData = new FormData(form);
 const response = await fetch('http://localhost:8484/test',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        input: formData.get('input'),
    })
 })
 const result = await response.json();
 const divResult = document.querySelector('#result');
 divResult.innerHTML = result.input;
});