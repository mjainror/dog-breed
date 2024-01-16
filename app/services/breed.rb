require 'net/http'

class Breed
  class << self
    def fetch_from_api!(breed_name)
      Breed.new(breed_name: breed_name).call()
    end
  end

  attr_accessor :name, :result

  def initialize(opts={})
    self.name = opts[:breed_name]
  end

  def call
    result = if name.present?
      uri = URI("https://dog.ceo/api/breed/#{name}/images/random")
      res = Net::HTTP.get(uri)
      JSON.parse(res)
    else
      {
        "status": "error", 
        "message": "Invalid breed", 
        "code": 404
      }
    end
  end
end
