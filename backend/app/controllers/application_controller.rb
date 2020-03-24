class ApplicationController < ActionController::API

    def encode_token(payload)
        JWT.encode(payload, 'fake instagram')
    end

end
