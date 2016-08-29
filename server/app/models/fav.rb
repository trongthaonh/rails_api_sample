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

class Fav < ApplicationRecord
  validates :collectionId, presence: true, length: { maximum: 10 }, uniqueness: true
  validates :albumId, length: { maximum: 10 }
  validates :artistId, presence: true, length: { maximum: 10 }
  validates :artistName, presence: true, length: { maximum: 99 }
  validates :collectionName, presence: true, length: { maximum: 99 }
  validates :collectionViewUrl, length: { maximum: 255 }
  validates :artworkUrl400, presence: true, length: { maximum: 255 }
  validates :releaseDate, length: { maximum: 20 }
  validates :primaryGenreName, length: { maximum: 99 }
end
