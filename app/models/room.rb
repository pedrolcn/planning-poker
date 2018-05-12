class Room < ApplicationRecord
  belongs_to :user

  validates_presence_of [:topic, :user_id]
end
