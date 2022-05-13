'use strict'

import Airt from 'App/Models/Airt'
import databaseConfig from 'Config/database'

export {}
const AxiosService = require('../../Service/AxiosService')
class ProjectcostController {
  public async getAllProjects({ params, response }) {
    try {
      const cost = await Airt.all()
      return response.status(200).json({
        code: 200,
        status: 'berhasil',
        data: cost,
      })
    } catch (err) {
      return response.status(500).json({
        code: 500,
        status: 'gagal',
        message: err.message,
      })
    }
    // let axiosService = new AxiosService()
    // const result = await axiosService.getProjects()
    // let projects: any = []
    // for (const data of result) {
    //   let objects: any = {}
    //   objects.id = data.id
    //   objects['Client Name'] = data.fields['Client Name']
    //   objects['Project Code'] = data.fields['Project Code']
    //   objects['Project Name'] = data.fields['Project Name']
    //   projects.push(objects)
    // }
    // return response.json({
    //   code: 200,
    //   message: 'sukses',
    //   data: projects,
    // })
  }

  //Sync data
  public async store({ response }) {
    let axiosService = new AxiosService()

    //Ambil data dari dashboard milestone
    const result = await axiosService.getDashboard()
    let projects: any = []
    for (const data of result) {
      let objects: any = {}
      objects.idAir = data.id
      objects['clientName'] = data.fields['Client Name']
      objects['projectCode'] = data.fields['Project Code']
      objects['projectName'] = data.fields['Project Name']
      projects.push(objects)
    }

    //Ambil data project name dari table project (projectCost)
    const projectCost = await axiosService.getProject()
    for (const data of projects) {
      for (const resCost of projectCost) {
        if (
          data.projectName.every((element) => {
            return resCost.fields['Order'].includes(element)
          })
        ) {
          data.projectName = resCost.fields['Project Name']
          break
        }
      }
    }
    // Ambil data client name dari table client
    const clientName = await axiosService.getClient()
    for (const data of projects) {
      for (const restCost of clientName) {
        if ((data.clientName['id'] = restCost.fields['Client Name'])) {
          data.clientName = restCost.fields['Client Name']
          break
        }
      }
    }

    // const hasil: any = []
    // for (const data of projects) {
    //   let datadb = await Airt.findBy('id_air', data.idAir)
    //   console.log(datadb != null)
    //   if (datadb != null) {
    //     datadb?.merge(data)
    //     await datadb?.save()
    //   } else {
    //     datadb = await Airt.create(data)
    //   }
    //   await hasil.push(datadb)
    // }
    const hapus = await Airt.truncate()
    const cost = await Airt.createMany(projects)
    return response.json({
      code: 200,
      message: 'sukses',
      data: cost,
    })
  }
}
module.exports = ProjectcostController
