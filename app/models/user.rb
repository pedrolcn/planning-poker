class User < ApplicationRecord
  has_many :rooms

  validates presence [:token]
end