class Commments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :author
      t.text :text
    end
  end
end
