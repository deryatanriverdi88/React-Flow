class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :name
      t.string :img_url
      t.string :bio

      t.timestamps
    end
  end
end
