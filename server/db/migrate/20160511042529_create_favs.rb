class CreateFavs < ActiveRecord::Migration
  def change
    create_table :favs do |t|
      t.string :albumId
      t.string :collectionId
      t.string :artistId
      t.string :artistName
      t.string :collectionName
      t.string :collectionViewUrl
      t.string :artworkUrl400
      t.string :releaseDate
      t.string :primaryGenreName

      t.timestamps null: false
    end
  end
end
