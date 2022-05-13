import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Airts extends BaseSchema {
  protected tableName = 'airts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('id_air').unique().notNullable()
      table.text('client_name').notNullable()
      table.text('project_code').notNullable()
      table.text('project_name').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
