class Api::V1::BreedsController < ApplicationController
  def details
    render json: Breed.fetch_from_api!(params[:name]), status: 200
  end
end
