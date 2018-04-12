import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'
import * as fs from 'fs'
const LeanKitClient = require('leankit-client')

interface ILeaknitResponse {
  data: any
}

interface IAuthObj {
  account: string
  email: string
}

export default class Whoami extends Command {
  static description = 'confirm your identity'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static configFile = `${process.env.HOME || process.env.USERPROFILE}/.config/chubbykit-cli`

  private static displayLoggedInSucces({email, account}: IAuthObj) {
    cli.log(`Logged in as: ${email} on account ${account}`)
  }

  async run() {
    this.parse(Whoami)
    try {
      const auth = fs.readFileSync(Whoami.configFile, 'utf8')
      const [account, email, token] = auth.split(':')
      const client = LeanKitClient({account, token})
      client.account.get().then(() => {
        Whoami.displayLoggedInSucces({account, email})
      })
    } catch {
      const account = await cli.prompt('What is your Leankit account? i.e. heroku for heroku.leankit.com')
      const email = await cli.prompt('What is your Leankit email?')
      const password = await cli.prompt('What is your Leankit password?', {type: 'hide'})
      const auth = {
        account,
        email,
        password,
      }
      const client = LeanKitClient(auth)
      client.auth.token.create('chubbykit-cli').then((response: ILeaknitResponse) => {
        fs.writeFileSync(Whoami.configFile, `${account}:${email}:${response.data.token}`)
        Whoami.displayLoggedInSucces({account, email})
      })
    }
  }
}
