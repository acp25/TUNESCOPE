console.log('hello world')

const newFormHanlder = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector('#comment').value.trim();
    const user_id = document.querySelector('#user_id').value.trim();
    const album_id = document.querySelector('#album_id').value.trim();


    if (comment_text && user_id && album_id) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({comment_text, user_id, album_id}),
          headers: {
              'Content-Type': 'application/json'
          },
        });
        if (response.ok) {
            document.location.replace('/');
            console.log(comment_text)
        } else {
            alert('Failed to upload comment');
        }
    }
};

document 
   .querySelector('.comment-form')
   .addEventListener('submit', newFormHanlder);