function deleteBlog(blog) {
    const delBlog = document.getElementById(blog);
    delBlog.parentNode.removeChild(delBlog);
}

function editPost(blogAuthor, blogHeading, blogContent) {
    const url = `../html/post.html?heading=${encodeURIComponent(blogHeading.innerText)}&author=${encodeURIComponent(
            blogAuthor.innerText
    )}&content=${encodeURIComponent(blogContent.innerText)}`;
    window.location.href = url;
}