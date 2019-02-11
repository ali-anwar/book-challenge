class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :isbn, limit: 17, null: false
      t.string :title, null: false
      t.text :notes

      t.timestamps
    end
  end
end
