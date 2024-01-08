const movies = [
    {
        _id: 1,
        title: "Terminator",
        genre: {name: "Action"},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        liked: true
    },
    {
        _id: 2,
        title: "Michael",
        genre: {name: "Comedy"},
        numberInStock: 5,
        dailyRentalRate: 2.5
    },
    {
        _id: 3,
        title: "Inception",
        genre: {name: "Thrill"},
        numberInStock: 2,
        dailyRentalRate: 2.5
    },
    {
        _id: 4,
        title: "Aviator",
        genre: {name: "Romance"},
        numberInStock: 7,
        dailyRentalRate: 2.5
    },
    {
        _id: 5,
        title: "Prince of Persia",
        genre: {name: "Adventure"},
        numberInStock: 1,
        dailyRentalRate: 2.5
    }
]

export function getMovies(){
    return movies
}