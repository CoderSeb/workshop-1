import CodeMetrics from "./CodeMetrics.js"
import fs from "fs-extra"

const buffer = fs.readFileSync("./codeFiles/testFile01.js")
const fileContent = buffer.toString()

const codeMetrics = new CodeMetrics(fileContent)

const output = `
Rows with code: ${codeMetrics.getRowsWithCode()}\n
Rows with comments: ${codeMetrics.getRowsWithComments()}\n
Number of if-statements: ${codeMetrics.getNoOfIfStatements()}\n
Number of console.log(): ${codeMetrics.getNoOfConsoleLogs()}
`

console.log(output)