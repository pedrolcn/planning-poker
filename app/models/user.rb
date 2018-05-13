class User < ApplicationRecord
  has_many :rooms

  validates_presence_of [:token]
end