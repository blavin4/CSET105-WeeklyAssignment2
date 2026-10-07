const prompt = require(`prompt-sync`)()

main()
function main() {
    let movies = []
    console.log("Welcome to the Movie Collection Manager! Please select and option to begin.\n")
    commands()
    function commands() {
        console.log("Options:")
        console.log("ADD [movie] (Adds movie to list)")
        console.log("REMOVE [movie] (Removes movie from list")
        console.log("SEARCH [movie] (Locates a movie in the list)")
        console.log("PRINT (Prints a list of all the movies")
        console.log("COUNT (The total amount of movies)")
        console.log("UPPERCASE [movie] (Converts a movie's title to all uppercase)")
        console.log("EXIT (Closes the program)\n")

        let input = [prompt("Input: ")]
        if (input[0].indexOf(" ") != -1) {
            input.push(input[0].slice(input[0].indexOf(" ") + 1))
            input[0] = input[0].slice(0, input[0].indexOf(" "))
        }
        input[0].toLowerCase()
        if (input[0] == "add") add()
        else if (input[0] == "remove") remove()
        else if (input[0] == "search") search()
        else if (input[0] == "print") print()
        else if (input[0] == "count") count()
        else if (input[0] == "uppercase") uppercase()
        else if (input[0] == "exit") {
            console.log("Ending the program.\n")
            return
        }
        else console.log("Not a valid command!\n")
        commands()

        function add() {
            let movie = input[1] || prompt("Movie to be added: ")
            if (findMovie(movie) == -1) {
                movies.push(movie)
                console.log(`\n${movie} added to the list.\n`)
            } else console.log(`\n${movies[findMovie(movie)]} is already in the list!\n`)
        }
        function remove() {
            if (movies.length == 0) {
                console.log("\nThe movie list is empty! Add a movie to the list with the ADD command to use this command!\n")
                return
            }
            let movie = input[1] || prompt("Movie to be removed: ")
            if (findMovie(movie) != -1) {
                console.log(`\n${movies[findMovie(movie)]} was removed from the list.\n`)
                movies.splice(findMovie(movie), 1)
            } else console.log(`\n${movie} wasn't in the list!\n`)
        }
        function search() {
            if (movies.length == 0) {
                console.log("\nThe movie list is empty! Add a movie to the list with the ADD command to use this command!\n")
                return
            }
            let movie = input[1] || prompt("Movie to search for: ")
            if (findMovie(movie) != -1) console.log(`\n${movies[findMovie(movie)]} is number ${findMovie(movie) + 1} in the list.\n`)
            else console.log(`\n${movie} is not in the list.\n`)
        }
        function print() {
            if (movies.length == 0) {
                console.log("\nThe movie list is empty! Add a movie to the list with the ADD command to use this command!\n")
                return
            }
            let str = `\nMovie list:\n`
            for (let i = 0; i < movies.length; i++) str += `${i + 1}. ${movies[i]}\n`
            console.log(str)
        }
        function count() {
            console.log(`\nThere is a total of ${movies.length} movie(s) in the list.\n`)
        }
        function uppercase() {
            if (movies.length == 0) {
                console.log("\nThe movie list is empty! Add a movie to the list with the ADD command to use this command!\n")
                return
            }
            let movie = input[1] || prompt("Movie to capitalize: ")
            if (findMovie(movie) != -1) {
                let str = `\n${movies[findMovie(movie)]} has been converted to`
                for (let i = 0; i < movie.length; i++) {
                    if (movie.charCodeAt(i) >= 97 && movie.charCodeAt(i) <= 122) {
                        movie = movie.slice(0, i) + String.fromCharCode(movie.charCodeAt(i) - 32) + movie.slice(i + 1, movie.length)
                    }
                }
                movies[findMovie(movie)] = movie
                console.log(`${str} ${movie}\n`)
            } else console.log(`\nCannot convert ${movie} to upper case, as it does not exist in the list!\n`)

        }
        // Helper function used by the commands
        function findMovie(movie) {
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].toLowerCase() == movie.toLowerCase()) {
                    return i
                }
            }
            return -1
        }
    }
}