require 'rails_helper'

RSpec.describe 'Favs', type: :request do
  describe 'GET /api/favs' do
    before do
      @fav = create(:fav)
      @fav2 = create(:fav, collectionId: '123456789')
      get api_favs_path
      @json = JSON.parse(response.body)
    end

    it 'Should be Status 200' do
      expect(response).to be_success
      expect(response.status).to eq(200)
    end

    it 'is Request Body' do
      expect(@json['list'][0]['collectionId']).to eq(@fav.collectionId)
      expect(@json['list'][1]['collectionId']).to eq(@fav2.collectionId)
    end
  end

  describe 'GET /api/favs/:id' do
    before do
      @fav = create(:fav)
      get api_fav_path(@fav.id)
      @json = JSON.parse(response.body)
    end

    it 'Should be Status 200' do
      expect(response).to be_success
      expect(response.status).to eq 200
    end

    it 'is Request Body' do
      expect(@json['albumId']).to eq(@fav.albumId)
      expect(@json['collectionId']).to eq(@fav.collectionId)
      expect(@json['artistId']).to eq(@fav.artistId)
      expect(@json['artistName']).to eq(@fav.artistName)
      expect(@json['collectionName']).to eq(@fav.collectionName)
      expect(@json['collectionViewUrl']).to eq(@fav.collectionViewUrl)
      expect(@json['artworkUrl400']).to eq(@fav.artworkUrl400)
      expect(@json['releaseDate']).to eq(@fav.releaseDate)
      expect(@json['primaryGenreName']).to eq(@fav.primaryGenreName)
    end
  end

  describe 'POST /api/favs' do
    context 'Normal Parameter' do
      before do
        # user = FactoryGirl.create(:user)
        # sign_in user
        @params = attributes_for(:fav)
      end

      it 'Should be 201 Created' do
        post api_favs_path, @params
        expect(response).to be_success
        expect(response.status).to eq(201)
      end

      it 'Should be increment Fav' do
        expect { post api_favs_path, @params }.to change(Fav, :count).by(1)
      end
    end

    context 'Invalid Parameter' do
      before do
        @params = attributes_for(:fav, collectionId: '')
      end

      it 'Should be 422 Unprocessable Entity' do
        post api_favs_path, @params
        expect(response).not_to be_success
        expect(response.status).to eq(422)
      end

      it 'Should be not increment Fav' do
        expect { post api_favs_path, @params }.not_to change(Fav, :count)
      end
    end
  end

  describe 'PUT /api/favs/:id' do
    before do
      @collection_name = 'testTitle'
      @fav = create(:fav)
      @params = attributes_for(:fav, collectionName: @collection_name)
    end

    it 'Should be 204' do
      put api_fav_path(@fav.id), @params
      expect(response).to be_success
      expect(response.status).to eq(204)
    end

    it 'Should be update Fav' do
      put api_fav_path(@fav.id), @params
      expect(@fav.reload.collectionName).to eq(@collection_name)
    end

    it 'Should be not increment Fav' do
      expect { put api_fav_path(@fav.id), @params }.not_to change(Fav, :count)
    end
  end

  describe 'DELETE /api/favs/:id' do
    before do
      @fav = create(:fav)
    end

    it 'Should be 204' do
      delete api_fav_path(@fav.id)
      expect(response).to be_success
      expect(response.status).to eq(204)
    end

    it 'Should be not decrement Fav' do
      expect { delete api_fav_path(@fav.id) }.to change(Fav, :count).by(-1)
    end
  end
end
