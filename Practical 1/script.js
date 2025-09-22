let votes = JSON.parse(localStorage.getItem('votingData')) || {
    JavaScript: 0,
    Python: 0,
    Java: 0
};

function saveVotes() {
    localStorage.setItem('votingData', JSON.stringify(votes));
}

function vote(language) {
    votes[language]++;
    saveVotes();
    updateVotes();
}

function updateVotes() {

    document.getElementById('javascript-votes').textContent = votes.JavaScript;
    document.getElementById('python-votes').textContent = votes.Python;
    document.getElementById('java-votes').textContent = votes.Java;
}

window.addEventListener('load', function() {
    updateVotes();
});
