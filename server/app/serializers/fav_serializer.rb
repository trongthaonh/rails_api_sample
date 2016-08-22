# == Schema Information
#
# Table name: favs
#
#  id                :integer          not null, primary key
#  albumId           :string(255)
#  collectionId      :string(255)
#  artistId          :string(255)
#  artistName        :string(255)
#  collectionName    :string(255)
#  collectionViewUrl :string(255)
#  artworkUrl400     :string(255)
#  releaseDate       :string(255)
#  primaryGenreName  :string(255)
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class FavSerializer < ActiveModel::Serializer
  attributes :id, :albumId, :collectionId, :artistId, :artistName, :collectionName, :collectionViewUrl, :artworkUrl400, :releaseDate, :primaryGenreName
end
