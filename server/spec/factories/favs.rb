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

FactoryGirl.define do
  factory :fav do
    albumId '120954021'
    collectionId '120954021'
    artistId '909253'
    artistName 'Jack Johnson'
    collectionName 'Sing-a-Longs and Lullabies for the Film Curious George'
    collectionViewUrl 'https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?i=120954025&id=120954021&s=143441'
    artworkUrl400 'http://a1.itunes.apple.com/r10/Music/3b/6a/33/mzi.qzdqwsel.400x400-75.jpg'
    releaseDate '2013-01-02T08'
    primaryGenreName 'Rock'
  end
end
