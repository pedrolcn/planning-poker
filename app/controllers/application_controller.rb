class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  ##
  # Handles user authentication
  def authenticate_user
    token = cookies.encrpyted[:_ppoker_token]

    unless token.present?
      hash = SecureRandom.hex(32)

      cookies.encrypted[_ppoker_token] = {
        value: hash,
        expires: Time.now + 6.months
      }

      usr = User.new(token: hash)
      if usr.save
        @current_user = usr
      end
    else
      @current_user = User.where(token: token).first
    end
  end
end
