const path = require('path')
const fse = require('fs-extra')
const inquirer = require('inquirer')
const fs = require('fs')

const tpl = getList()

async function generate(selected) {
  const fileName = tpl.tplMap[selected]
  const target = path.join(process.cwd(), fileName)
  const source = path.join(__dirname, './tpl', fileName)
  try {
    await fse.copy(source, target)
    console.log('success')
  } catch (error) {
    console.log('error')
    console.log(error)
  }
}

function getList() {
  let tplMap = fs.readdirSync(path.join(__dirname, './tpl')).reduce((store, next) => {
    store[next] = next
    return store
  }, {})
  return {
    tplMap,
    list: [
      {
        type: 'list',
        name: 'fileType',
        message: 'What do you want to create?',
        choices: Object.keys(tplMap),
      },
    ],
  }
}

module.exports = async function() {
  try {
    let res = await inquirer.prompt(tpl.list)
    generate(res.fileType)
  } catch (err) {
    console.log('选择出错')
    console.log(err)
  }
}
