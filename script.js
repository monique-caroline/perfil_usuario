// Função atualizar bio

document.getElementById('change-info').addEventListener('click', function() {
    let newName = prompt('Digite o novo nome:');
    let newBio = prompt('Digite uma nova biografia:');

    if (newName) {
        document.getElementById('username').textContent = newName;
    }

    if (newBio) {
        document.getElementById('bio').textContent = newBio;
    }
});

// Função add comentários

document.getElementById('add-comment').addEventListener('click', function() {
    let commentText = document.getElementById('comment-input').value;
    if (commentText.trim() !== '') {
        let commentList = document.getElementById('comment-list');

        let commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = commentText;

        commentList.appendChild(commentDiv);
        document.getElementById('comment-input').value = ''; // Limpar textarea
    } else {
        alert('Digite um comentário antes de adicionar.');
    }
});