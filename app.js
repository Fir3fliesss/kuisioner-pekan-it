document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('kuisionerForm');
    const API_GET = 'https://api-pekanit.la-siesta.my.id/api/v1/get/data-kuisioner';
    const API_POST = 'https://api-pekanit.la-siesta.my.id/api/v1/post/response-kuisoner';

    fetch(API_GET)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        fetch(API_POST, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            alert('Response submitted successfully');
            form.reset();
        })
        .catch(error => console.error('Error submitting response:', error));
    });
});