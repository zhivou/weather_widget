require 'net/http'

module OpenWeatherHelper
  class MiniSDK

    BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'
    APPID = Rails.application.credentials.open_weather[:appid]

    def initialize(lat, lon)
      @lat = lat
      @lon = lon
    end

    def call_weather
      uri = URI(BASE_URL)
      params = { lat: @lat, lon: @lon, appid: APPID, units: 'imperial' }
      uri.query = URI.encode_www_form(params)

      JSON.parse(Net::HTTP.get(uri))
    end
  end
end
