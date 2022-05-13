import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Airt extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public idAir: string

  @column()
  public clientName: string

  @column()
  public projectCode: string

  @column()
  public projectName: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
