class StaticPagesController < ApplicationController
  def index
  end

  # React on Rails widget. Using gem which spins up a babel server on the background
  # Both Front and Back handled by Rails.
  def show_ror_widget
  end

  def weather_report
    render json: OpenWeatherHelper::MiniSDK.new(coordinates_permit[:latitude], coordinates_permit[:longitude]).call_weather
  end

  private
  def coordinates_permit
    params.require(:coordinates).permit(:latitude, :longitude)
  end
end

