const axios = require('axios')
const url = 'https://api.airtable.com/v0/appdC2FOS7cxbjU1I'

class AxiosService {
  BaseAPI: any
  ReportAPI: any

  constructor() {
    // base api airtable
    this.BaseAPI = axios.create({
      baseURL: url,
      timeout: 5000,
      headers: { Authorization: 'Bearer keyDtbtTAY36PzzgZ' },
    })

    // base api airtable
    this.ReportAPI = axios.create({
      baseURL: url,
      timeout: 5000,
      headers: { Authorization: 'Bearer keyDtbtTAY36PzzgZ' },
    })

    // base api clockify

    // base api clockify
  }

  async getDashboard() {
    const redir = '/Dashboard%20Milestones?view=Milestone%20Data'
    let result
    await this.BaseAPI.get(redir).then(function (response) {
      result = response.data.records
    })
    return result
  }

  async getProject() {
    const redir = '/Project'
    let result
    await this.BaseAPI.get(redir).then(function (response) {
      result = response.data.records
    })
    return result
  }

  async getClient() {
    const redir = '/Client'
    let result
    await this.BaseAPI.get(redir).then(function (response) {
      result = response.data.records
    })
    return result
  }
}

module.exports = AxiosService
