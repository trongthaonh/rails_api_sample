module Api
  class FavsController < ApplicationController
    before_action :set_fav, only: [:show, :update, :destroy]

    # GET /api/favs
    # GET /api/favs.json
    def index
      @favs = Fav.all
      favs_list = ActiveModel::ArraySerializer.new(@favs, each_serializer: FavSerializer)
      res = { list: favs_list }
      render json: res
    end

    # GET /api/favs/1
    # GET /api/favs/1.json
    def show
      @fav ||= Fav.find(params[:id])
      render json: FavSerializer.new(@fav)
    end

    # POST /api/favs
    # POST /api/favs.json
    def create
      @fav = Fav.new(fav_params)
      @fav.id = @fav.collectionId
      if @fav.save
        render json: @fav, status: :created, location: api_fav_path(@fav)
      else
        render json: @fav.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /api/favs/1
    # PATCH/PUT /api/favs/1.json
    def update
      @fav = Fav.find(params[:id])

      if @fav.update(fav_params)
        head :no_content
      else
        render json: @fav.errors, status: :unprocessable_entity
      end
    end

    # DELETE /api/favs/1
    # DELETE /api/favs/1.json
    def destroy
      @fav.destroy

      head :no_content
    end

    private

    def set_fav
      @fav = Fav.find(params[:id])
    end

    def fav_params
      params.permit(
        :albumId,
        :collectionId,
        :artistId,
        :artistName,
        :collectionName,
        :collectionViewUrl,
        :artworkUrl400,
        :releaseDate,
        :primaryGenreName
      )
    end
  end
end
