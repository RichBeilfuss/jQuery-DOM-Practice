let id = 0;
let movieList = [];

$(function() {
  $("#movie-form").on("submit", function(e) {
    e.preventDefault();
    let title = $("#title").val();
    let rating = $("#rating").val();

    let movieData = { title, rating, id };
    const appendMovie = addToList(movieData);

    id++
    movieList.push(movieData);

    $("#movie-table-body").append(appendMovie);
    $("#movie-form").trigger("reset");
  });


  $("tbody").on("click", ".btn.btn-danger", function(e) {
    
    let removeIndex = movieList.findIndex(movie => movie.id === +$(e.target).data("deleteId"))
    
    
    movieList.splice(removeIndex, 1)

    
    $(e.target)
      .closest("tr")
      .remove();
    
  });

function addToList(movie) {
  return `
    <tr>
      <td>${movie.title}</td>
      <td>${movie.rating}</td>
      <td>
        <button class="btn btn-danger" data-delete-id=${movie.id}>
          Delete
        </button>
      </td>
    <tr>
  `;
}
})