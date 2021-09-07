class CodeMetrics{
  #file
  #rowsWithCode
  #rowsWithComments
  #noOfIfStatements
  #noOfConsoleLogs
  
  constructor(file){
    this.#file = file
    this.#rowsWithCode = this.calcRowsWithCode()
    this.#rowsWithComments = this.calcRowsWithComments()
    this.#noOfIfStatements = this.calcIfStatements()
    this.#noOfConsoleLogs = this.calcConsoleLogs()
  }

  getFile(){
    return this.#file
  }

  getRowsWithCode(){
    return this.#rowsWithCode
  }

  splitFile(){
    return this.#file.split("\n")
  }

  getNoOfIfStatements() {
    return this.#noOfIfStatements
  }

  getRowsWithComments() {
    return this.#rowsWithComments
  }

  getNoOfConsoleLogs() {
    return this.#noOfConsoleLogs
  }

  calcRowsWithComments(){
    return this.iterateFileForMatches(/(?:\/+)|(?:\*\/)|(?:\*+)/g)
  }

  calcRowsWithCode(){
    return this.iterateFileForMatches(/.+/g) - this.calcRowsWithComments()
  }

  calcIfStatements() {
    return this.iterateFileForMatches(/(if?\s\(?.+\))/g)
  }

  calcConsoleLogs() {
    return this.iterateFileForMatches(/console\.log\(([^)]+)\)/g)
  }

  // TODO: Check for no of for-loops

  // TODO: CHeck for no of imports

  iterateFileForMatches(regex) {
    let nrOfOccurences = 0

    const fileRows = this.splitFile()
    for (let i = 0; i < fileRows.length; i++) {
      if (fileRows[i].match(regex)) {
        nrOfOccurences++
      }
    }
    return nrOfOccurences
  }
}

export default CodeMetrics