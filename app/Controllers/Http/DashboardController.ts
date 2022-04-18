'use strict'
export {}
const AxiosService = require('../../Service/AxiosService')
class DashboardController {
  async getAllProjects({ response }) {
    let axiosService = new AxiosService()
    const result = await axiosService.getProjects()
    return response.json({
      code: 200,
      message: 'sukses',
      data: result,
    })
  }
}

module.exports = DashboardController
