const form = document.querySelector('#searchForm');
const resultsDiv = document.querySelector('#results');
const clearButton = document.querySelector('#clearButton');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
        postData(res.data);
        form.elements.query.value = '';
    } catch (err) {
        console.log(err);
    }
});

clearButton.addEventListener('click', function () {
    resultsDiv.innerHTML = '';
});

const postData = (shows) => {
    resultsDiv.innerHTML = '';
    for (let result of shows) {
        const container = document.createElement('div');
        container.classList.add('container');

        const name = document.createElement('h3');
        const genre = document.createElement('p');
        const rating = document.createElement('p');
        const summary = document.createElement('p');
        const image = document.createElement('img');

        name.innerHTML = result.show.name ? result.show.name : 'No name available';
        genre.innerHTML = result.show.genres.length ? `Genre: ${result.show.genres.join(', ')}` : 'No genres available';
        rating.innerHTML = result.show.rating.average ? `Rating: ${result.show.rating.average}` : 'No rating available';
        summary.innerHTML = result.show.summary ? result.show.summary : 'No summary available';
        if (result.show.image) {
            image.src = result.show.image.medium;
        } else {
            image.alt = 'No image available';
        }

        container.appendChild(name);
        container.appendChild(rating);
        container.appendChild(genre);
        container.appendChild(summary);
        if (image.src) {
            container.appendChild(image);
        }
        resultsDiv.appendChild(container);
    }
};
