const axios = require('axios')
const url = 'https://api.airtable.com/v0/appdC2FOS7cxbjU1I'

class AxiosService {
  BaseAPI: any
  ReportAPI: any

  constructor() {
    this.BaseAPI = axios.create({
      baseURL: url,
      timeout: 5000,
      headers: { Authorization: 'Bearer keyDtbtTAY36PzzgZ' },
    })

    this.ReportAPI = axios.create({
      baseURL: url,
      timeout: 5000,
      headers: { Authorization: 'Bearer keyDtbtTAY36PzzgZ' },
    })
  }

  async getProjects() {
    const redir = '/Dashboard%20Milestones'
    let result
    await this.BaseAPI.get(redir).then(function (response) {
      result = response.data
      console.log(result)
    })
    return result
  }
}

module.exports = AxiosService
