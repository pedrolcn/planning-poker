class User < ApplicationRecord
  has_many :rooms

  validates presence [:username, :token]
end