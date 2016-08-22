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

require 'rails_helper'

RSpec.describe Fav, type: :model do
  it 'is valid with title and content' do
    fav = build(:fav)
    expect(fav).to be_valid
  end
end
