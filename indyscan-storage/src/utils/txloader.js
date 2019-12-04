const fs = require('fs')
const sleep = require('sleep-promise')

async function importFileToStorage (storage, filePath) {
  console.log(`Readng file ${filePath} for tx import.`)
  let lines = fs.readFileSync(filePath, 'utf-8')
    .split('\n')
    .filter(Boolean)
  for (const line of lines) {
    const tx = JSON.parse(line)
    // console.log(`Adding tx to storage`)
    await sleep(15)
    await storage.addTx(tx)
  }
}

module.exports.importFileToStorage = importFileToStorage
