async function refreshTweets() {
    
    $('#allTweets').empty();

    const tweets = await axios.get('/api/post');

    for (let post of tweets.data) {
        $('#allTweets').prepend(`<li>${post.content} by ${post.postedBy} </li>`);
    }
  
}

// refreshTweets();



$('#submitPostButton').click(async () => {
    const postText = $('#post-text').val();
    console.log(postText);

    const newPost=await axios.post('/api/post', { content: postText });
    console.log(newPost);

    await refreshTweets();

    $('#post-text').val("");
})