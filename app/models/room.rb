class Room < ApplicationRecord
  belongs_to :user

  validates_presence_of [:title, :user_id]
end
