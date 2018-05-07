import jetpack from "fs-jetpack"

function getCredentialsPath () {
  if(process.platform === 'win32') {
    return 'C:\\Users\\'+process.env.USERNAME+'\\.aws\\credentials'
  }
  return '/home/'+process.env.USERNAME+'/.aws/credentials'
}

function credentialValuesInFile () {
  let arrCredentialSets = jetpack.read(getCredentialsPath(),'utf8').replace(/\r?\n|\r/g,'').replace(/\s/g,'').split('[')
  for(let x=0; x < arrCredentialSets.length; x++){
    
  }
}

module.exports = {
  checkAccountInCredentialsFile () {
    let path = getCredentialsPath()
    if(jetpack.exists(path) !== 'file'){
      return false
    }
    if(!credentialValuesInFile()){
      return false
    }
    return true
  }
}