const fs = require('fs')

module.exports = class BaseVersioning {

  fileLocation = null

  versionPath = null

  newVersion = null

  /**
   * Set some basic configurations
   *
   * @param {!string} fileLocation - Full location of the file
   * @param {!string} versionPath - Path inside the file where the version is located
   */
  init = (fileLocation, versionPath) => {
    this.fileLocation = fileLocation
    this.versionPath = versionPath
  }

  /**
   * Get the file's content
   *
   * @return {string}
   */
  read = () => {
    return fs.readFileSync(this.fileLocation, 'utf8')
  }

  /**
   * Logic for bumping the version
   *
   * @param {!string} releaseType - The type of release
   * @return {*}
   */
  bump = (releaseType) => {
    throw new Error('Implement bump logic in class!')
  }

  /**
   * Update the file
   *
   * @param {!string} newContent - New content for the file
   * @return {*}
   */
  update = (newContent) => (
    fs.writeFileSync(this.fileLocation, newContent)
  )

}

