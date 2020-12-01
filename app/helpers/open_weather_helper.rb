require 'net/http'

module OpenWeatherHelper
  class MiniSDK

    BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'

    def initialize(lat, lon)
      @lat = lat
      @lon = lon
    end

    def call_weather
      uri = URI(BASE_URL)
      params = { lat: @lat, lon: @lon, appid: 'ADD API HERE' }
      uri.query = URI.encode_www_form(params)

      JSON.parse(Net::HTTP.get(uri))
    end
  end
end
