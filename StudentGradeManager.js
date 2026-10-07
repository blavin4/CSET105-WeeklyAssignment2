const prompt = require(`prompt-sync`)()

main()
function main() {
    let grades = []
    console.log("Welcome to the Student Grade Manager. Please select an option to begin\n")
    commands()
    function commands() {
        console.log("Options:")
        console.log("ADD [grade] (Adds grade to the list of grades, must be between 0-100)")
        console.log("REMOVE [grade] (Removes one instance of that grade from the list of grades")
        console.log("HIGHEST (Prints the highest grade)")
        console.log("AVERAGE (Prints the average grade)")
        console.log("PRINT (Prints a list containing all of the grades")
        console.log("EXIT (Closes the program)\n")
        let input = prompt("Input: ").toLowerCase().split(" ")
        if (input[0] == "add") add()
        else if (input[0] == "remove") remove()
        else if (input[0] == "highest") highest()
        else if (input[0] == "average") average()
        else if (input[0] == "print") print()
        else if (input[0] == "exit") {
            console.log("\nEnding the program.\n")
            return
        }
        else console.log("Not a valid command!\n")
        commands()
        function add() {
            let grade = Number(input[1] || prompt("Grade to be added: "))
            if (isNaN(grade) || grade < 0 || grade > 100) console.log("\nNot a valid number! Grade must be between 0 and 100.\n")
            else {
                grades.push(grade)
                console.log(`\n${grade} added to grade list.\n`)
            }
        }
        function remove() {
            let grade = Number(input[1] || prompt("Grade to be removed: "))
            if (grades.indexOf(grade) != -1) {
                grades.splice(grades.indexOf(grade), 1)
                console.log(`\n${grade} removed from grade list.\n`)
            } else console.log(`\n${grade} doesn't exist in grade list!\n`)
        }
        function highest() {
            if (grades.length == 0) {
                console.log("\nThe grade list is empty! Add a grade to the list with the ADD command to use this command!\n")
                return
            }
            let highest = 0;
            let str = ``
            for (let i = 0; i < grades.length; i++) {
                if (grades[i] > highest) highest = grades[i]
                str += `${grades[i]}, `
            }
            console.log(`\nAmong the grades of ${str}the highest grade is ${highest}\n`)
        }
        function average() {
            if (grades.length == 0) {
                console.log("\nThe grade list is empty! Add a grade to the list with the ADD command to use this command!\n")
                return
            }
            let average = 0;
            let str = ``
            for (let i = 0; i < grades.length; i++) {
                average += grades[i]
                str += `${grades[i]}, `
            }
            average /= grades.length
            console.log(`Among the grades of ${str}the average grade is ${average}.\n`)
        }
        function print() {
            if (grades.length == 0) {
                console.log("\nThe grade list is empty! Add a grade to the list with the ADD command to use this command!\n")
                return
            }
            let str = `\nGrade list:\n`
            for (let i = 0; i < grades.length; i++) str += `${i + 1}. ${grades[i]}\n`
            console.log(str)
        }
    }
}