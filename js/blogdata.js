blogData = "";

getBlogData = function () {
    $.getJSON("data/json/blog_data.json",
        function (data) {
            blogData = data;
            bindBlogDataToHomePage();
        }
    );
}

bindBlogDataToHomePage = function () {
    console.log(blogData);
    $('#trendingBlogs .card').remove();
    $('#allBlogs .card').remove();

    blogData.forEach(element => {
        if (element.isTrending == true) {
            bindToTrending(element.title, element.shortDescription);
        }
        bindToAllNews(element.title, element.shortDescription);
    });
}

bindToTrending = function (title, shortDescription) {
    bindingRow = '<div class="card">' +
        '<span class="badge badge-danger">' + title + '</span>' +
        '<div class="card-body">' +
        '<p class="card-text">' +
        shortDescription
        + '</p>' +
        '</div>' +
        '</div>';
    $('#trendingBlogs').append(bindingRow);
}

bindToAllNews = function (title, shortDescription) {
    bindingRow = '<div class="card">' +
        '<span class="badge badge-success">' + title + '</span>' +
        '<div class="card-body">' +
        '<p class="card-text">' +
        shortDescription
        + '</p>' +
        '</div>' +
        '</div>';
    $('#allBlogs').append(bindingRow);
}

$(document).ready(function () {
    getBlogData();
});
