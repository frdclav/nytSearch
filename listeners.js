var searchTerm
var numberOfRecords = 5
var startYear
var endYear

// listener for search-button
$("#search-button").on('click', function(event) {
    event.preventDefault()
    searchTerm = $("#search-term").val()
    numberOfRecords = $("#number-of-records").val()
    startYear = $("#start-year").val()
    endYear = $("#end-year").val()

    console.log(searchTerm, numberOfRecords, startYear, endYear)
})

//listener for clear-button
$("#clear-button").on('click', function() {})